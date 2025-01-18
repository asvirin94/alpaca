export type WishlistType = {
    _id: string;
    originalTitle: string;
    image: string
}

export type WishListItemType = {
    _type: string;
    _key?: string;
    name: string;
    price: number;
    url: string;
    image: string;
}
