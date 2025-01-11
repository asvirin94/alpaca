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

export const createWishlist = async () => {
    await writeClient.create({
        _type: 'wishlist',
        originalTitle: 'Test Test Test',
        owner: {
            "_ref": "5CRSzLt6xAbzM3VbXwmEWL",
            "_type": "reference"
        }
    })
}
