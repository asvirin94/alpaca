import Image from 'next/image'

import { auth } from '@/auth'

import WishlistCardButtons from '@/components/WishlistCardButtons'

export default async function WishlistCard(
    {title, src, id, owner}: { title: string, src?: string, id: string, owner: {_id: string, name: string} },
) {
    const session = await auth()
    if (!session) return null

    const isMine = session.id === owner._id

    return (
        <div className="wishlist-card">
            <WishlistCardButtons isMine={isMine} id={id} userId={session.id} />
            <div className='absolute w-full h-full z-10 bg-black opacity-30 rounded-[20px]'/>
            {src && <Image
              src={src}
              alt={title}
              className='rounded-[20px] object-cover'
              fill
            />}
            <p className='absolute z-10 bottom-[20px] left-1/2 -translate-x-1/2 max-w-[90%] text-center text-light-100
             font-bold text-[14px] leading-[15px] break-words'>
                {title.toUpperCase()}
            </p>
        </div>
    )
}
