import Link from 'next/link'
import { client } from '@/sanity/lib/client'
import { WISHLISTS_BY_ID_QUERY } from '@/sanity/lib/queries'

import { auth } from '@/auth'
import { WishlistType } from '@/types'

export default async function Wishlists () {
    const session = await auth()
    const wishlists = await client.fetch(WISHLISTS_BY_ID_QUERY, {id: session?.id || null})

    return (
        <div className='flex gap-5 mt-5 ml-5'>
            {wishlists?.map((list: WishlistType) => (
                <Link href={`/wishlist/${list._id}`} key={list._id}>
                    <div>
                        <p>{list.originalTitle}</p>
                    </div>
                </Link>
            ))}
        </div>
    )
}
