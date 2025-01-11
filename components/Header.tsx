import Logo from '@/components/Logo'
import Burger from '@/components/Burger'
import HeaderImage from '@/components/HeaderImage'

export default function Header() {
    return(
        <header>
            <div className="relative flex-between h-[62px]">
                <Logo />
                <div className='hidden lg:flex absolute left-1/2 bottom-0 -translate-x-1/2 w-[397px] h-[34px] items-end'>
                    <HeaderImage />
                </div>
                <Burger />
            </div>
            <div className='lg:hidden relative mt-[64px] mx-auto w-[285px] h-[34px]'>
                <HeaderImage />
            </div>
        </header>
    )
}
