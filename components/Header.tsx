import Link from 'next/link'

import Logo from '@/components/Logo'
import Burger from '@/components/Burger'
import HeaderImage from '@/components/HeaderImage'
import RunningAlpaca from '@/components/RunningAlpaca'

export default function Header() {
    return(
        <header className='container header'>
            <div className="relative flex-between h-[62px]">
                <Link href='/'>
                    <Logo />
                </Link>
                <div className='hidden lg:flex absolute left-1/2 bottom-0 -translate-x-1/2 w-[397px] h-[34px] items-end'>
                    <RunningAlpaca />
                    <HeaderImage />
                </div>
                <Burger />
            </div>
            <div className='lg:hidden relative mt-[64px] mx-auto w-[285px] h-[34px]'>
                <RunningAlpaca />
                <HeaderImage />
            </div>
        </header>
    )
}
