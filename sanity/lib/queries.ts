import { defineQuery } from 'next-sanity'

export const USER_BY_ID_QUERY = defineQuery(`
  *[_type == "user" && id == $id][0] {
    _id,
    id,
    name,
    email,
  }
  `)

export const WISHLISTS_BY_ID_QUERY = defineQuery(`
  *[_type == "wishlist" && owner._ref == $id] | order(_createdAt desc) {
    _id,
    originalTitle,
    image
  }  
`)

export const FRIENDS_WISHLISTS_BY_ID_QUERY = defineQuery(`
  *[_type == "wishlist" && count(friendLists[friend._ref == $id]) > 0]  | order(_createdAt desc) {
  _id,
  originalTitle,
  items,
  owner->{
    _id,
    name
  },
  image,
  friendLists[friend._ref == $id]{
      customTitle
    }[0]
}
`)

export const ITEMS_BY_WISHLIST_ID_QUERY = defineQuery(`
*[_type == "wishlist" && _id == $id][0] {
  items
}
`)

