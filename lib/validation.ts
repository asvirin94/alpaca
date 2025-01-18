import { z } from 'zod'

export const newWishlistSchema = z.object({
    originalTitle: z.string()
        .min(3, 'Название должно содержать не менее 3 символов')
        .max(80, 'Название должно содержать не более 80 символов'),
    image: z.string(),
})
