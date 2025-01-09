import { auth } from '@/auth'
import { client } from '@/sanity/lib/client'
import { WISHLISTS_BY_ID_QUERY } from '@/sanity/lib/queries'
import { WishlistType } from '@/types'
import Link from 'next/link'

export default async function Home() {
    const session = await auth()
    const wishlists: WishlistType[] = await client.fetch(WISHLISTS_BY_ID_QUERY, {id: session?.id})

    return (
        <div className="p-10">
            <div className="mt-10 flex gap-8">
                {wishlists.length > 0 && wishlists.map((wishlist: WishlistType) => (
                    <Link key={wishlist._id} href={`/wishlist/${wishlist._id}`}>
                        <p>{wishlist.originalTitle}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
}
