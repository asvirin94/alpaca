import { defineQuery } from 'next-sanity'

export const USER_BY_ID_QUERY = defineQuery(`
  *[_type == "user" && id == $id][0] {
    _id,
    id,
    name,
    email,
  }
  `);

export const WISHLISTS_BY_ID_QUERY = defineQuery(`
  *[_type == "wishlist" && owner._ref == $id] | order(_createdAt desc) {
    _id,
    originalTitle,
    image
  }  
`)

export const ITEMS_BY_WISHLIST_ID_QUERY = defineQuery(`
*[_type == "wishlist" && _id == $id][0] {
  items
}
`)

