import Header from '@/components/Header'
import WishlistsSlider from '@/components/WishlistsSlider'
import Footer from '@/components/Footer'

export default function Home() {
    return (
        <>
            <div className='container'>
                <Header/>
                <h2 className='section-name'>МОИ СПИСКИ</h2>
                <WishlistsSlider/>
                <h2 className='section-name'>СПИСКИ ДРУЗЕЙ</h2>
                <WishlistsSlider/>
                <h2 className='section-name'>РЕКОМЕНДАЦИИ</h2>
                <WishlistsSlider/>
            </div>
            <Footer/>
        </>
    )
}
