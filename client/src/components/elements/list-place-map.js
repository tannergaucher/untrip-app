import React from "react"
import { Map, Marker, GoogleApiWrapper } from "google-maps-react"

import Icon from "../../images/location-pin.svg"

class MapContainer extends React.Component {
  state = {
    bounds: null,
    mapCenter: null,
  }

  makeBounds() {
    let points = []
    this.props.places.map(place => {
      points.push({
        lat: place.lat,
        lng: place.lng,
      })
    })

    let bounds = new this.props.google.maps.LatLngBounds()

    for (var i = 0; i < points.length; i++) {
      bounds.extend(points[i])
    }

    this.setState({ bounds })
  }

  render() {
    const { google, zoom, style, name, places } = this.props

    return (
      <Map
        google={google}
        initialCenter={{ lat: 3.139, lng: 101.6869 }}
        center={this.state.mapCenter}
        style={style}
        name={name}
        zoom={zoom}
        onReady={this.makeBounds}
        bounds={this.state.bounds}
      >
        {places.map(place => (
          <Marker
            key={place.id}
            name={place.placeName}
            title={place.placeName}
            placeId={place.id}
            icon={{
              url: Icon,
              anchor: new google.maps.Point(45, 45),
              scaledSize: new google.maps.Size(45, 45),
            }}
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
