
import { Preview } from 'sanity';

interface BlogDocument {
  publicationDate: string;
  title: string;
}

const blogPreview: Preview<BlogDocument> = {
  select: {
    publicationDate: 'publicationDate',
    title: 'title',
  },
  prepare(selection) {
    const { publicationDate, title } = selection;

    const dateObj = new Date(publicationDate);
    
    const formattedDate = dateObj.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });

    return {
      title: title,
      subtitle: `${formattedDate} - 5 min read`, 
    };
  },
};

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
      },
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
      options: {
        source: 'title',
      },
    },
    {
      name: 'titleImage',
      type: 'image',
      title: 'Title Image',
    },
    {
      name: 'smallDescription',
      type: 'text',
      title: 'Small Description',
    },
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        {
          type: 'block',
        },
      ],
    },
  ],
  preview: blogPreview,
};

