import React from "react"
import { Map, Marker, GoogleApiWrapper } from "google-maps-react"

class MapContainer extends React.Component {
  render() {
    const { google, zoom, style, name, lat, lng, places } = this.props

    let points = []

    places.map(place => {
      points.push({
        lat: place.lat,
        lng: place.lng,
      })
    })

    let bounds = new google.maps.LatLngBounds()

    for (var i = 0; i < points.length; i++) {
      bounds.extend(points[i])
    }

    return (
      <Map
        google={google}
        initialCenter={{ lat, lng }}
        bounds={bounds}
        style={style}
        name={name}
      >
        {places.map(place => (
          <Marker
            key={place.id}
            name={place.placeName}
            position={{
              lat: place.lat,
              lng: place.lng,
            }}
          />
        ))}
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.GATSBY_GOOGLE_MAPS_KEY,
})(MapContainer)
