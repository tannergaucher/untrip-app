function isPlaceInList(places, placeId) {
  const isPlace = places.filter(place => place.sanityId === placeId)
  return isPlace.length ? true : false
}

module.exports = isPlaceInList
