import { title } from "process";

export default {
    name: 'blog',
    type: 'document',
    title: 'Blog',
    fields: [
        {
            name: 'publicationDate',
            type: 'datetime',
            title: 'Publication Date',
            options: {
                dateFormat: 'MMM YYYY',
                timeFormat: false,
            }
        },
        {
            name: 'title',
            type: 'string',
            title: 'Title of blog article',
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug of your blog article',
            options:{
                source: 'title',
            }
        },
        {
            name: 'titleImage',
            type: 'image',
            title: 'Title Image'
        },
        {
            name: 'smallDescription',
            type: 'text',
            title: 'Small Description'
        },
        {
            name: 'content',
            type: 'array',
            title: 'Content',
            of: [
                {
                    type: 'block',
                }
            ]
        }
    ],
    preview: {
        select: {
            publicationDate: 'publicationDate',
            title: 'title',
        },
        prepare(selection) {
            const { publicationDate, title } = selection;
            return {
                title: title,
                subtitle: `${publicationDate} - 5 min read`, // Concatenate with "5 min read"
            };
        },
    },
}

