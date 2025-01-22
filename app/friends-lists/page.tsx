import { auth } from '@/auth'
import { client } from '@/sanity/lib/client'
import { FRIENDS_WISHLISTS_BY_ID_QUERY } from '@/sanity/lib/queries'

import WishlistsWrapper from '@/components/ui/WishlistsWrapper'
import AddFriendsListInput from '@/components/AddFriendsListInput'
import { SanityLive } from '@/sanity/lib/live'

export default async function Page() {
    const session = await auth()
    if (!session) return <h2 className='container section-name text-center'>Авторизуйтесь, чтобы увидеть списки друзей</h2>

    const wishlists = await client
        .withConfig({useCdn: false})
        .fetch(FRIENDS_WISHLISTS_BY_ID_QUERY, {id: session.id})

    return (
        <div className='container'>
            <h2 className='section-name section-title'>ДОБАВИТЬ СПИСОК ДРУГА</h2>
            <AddFriendsListInput userId={session.id}/>

            <h2 className='section-name section-title'>СПИСКИ ДРУЗЕЙ</h2>
            <WishlistsWrapper friends wishlists={wishlists} />

            <SanityLive />
        </div>
    )
}
