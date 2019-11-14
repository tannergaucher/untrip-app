export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    {
      name: 'category',
      title: 'Category',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'category',
        maxLength: 96,
      },
    },
  ],
}
