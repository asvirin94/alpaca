import Nav from '@/components/Nav'
import Wishlists from '@/components/Wishlists'

// export const experimental_ppr = true

export default async function Home() {

    return (
        <>
            <Nav/>
            <Wishlists />
        </>
    );
}
