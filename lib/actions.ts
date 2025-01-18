'use server'

import { writeClient } from '@/sanity/lib/write-client'
import { auth } from '@/auth'

import { parseServerActionResponse } from '@/lib/utils'

import { WishListItemType } from '@/types'

export const createWishlist = async (form: FormData) => {
    const session = await auth()

    const {originalTitle, image} = Object.fromEntries(form)

    try {
        const wishlist = {
            originalTitle,
            image,
            owner: {
                _type: 'reference',
                _ref: session?.id
            }
        }

        const result = await writeClient.create({_type: 'wishlist', ...wishlist})
        return parseServerActionResponse({
            ...result,
            status: 'success',
        })
    } catch (error) {
        console.error(error)

        return parseServerActionResponse({
            status: 'error',
        })
    }
}

export const addFriendsWishlist = async (
    wishlistId: string, userId: string
) => {
    try {
        const result = await writeClient
            .patch(wishlistId)
            .setIfMissing({friendLists: []})
            .append('friendLists', [
                {
                    friend: {_type: 'reference', _ref: userId},
                    customTitle: ''
                },
            ])
            .commit({autoGenerateArrayKeys: true})

        return parseServerActionResponse({
            ...result,
            status: 'success',
        })
    } catch (error) {
        console.error(error)

        return parseServerActionResponse({
            status: 'error',
        })
    }
}

export const createItem = async (
    item: WishListItemType, id: string
) => {
    await writeClient
        .patch(id)
        .setIfMissing({'items': []})
        .append('items', [item])
        .commit({autoGenerateArrayKeys: true})
}

export const deleteItem = async (id: string, key: string) => {
    await writeClient.patch(id).unset([`items[_key=="${key}"]`]).commit()
}

