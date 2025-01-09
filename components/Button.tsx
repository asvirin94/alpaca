'use client'

import { createItem } from '@/lib/actions'

const mockItem = {
    _type: 'item',
    name: 'ТАНК!!!!',
    price: 100500,
    url: 'https://ru.wikipedia.org/wiki/%D0%A2%D0%B0%D0%BD%D0%BA',
    image: 'https://yastatic.net/naydex/yandex-search/Q9GB4NM85/51b89390/AD2J99BvXt66tyLQh_782TSAp0Jsl0s6vLtrfzj-a4IAd50Fwd0AHmQ7QVjZ_n0eG1xG1G1sW0Jv5--QtDx-xYAZ-cb16zqqaiIGoRK7-TxRhKY3CaLfWvlbi2vZamtmJbesdNT9tC5BnrR9z03fSSwqhHLKmyy1_jLq4NFYj2HRfxoQ',
};

export default function Button({id}: {id: string}) {
    return(
        <button
            className="mt-10 bg-amber-300 p-2 border-black"
            onClick={() => createItem(mockItem, id)}
        >
            Добавить предмет
        </button>
    )
}
