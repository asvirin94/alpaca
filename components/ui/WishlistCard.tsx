import Image from 'next/image'

export default function WishlistCard({title, src}: {title: string, src?: string}) {
    return(
        <div className="wishlist-card">
            {src && <Image fill src={src} alt={title}/>}
            <p className='relative mx-auto mt-[205px] text-light-100
             font-bold text-[14px] leading-[15px] z-10'>{title.toUpperCase()}</p>
        </div>
    )
}
