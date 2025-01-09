import { auth, signIn, signOut } from '@/auth'
import Link from 'next/link'

export default async function Nav() {
    const session = await auth()

    return (
        <header>
            <nav className='flex justify-between py-4 px-10'>
                <Link href="/">
                    <p>ТИПА ЛОГОТИП</p>
                </Link>
                {session && session?.user ? (
                    <form action={async () => {
                        'use server'

                        await signOut()
                    }}>
                        <button type="submit">Выйти</button>
                    </form>
                ) : (
                    <form action={async () => {
                        'use server'

                        await signIn()
                    }}>
                        <button type="submit">Войти</button>
                    </form>
                )}
            </nav>
        </header>
    )
}
