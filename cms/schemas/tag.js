export default {
  name: 'tag',
  title: 'Tag',
  type: 'document',
  fields: [
    {
      name: 'tag',
      title: 'Tag',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Tag Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'tag',
        maxLength: 96,
      },
    },
  ],
}
