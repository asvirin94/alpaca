'use server'

import { writeClient } from '@/sanity/lib/write-client'
import { WishListItemType } from '@/types'

export const createItem = async (item: WishListItemType, id: string) => {
    await writeClient
        .patch(id)
        .setIfMissing({'items': []})
        .append('items', [item])
        .commit({autoGenerateArrayKeys: true})
}

export const deleteItem = async (id: string, key: string) => {
    await writeClient.patch(id).unset([`items[_key=="${key}"]`]).commit()
}
