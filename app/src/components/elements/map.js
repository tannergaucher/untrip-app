import React from "react"
import { Map, Marker, GoogleApiWrapper } from "google-maps-react"

import Icon from "../../images/location-pin.svg"

class MapContainer extends React.Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    bounds: null,
  }

  onMarkerClick = (props, marker, e) => {
    // TODO: SCROLL PLACE PLACE ON PAGE

    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    })
  }

  onMapClicked = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      })
    }
  }

  makeBounds = () => {
    let points = []
    this.props.places.map(place => {
      points.push(place.place.location)
    })

    let bounds = new this.props.google.maps.LatLngBounds()

    for (var i = 0; i < points.length; i++) {
      bounds.extend(points[i])
    }

    this.setState({ bounds })
  }

  render() {
    const { google, zoom, style, name, lat, lng, places } = this.props

    return (
      <Map
        google={google}
        initialCenter={{ lat: 3.139, lng: 101.6869 }}
        style={style}
        name={name}
        zoom={zoom}
        onClick={this.onMapClicked}
        onReady={this.makeBounds}
        bounds={this.state.bounds}
      >
        {places.map(place => (
          <Marker
            name={place.place.name}
            title={place.place.title}
            style={{
              height: "40px",
            }}
            icon={{
              url: Icon,
              anchor: new google.maps.Point(45, 45),
              scaledSize: new google.maps.Size(45, 45),
            }}
            position={{
              lat: place.place.location.lat,
              lng: place.place.location.lng,
            }}
            onClick={this.onMarkerClick}
          />
        ))}
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.GATSBY_GOOGLE_MAPS_KEY,
})(MapContainer)
