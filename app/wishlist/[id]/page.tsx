import { writeClient } from '@/sanity/lib/write-client'
import { client } from '@/sanity/lib/client'
import { ITEMS_BY_WISHLIST_ID_QUERY } from '@/sanity/lib/queries'
import Link from 'next/link'
import { SanityLive } from '@/sanity/lib/live'
import { WishListItemType } from '@/types'

export default async function Page({params}: { params: Promise<{ id: string }> }) {
    const {id} = await params;
    const {items} = await client.fetch(ITEMS_BY_WISHLIST_ID_QUERY, {id})

    return (
        <div className="p-8">
            {id}

            <form action={async () => {
                'use server'
                const mockItem = {
                    _type: 'item',
                    name: 'ТАНК!!!!',
                    price: 100500,
                    url: 'https://ru.wikipedia.org/wiki/%D0%A2%D0%B0%D0%BD%D0%BA',
                    image: 'https://yastatic.net/naydex/yandex-search/Q9GB4NM85/51b89390/AD2J99BvXt66tyLQh_782TSAp0Jsl0s6vLtrfzj-a4IAd50Fwd0AHmQ7QVjZ_n0eG1xG1G1sW0Jv5--QtDx-xYAZ-cb16zqqaiIGoRK7-TxRhKY3CaLfWvlbi2vZamtmJbesdNT9tC5BnrR9z03fSSwqhHLKmyy1_jLq4NFYj2HRfxoQ',
                };

                await writeClient
                    .patch(id)
                    .setIfMissing({items: []})
                    .append('items', [mockItem])
                    .commit({autoGenerateArrayKeys: true});
            }}>
                <button type="submit">Add Item</button>
            </form>

            <div className='mt-10 flex flex-wrap gap-8'>
                {items ? (items.map((item: WishListItemType, index: number) => (
                        <div key={`item_${index}`}>
                            <form action={async () => {
                                'use server'

                                await writeClient.patch(id).unset([`items[_key=="${item._key}"]`]).commit()
                            }}>
                                <button type='submit'>Удалить</button>
                            </form>
                            <img src={item.image}/>
                            <p>{item.name}</p>
                            <p>{item.price}</p>
                            <Link href={item.url} target="_blank">Ссылка</Link>
                        </div>
                    ))
                ) : null}
            </div>

            <SanityLive/>
        </div>
    )
}
