import { defineType, defineField } from 'sanity';

export default defineType({
    name: 'wishlist',
    type: 'document',
    title: 'Wish List',
    fields: [
        defineField({
            name: 'originalTitle',
            type: 'string',
            title: 'Original Title',
            validation: (Rule) => Rule.required().min(1).max(100),
        }),
        defineField({
            name: 'items',
            type: 'array',
            title: 'Items',
            of: [{ type: 'item' }],
        }),
        defineField({
            name: 'owner',
            type: 'reference',
            title: 'Owner',
            to: { type: 'user' },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'friendLists',
            type: 'array',
            title: 'Friend Lists',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'friend',
                            type: 'reference',
                            title: 'Friend',
                            to: { type: 'user' },
                            validation: (Rule) => Rule.required(),
                        }),
                        defineField({
                            name: 'customTitle',
                            type: 'string',
                            title: 'Custom Title',
                            validation: (Rule) => Rule.max(100),
                        }),
                    ],
                },
            ],
        }),

    ],
});
