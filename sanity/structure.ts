import type { StructureResolver } from 'sanity/structure'

export const structure: StructureResolver = (S) =>
    S.list()
        .title('Content')
        .items([
            S.documentTypeListItem('user').title('Users'),
            S.documentTypeListItem('wishlist').title('Wish Lists'),
            S.documentTypeListItem('item').title('Items'),
        ])
