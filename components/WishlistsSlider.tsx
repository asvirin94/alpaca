import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from '@/components/ui/carousel'
import WishlistCard from '@/components/ui/WishlistCard'

const mock_lists = [
    {
        title: 'косметика',
        src: '/cosmetic.jpg'
    },
    {
        title: 'декор для дома',
        src: '/decor.jpg'
    },
    {
        title: 'мода',
        src: '/fashion.jpg'
    },
    {
        title: 'спорт',
        src: '/sport.jpg'
    },
    {
        title: 'вкусняшки',
        src: '/tasties.jpg'
    },
]

export default function WishlistsSlider() {
    return (
        <div className='flex'>
            <Carousel
                opts={{
                    align: "start",
                }}
                className="max-w-[280px] xxs:max-w-[340px] xs:max-w-[520px] mx-auto"
            >
                <CarouselContent>
                    {mock_lists.map((item, index) => (
                        <CarouselItem key={`${index}-list`}>
                            <WishlistCard title={item.title} src={item.src}/>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className='hidden lg:block'/>
                <CarouselNext className='hidden lg:block'/>
            </Carousel>
        </div>
    )
}
