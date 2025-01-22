'use client'

import Image from 'next/image'

import { deleteFriendsWishlist, deleteMyWishlist } from '@/lib/actions'
import { useToast } from '@/hooks/use-toast'

export default function WishlistCardButtons({ isMine, id, userId }: { isMine: boolean, id: string, userId: string }) {
    const { toast } = useToast()
    const showToast = () => {
        toast({
            title: "👌",
            description: "ID вишлиста скопирован.",
        });
    };

    const deleteHandler = async () => {
        if(isMine) {
            await deleteMyWishlist(id)
            toast({
                description: 'Ваш вишлист удален.'
            })
        } else {
            await deleteFriendsWishlist(id, userId)
            toast({
                description: 'Вишлист друга удален.'
            })
        }
    }

    return (
        <div className='absolute z-20 top-2.5 right-2.5 flex-between w-[58px]'>
            <button onClick={() => {
                navigator.clipboard.writeText(id)
                showToast()
            }}>
                <Image src='/share.svg' width={24} height={24} alt=''/>
            </button>

            <button onClick={deleteHandler}>
                <Image src='/delete.svg' width={17} height={17} alt=''/>
            </button>
        </div>
    )
}
