import { Menu } from 'lucide-react'
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger
} from '@/components/ui/sheet'
import Link from 'next/link'
import { auth, signIn, signOut } from '@/auth'

export default async function Burger() {
    const session = await auth()

    return (
        <Sheet>
            <SheetTrigger className='focus-visible:outline-none focus:outline-none'>
                <Menu className="text-primary focus-visible:outline-none focus:outline-none" size={50}/>
            </SheetTrigger>
            <SheetContent className='w-[300px] text-start bg-primary-200'>
                <SheetHeader>
                    <SheetTitle className='text-[20px] leading-[26px] font-bold text-primary-300'>
                        {session
                            ? session?.user?.name
                            : (
                                <form action={async () => {
                                    'use server'
                                    await signIn()
                                }}>
                                    <button type='submit'>Войти</button>
                                </form>
                            )
                        }
                    </SheetTitle>
                    {session?.user && (
                        <ul className='!mt-[22px] flex flex-col gap-[21px]'>
                            <li className='menu-item'>
                                <Link href='/'>
                                    ГЛАВНАЯ
                                </Link>
                            </li>
                            <li className='menu-item'>
                                <Link href='/'>
                                    МОИ СПИСКИ
                                </Link>
                            </li>
                            <li className='menu-item'>
                                <Link href='/'>
                                    СПИСКИ ДРУЗЕЙ
                                </Link>
                            </li>
                            <li className='menu-item'>
                                <Link href='/'>
                                    НАСТРОЙКИ
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
