import Link from 'next/link'
import { Suspense } from 'react'

import { auth } from '@/auth'

import { SanityLive } from '@/sanity/lib/live'
import { client } from '@/sanity/lib/client'
import { FRIENDS_WISHLISTS_BY_ID_QUERY, WISHLISTS_BY_ID_QUERY } from '@/sanity/lib/queries'

import WishlistsSlider from '@/components/ui/WishlistsSlider'

export default async function Home() {
    const session = await auth()
    if (!session) return <h2 className='container section-title section-name text-center'>Авторизуйтесь, чтобы увидеть свои
        списки</h2>

    const wishlists = await client
        .withConfig({useCdn: false})
        .fetch(WISHLISTS_BY_ID_QUERY, {id: session.id})

    const friendsWishlists = await client
        .withConfig({useCdn: false})
        .fetch(FRIENDS_WISHLISTS_BY_ID_QUERY, {id: session.id})


    return (
        <>
            <div className='container'>
                <div className='section-title'>
                    <Link href='/my-lists'>
                        <h2 className='section-name'>МОИ СПИСКИ</h2>
                    </Link>
                </div>
                <Suspense fallback={<div>Загрузка...</div>}>
                    <WishlistsSlider personal wishlists={wishlists}/>
                </Suspense>

                <div className='section-title'>
                    <Link href='/friends-lists'>
                        <h2 className='section-name'>СПИСКИ ДРУЗЕЙ</h2>
                    </Link>
                </div>
                <Suspense fallback={<div>Загрузка...</div>}>
                    <WishlistsSlider friends wishlists={friendsWishlists}/>
                </Suspense>

                <div className='section-title'>
                    <h2 className='section-name'>РЕКОМЕНДАЦИИ</h2>
                </div>
                <Suspense fallback={<div>Загрузка...</div>}>
                    <WishlistsSlider/>
                </Suspense>
            </div>

            <SanityLive/>
        </>
    )
}
