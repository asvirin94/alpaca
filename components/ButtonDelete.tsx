'use client'

import { deleteItem } from '@/lib/actions'

export default function ButtonDelete({id, keyToDelete}: {id: string, keyToDelete: string}) {
    return (
        <button onClick={() => deleteItem(id, keyToDelete)}>Удалить</button>
    )
}
