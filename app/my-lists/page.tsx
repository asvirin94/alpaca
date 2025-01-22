import { auth } from '@/auth'
import { client } from '@/sanity/lib/client'
import { WISHLISTS_BY_ID_QUERY } from '@/sanity/lib/queries'
import { SanityLive } from '@/sanity/lib/live'

import WishlistsWrapper from '@/components/ui/WishlistsWrapper'

export default async function Page() {
    const session = await auth()
    if (!session) return <h2 className='container section-name text-center'>Авторизуйтесь, чтобы увидеть свои
        списки</h2>

    const wishlists = await client
        .withConfig({useCdn: false})
        .fetch(WISHLISTS_BY_ID_QUERY, {id: session.id})

    return (
        <div className='container'>
            <div className='section-title'>
                <h2 className='section-name'>МОИ СПИСКИ</h2>
            </div>

            <WishlistsWrapper wishlists={wishlists}/>

            <SanityLive/>
        </div>
    )
}
