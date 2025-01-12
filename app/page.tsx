import Header from '@/components/Header'
import WishlistsSlider from '@/components/WishlistsSlider'
import Footer from '@/components/Footer'

export default function Home() {
    return (
        <>
            <div className='container'>
                <Header/>
                <h2 className='section-name'>мои списки</h2>
                <WishlistsSlider/>
                <h2 className='section-name'>списки друзей</h2>
                <WishlistsSlider/>
                <h2 className='section-name'>рекомендации</h2>
                <WishlistsSlider/>
            </div>
            <Footer/>
        </>
    )
}
