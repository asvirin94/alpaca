import Image from 'next/image'

export default function WishlistCard({title, src}: {title: string, src?: string}) {
    return(
        <div className="wishlist-card">
            {src && <Image fill src={src} alt={title}/>}
            <p>{title.toLowerCase()}</p>
        </div>
    )
}
