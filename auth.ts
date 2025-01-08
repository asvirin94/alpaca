import NextAuth from "next-auth"
import { client } from '@/sanity/lib/client'
import { writeClient } from '@/sanity/lib/write-client'
import { USER_BY_ID_QUERY } from '@/sanity/lib/queries'
import Google from '@auth/core/providers/google'
import Yandex from '@auth/core/providers/yandex'

export const {handlers, signIn, signOut, auth} = NextAuth({
    providers: [
        Google({
            authorization: {
                params: {
                    prompt: 'select_account'
                }
            }
    }),
        Yandex
    ],
    callbacks: {
        async signIn({user: { name, email }, profile }) {
            const existingUser = await client.fetch(USER_BY_ID_QUERY, {id: profile?.sub})

            if(!existingUser) {
                await writeClient.create({
                    _type: 'user',
                    id: profile?.sub,
                    name,
                    email,
                })
            }

            return true;
        },
        async jwt({ token, account, profile }) {
            if (account && profile) {
                const user = await client
                    .withConfig({ useCdn: false })
                    .fetch(USER_BY_ID_QUERY, {
                        id: profile?.sub,
                    });

                token.id = user?._id;
            }

            return token;
        },
        async session({ session, token }) {
            Object.assign(session, { id: token.id });
            return session;
        },
    }
})
