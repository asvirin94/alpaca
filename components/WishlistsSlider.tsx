import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from '@/components/ui/carousel'
import WishlistCard from '@/components/ui/WishlistCard'
import AddListCard from '@/components/AddListCard'

import { WishlistType } from '@/types'

const mock_lists = [
    {
        originalTitle: 'косметика',
        image: '/cosmetic.jpg'
    },
    {
        originalTitle: 'декор для дома',
        image: '/decor.jpg'
    },
    {
        originalTitle: 'мода',
        image: '/fashion.jpg'
    },
    {
        originalTitle: 'спорт',
        image: '/sport.jpg'
    },
    {
        originalTitle: 'вкусняшки',
        image: '/tasties.jpg'
    },
]

export default function WishlistsSlider({ wishlists } : { wishlists?: WishlistType[] }) {
    const lists = wishlists && wishlists?.length > 0
        ? [...wishlists, ...mock_lists]
        : mock_lists

    return (
        <div className='flex'>
            <Carousel
                opts={{
                    align: "start",
                }}
                className="max-w-[280px] xxs:max-w-[340px] xs:max-w-[520px] mx-auto"
            >
                <CarouselContent>
                    <CarouselItem>
                        <AddListCard />
                    </CarouselItem>
                    {lists.map((item, index) => (
                        <CarouselItem key={`${index}-list`}>
                            <WishlistCard title={item.originalTitle} src={item.image}/>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className='hidden lg:block'/>
                <CarouselNext className='hidden lg:block'/>
            </Carousel>
        </div>
    )
}
