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

export default function WishlistsSlider(
    {wishlists, myOwn}: { wishlists?: WishlistType[], myOwn?: boolean }
) {
    if (!wishlists?.length) return <div className='text-center'>Здесь пока ничего нет</div>

    return (
        <div className='flex'>
            <Carousel
                opts={{
                    align: "start",
                }}
                className="max-w-[280px] xxs:max-w-[340px] xs:max-w-[520px] mx-auto"
            >
                <CarouselContent>
                    {myOwn && (
                        <CarouselItem>
                            <AddListCard/>
                        </CarouselItem>
                    )}
                    {wishlists?.map((item, index) => (
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
