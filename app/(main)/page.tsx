import Link from 'next/link'
import { Suspense } from 'react'

import { auth } from '@/auth'

import { SanityLive } from '@/sanity/lib/live'
import { client } from '@/sanity/lib/client'
import { FRIENDS_WISHLISTS_BY_ID_QUERY, WISHLISTS_BY_ID_QUERY } from '@/sanity/lib/queries'

import WishlistsSlider from '@/components/WishlistsSlider'
import { WishlistType } from '@/types'


export default async function Home() {
    const session = await auth()
    if (!session) return <h2 className='container section-name text-center'>Авторизуйтесь, чтобы увидеть свои
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
                <ul>
                    {wishlists.map((wishlist: WishlistType) => (
                        <li key={wishlist._id}>{wishlist._id}</li>
                    ))}
                </ul>
                <h2 className='section-name'>МОИ СПИСКИ</h2>
                <Suspense fallback={<div>Загрузка...</div>}>
                    <WishlistsSlider myOwn wishlists={wishlists}/>
                </Suspense>

                <Link href='/friends-lists'>
                    <h2 className='section-name'>СПИСКИ ДРУЗЕЙ</h2>
                </Link>
                <Suspense fallback={<div>Загрузка...</div>}>
                    <WishlistsSlider wishlists={friendsWishlists}/>
                </Suspense>

                <h2 className='section-name'>РЕКОМЕНДАЦИИ</h2>
                <Suspense fallback={<div>Загрузка...</div>}>
                    <WishlistsSlider/>
                </Suspense>
            </div>

            <SanityLive/>
        </>
    )
}
