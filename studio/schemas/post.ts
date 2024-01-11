export default {
  name: 'post',
  type: 'document',
  title: 'Post',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
      },
    },
    {
      name: 'category',
      type: 'array',
      title: 'Category',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Technology', value: 'technology'},
          {title: 'Design', value: 'design'},
          {title: 'Culture', value: 'culture'},
          {title: 'Business', value: 'business'},
          {title: 'Politics', value: 'politics'},
        ],
      },
    },
    {
      name: 'tags',
      type: 'array',
      tile: 'tags',
      of: [{type: 'string'}],
    },
    {
      name: 'mainImage',
      type: 'image',
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
        },
      ],
    },
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
          fields: [
            {
              type: 'text',
              name: 'alt',
              title: 'Alternative Text',
            },
          ],
        },
      ],
    },
    {
      name: 'author',
      type: 'reference',
      title: 'Author',
      to: [{type: 'user'}],
    },
  ],
}
