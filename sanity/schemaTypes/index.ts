import { type SchemaTypeDefinition } from 'sanity'
import user from '@/sanity/schemaTypes/user'
import wishlist from '@/sanity/schemaTypes/wishlist'
import item from '@/sanity/schemaTypes/item'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [user, wishlist, item],
}
