import { auth, signIn, signOut } from '@/auth'

export default async function Nav() {
    const session = await auth()

    return (
        <header>
            <nav>
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
