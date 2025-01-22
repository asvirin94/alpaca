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
    { personal, friends, wishlists }: { personal?: boolean, friends?: boolean, wishlists?: WishlistType[]  }
) {
    if (!personal && !friends) return (
        <div className="lists-content text-center">
            Здесь пока ничего нет
        </div>
    )

    return (
        <div className='flex'>
            <Carousel
                opts={{
                    align: "start",
                }}
                className="lists-content"
            >
                <CarouselContent>
                    {personal && (
                        <CarouselItem>
                            <AddListCard/>
                        </CarouselItem>
                    )}
                    {wishlists?.map((item, index) => (
                        <CarouselItem key={`${index}-list`}>
                            <WishlistCard
                                id={item._id}
                                title={item.originalTitle}
                                src={item.image}
                                owner={item.owner}
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className='hidden lg:block'/>
                <CarouselNext className='hidden lg:block'/>
            </Carousel>
        </div>
    )
}
