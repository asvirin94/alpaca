import { WishListItemType } from '@/types'
import { ITEMS_BY_WISHLIST_ID_QUERY } from '@/sanity/lib/queries'
import { sanityFetch, SanityLive } from '@/sanity/lib/live'
import Button from '@/components/Button'
import { Suspense } from 'react'
import ButtonDelete from '@/components/ButtonDelete'

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const {id} = await params;
    const { data: {items} } = await sanityFetch({query: ITEMS_BY_WISHLIST_ID_QUERY, params: {id}})

    return (
        <div className="p-10">
            <p>{id}</p>

            <Suspense fallback={<div>Loading...</div>}>
                {items.length > 0 && items.map((item: WishListItemType) => (
                    <div key={item._key} className="flex gap-5 mb-3">
                        <p>{item.name}</p>
                        <ButtonDelete id={id} keyToDelete={item._key as string} />
                    </div>
                ))}
            </Suspense>

            <Button id={id}/>

            <SanityLive />
        </div>
    )
}
