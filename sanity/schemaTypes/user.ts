import { defineType, defineField } from 'sanity';

export default defineType({
    name: 'user',
    type: 'document',
    title: 'User',
    fields: [
        defineField({
            name: 'id',
            type: 'string',
            title: 'ID',
        }),
        defineField({
            name: 'name',
            type: 'string',
            title: 'Name',
            validation: (Rule) => Rule.required().min(1).max(50),
        }),
        defineField({
            name: 'email',
            type: 'string',
            title: 'Email',
            validation: (Rule) =>
                Rule.required().email().error('Please enter a valid email address'),
        }),
    ],
});
