import Image from 'next/image'

export default function WishlistCard({title, src}: { title: string, src?: string }) {
    return (
        <div className="wishlist-card">
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
