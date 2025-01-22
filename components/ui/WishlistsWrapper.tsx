import Link from 'next/link'

import { WishlistType } from '@/types'

import WishlistCard from '@/components/ui/WishlistCard'
import AddListCard from '@/components/AddListCard'

export default function WishlistsWrapper({friends, wishlists}: { friends?: boolean, wishlists: WishlistType[] }) {
    if (!wishlists.length && friends) return (
        <div className='lists-content text-center'>
            У вас пока нет вишлистов друзей. <br/>
            Введите ID вишлиста друга в поле выше, чтобы добавить первый!
        </div>
    )

    if (!wishlists.length) return (
        <div className='lists-content text-center'>
            У вас пока нет вишлистов. <br/>
            Нажмите <Link href='/new-wishlist' className='text-green font-semibold'>здесь</Link>, чтобы создать первый!
        </div>
    )

    return (
        <section className='flex flex-wrap gap-[20px] lists-content'>
            <AddListCard/>
            {wishlists.map((wishlist: WishlistType) => (
                <WishlistCard
                    key={wishlist._id}
                    id={wishlist._id}
                    title={wishlist.originalTitle}
                    src={wishlist.image}
                    owner={wishlist.owner}
                />
            ))}
        </section>
    )
}
