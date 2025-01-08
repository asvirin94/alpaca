import { defineType, defineField } from 'sanity';

export default defineType({
    name: 'item',
    type: 'document',
    title: 'Item',
    fields: [
        defineField({
            name: 'name',
            type: 'string',
            title: 'Name',
            validation: (Rule) => Rule.required().min(1).max(100),
        }),
        defineField({
            name: 'price',
            type: 'number',
            title: 'Price',
            validation: (Rule) => Rule.required().min(0).error('Price must be a positive number'),
        }),
        defineField({
            name: 'url',
            type: 'url',
            title: 'Item URL',
        }),
        defineField({
            name: 'image',
            type: 'url',
            title: 'Image URL',
        }),
    ],
});
