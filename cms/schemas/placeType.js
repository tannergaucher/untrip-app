export default {
  name: 'placeType',
  title: 'Place Type',
  type: 'document',
  fields: [
    {
      name: 'type',
      title: 'Place Type',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Place Type Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}
