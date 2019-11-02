function isPlaceInList(places, placeId) {
  const isPlace = places.filter(place => place.placeSanityId === placeId)
  return isPlace.length ? true : false
}

module.exports = isPlaceInList
