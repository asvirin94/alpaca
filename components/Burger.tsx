import Link from 'next/link'
import { Menu } from 'lucide-react'

import { auth, signIn, signOut } from '@/auth'

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger
} from '@/components/ui/sheet'

export default async function Burger() {
    const session = await auth()

    return (
        <Sheet>
            <SheetTrigger className='focus-visible:outline-none focus:outline-none'>
                <Menu className="text-primary focus-visible:outline-none focus:outline-none" size={50}/>
            </SheetTrigger>
            <SheetContent className='w-[300px] text-start bg-primary-200'>
                <SheetHeader>
                    <SheetTitle>
                        {session
                            ? (
                                <p className='text-[22px] leading-[26px] font-bold text-primary-300'>
                                    {session?.user?.name}
                                </p>
                            )
                            : (
                                <form action={async () => {
                                    'use server'
                                    await signIn()
                                }}>
                                    <button type='submit'>
                                        <p className='menu-item'>ВОЙТИ</p>
                                    </button>
                                </form>
                            )
                        }
                    </SheetTitle>
                    {session?.user && (
                        <ul className='!mt-[22px] flex flex-col gap-[21px]'>
                            <li className='menu-item'>
                                <Link href='/'>
                                    <SheetClose>
                                        ГЛАВНАЯ
                                    </SheetClose>
                                </Link>
                            </li>
                            <li className='menu-item'>
                                <Link href='/my-lists'>
                                    <SheetClose>
                                        МОИ СПИСКИ
                                    </SheetClose>
                                </Link>
                            </li>
                            <li className='menu-item'>
                                <Link href='/friends-lists'>
                                    <SheetClose>
                                        СПИСКИ ДРУЗЕЙ
                                    </SheetClose>
                                </Link>
                            </li>
                            <li className='menu-item'>
                                <Link href='/settings'>
                                    <SheetClose>
                                        НАСТРОЙКИ
                                    </SheetClose>
                                </Link>
                            </li>
                            <li className='menu-item'>
                                <form action={async () => {
                                    'use server'
                                    await signOut()
                                }}>
                                    <button type='submit'>
                                        ВЫЙТИ
                                    </button>
                                </form>
                            </li>
                        </ul>
                    )}
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}
