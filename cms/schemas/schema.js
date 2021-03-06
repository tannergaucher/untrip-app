// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

import author from './author'
import category from './category'
import post from './post'
import tag from './tag'
import place from './place'
import postPlace from './postPlace'
import placeType from './placeType'
import social from './social'
import authorSocial from './authorSocial'
import popularPost from './popularPost'
import happeningThisMonthPost from './happeningThisMonthPost'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    post,
    tag,
    place,
    category,
    author,
    authorSocial,
    social,
    postPlace,
    placeType,
    popularPost,
    happeningThisMonthPost,
  ]),
})
