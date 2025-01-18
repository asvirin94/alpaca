import Image from 'next/image'
import Link from 'next/link'

export default function AddListCard() {
    return (
        <Link href='/new-wishlist'>
            <div className='h-[240px] w-[160px] flex-center bg-primary bg-opacity-30 rounded-[20px]'>
                <Image src='/plus.svg' width={75} height={75} alt=''/>
            </div>
        </Link>
    )
}
