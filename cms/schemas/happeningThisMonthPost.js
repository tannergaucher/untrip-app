export default {
  name: 'happeningThisMonth',
  title: 'Happening This Month',
  type: 'document',
  fields: [
    {
      name: 'happeningThisMonth',
      title: 'Happening This Month Posts',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'post' } }],
      validation: Rule => Rule.max(5).warning('Must be 5 or less'),
    },
  ],
}
