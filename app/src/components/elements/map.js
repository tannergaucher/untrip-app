import React from "react"
import { Map, Marker, GoogleApiWrapper, InfoWindow } from "google-maps-react"
import { Box, Heading } from "grommet"
import Img from "gatsby-image"

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

    console.log(this.state.selectedPlace.image)
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
        zoom={zoom}
      >
        {places.map(place => (
          <Marker
            key={place.id}
            name={place.placeName}
            title={place.placeName}
            image={place.placeImageUrl}
            position={{
              lat: place.lat,
              lng: place.lng,
            }}
            onClick={this.onMarkerClick}
          />
        ))}

        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
        >
          <Box>
            <Heading margin="none" level="4">
              {this.state.selectedPlace.name}
            </Heading>
          </Box>
        </InfoWindow>
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.GATSBY_GOOGLE_MAPS_KEY,
})(MapContainer)
