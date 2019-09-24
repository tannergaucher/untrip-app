export default {
  name: 'authorSocial',
  title: 'Author Social',
  type: 'document',
  fields: [
    {
      name: 'site',
      title: 'Site',
      type: 'reference',
      to: { type: 'social' },
    },
    {
      name: 'handle',
      title: 'Handle',
      type: 'string',
    },
  ],
}
