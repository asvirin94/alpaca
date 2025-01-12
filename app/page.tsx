import Header from '@/components/Header'
import WishlistsSlider from '@/components/WishlistsSlider'
import Footer from '@/components/Footer'
import { Suspense } from 'react'

export default function Home() {
    return (
        <>
            <div className='container'>
                <Header/>
                <h2 className='section-name'>МОИ СПИСКИ</h2>
                <Suspense fallback={<div>Загрузка...</div>}>
                    <WishlistsSlider/>
                </Suspense>
                <h2 className='section-name'>СПИСКИ ДРУЗЕЙ</h2>
                <Suspense fallback={<div>Загрузка...</div>}>
                    <WishlistsSlider/>
                </Suspense>
                <h2 className='section-name'>РЕКОМЕНДАЦИИ</h2>
                <Suspense fallback={<div>Загрузка...</div>}>
                    <WishlistsSlider/>
                </Suspense>
            </div>
            <Footer/>
        </>
    )
}
