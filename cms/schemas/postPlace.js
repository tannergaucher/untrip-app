export default {
  name: 'postPlace',
  title: 'Post Place',
  type: 'document',
  fields: [
    {
      name: 'place',
      title: 'Place',
      type: 'reference',
      to: { type: 'place' },
    },
    {
      name: 'text',
      title: 'Text',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],

  preview: {
    select: {
      title: 'place.name',
      media: 'place.image',
    },
  },
}
