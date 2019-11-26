export default {
  name: 'popularPost',
  title: 'Popular Post',
  type: 'document',
  fields: [
    {
      name: 'popularPost',
      title: 'Popular Posts',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'post' } }],
      validation: Rule => Rule.max(5).warning('Must be 5 or less'),
    },
  ],
}
