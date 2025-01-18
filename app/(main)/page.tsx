import { Suspense } from 'react'
import { auth } from '@/auth'

import { sanityFetch, SanityLive } from '@/sanity/lib/live'
import { WISHLISTS_BY_ID_QUERY } from '@/sanity/lib/queries'

import WishlistsSlider from '@/components/WishlistsSlider'

export default async function Home() {
    const session = await auth()
    if (!session) return <div className='container flex-center'>Авторизуйтесь, чтобы увидеть свои списки</div>

    const { data: wishlists } = await sanityFetch({
        query: WISHLISTS_BY_ID_QUERY, params: {id: session?.id || null}
    })

    return (
        <>
            <div className='container'>
                <h2 className='section-name'>МОИ СПИСКИ</h2>
                <Suspense fallback={<div>Загрузка...</div>}>
                    <WishlistsSlider wishlists={wishlists} />
                </Suspense>
                <h2 className='section-name'>СПИСКИ ДРУЗЕЙ</h2>
                <Suspense fallback={<div>Загрузка...</div>}>
                    <WishlistsSlider/>
                </Suspense>
                <h2 className='section-name'>РЕКОМЕНДАЦИИ</h2>
                <Suspense fallback={<div>Загрузка...</div>}>
                    <WishlistsSlider/>
                </Suspense>
            </div>

            <SanityLive />
        </>
    )
}
