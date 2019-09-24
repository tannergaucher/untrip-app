export default {
  name: 'place',
  title: 'Place',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'placeType',
      title: 'Place Type',
      type: 'reference',
      to: { type: 'placeType' },
    },
    {
      name: 'tags',
      title: 'Place Tags',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'tag' } }],
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'imageCaption',
      title: 'Image Caption',
      type: 'text',
    },
    {
      name: 'imageCredit',
      title: 'Image Credit',
      type: 'text',
    },
    {
      name: 'imageLink',
      title: 'Image Credit Link',
      type: 'url',
    },
    {
      name: 'location',
      title: 'location',
      type: 'geopoint',
    },
    {
      name: 'facebookLink',
      title: 'Facebook Link',
      type: 'url',
    },
    {
      name: 'instagramLink',
      title: 'Instagram Link',
      type: 'url',
    },
    {
      name: 'twitterLink',
      title: 'Twitter Link',
      type: 'url',
    },
    {
      name: 'websiteLink',
      title: 'Website Link',
      type: 'url',
    },
    {
      name: 'phoneNumber',
      title: 'Phone Number',
      type: 'string',
    },
  ],
}
