import { WishlistType } from '@/types'

import WishlistCard from '@/components/ui/WishlistCard'

export default function WishlistsWrapper({wishlists}: {wishlists: WishlistType[]}) {
    return (
        <section className='flex flex-wrap gap-[20px] lists-content'>
            {wishlists.map((wishlist: WishlistType) => (
                <WishlistCard
                    key={wishlist._id}
                    id={wishlist._id}
                    title={wishlist.originalTitle}
                    src={wishlist.image}
                />
            ))}
        </section>
    )
}
