import React from "react"
import { Map, Marker, GoogleApiWrapper, InfoWindow } from "google-maps-react"

class MapContainer extends React.Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  }

  onMarkerClick = (props, marker, e) => {
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

  render() {
    const { google, zoom, style, name, lat, lng, places } = this.props

    return (
      <Map
        google={google}
        // initialCenter={{ lat, lng }}
        // bounds={bounds}
        style={style}
        name={name}
        zoom={zoom}
      ></Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.GATSBY_GOOGLE_MAPS_KEY,
})(MapContainer)
