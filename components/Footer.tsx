import Image from 'next/image'

export default function Footer() {
    return(
        <footer className='flex items-center w-full h-[80px] mt-auto py-[25px] px-[56px] bg-primary-100
         rounded-tl-[40px] rounded-tr-[40px]'>
            <p className='h-[26px] montserrat-font text-primary text-[12px] leading-[13px]'>
                WISHLIST <br /> BY FOREVER
            </p>
            <div className='flex gap-[11px] h-[20px] ml-auto'>
                <Image src='/tg.svg' alt='Телеграм' width={20} height={20} />
                <Image src='/vk.svg' alt='Вконтакте' width={20} height={20} />
            </div>
        </footer>
    )
}
