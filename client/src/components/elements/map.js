import React from "react"
import { Map, Marker, GoogleApiWrapper, InfoWindow } from "google-maps-react"

import Icon from "../../images/location-pin.svg"
import RedIcon from "../../images/location-pin-red.svg"

class MapContainer extends React.Component {
  state = {
    bounds: null,
    mapCenter: null,
    sanitizedPlaces: "",
    selectedPlace: "",
    showingInfoWindow: false,
    activeMarker: {},
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (
      this.props.placeInView &&
      this.props.placeInView.location !== prevState.mapCenter
    ) {
      this.setState({
        mapCenter: this.props.placeInView.location,
      })
    }
  }

  sanitizePlaces = () => {
    const sanitizedPlaces = []

    if (this.props.isUserList) {
      this.props.places.forEach(place => {
        sanitizedPlaces.push({
          id: place.id,
          name: place.name,
          location: {
            lat: place.lat,
            lng: place.lng,
          },
        })
      })

      this.setState({ sanitizedPlaces })
    } else {
      this.props.places.forEach(place => {
        sanitizedPlaces.push({
          id: place.place.id,
          name: place.place.name,
          location: {
            lat: place.place.location.lat,
            lng: place.place.location.lng,
          },
        })
      })
    }

    this.setState({ sanitizedPlaces })
    this.makeBounds()
  }

  makeBounds = () => {
    let points = []

    this.state.sanitizedPlaces.map(place => {
      points.push(place.location)
    })

    let bounds = new this.props.google.maps.LatLngBounds()

    for (var i = 0; i < points.length; i++) {
      bounds.extend(points[i])
    }

    this.setState({ bounds })
  }

  handleMarkerClick = (props, marker) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    })
  }

  handleMapClick = () => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      })
    }
  }

  render() {
    const { google, zoom, style, name } = this.props

    return (
      <Map
        google={google}
        initialCenter={{ lat: 3.139, lng: 101.6869 }}
        center={this.state.mapCenter}
        style={style}
        name={name}
        zoom={zoom}
        onReady={this.sanitizePlaces}
        bounds={this.state.bounds}
        onClick={this.handleMapClick}
      >
        {this.state.sanitizedPlaces &&
          this.state.sanitizedPlaces.map(place => (
            <Marker
              key={place.id}
              name={place.name}
              title={place.name}
              placeId={place.id}
              icon={{
                // FIX
                url:
                  this.state.selectedPlace.position === place.location
                    ? RedIcon
                    : Icon,
                anchor: new google.maps.Point(45, 45),
                scaledSize: new google.maps.Size(45, 45),
              }}
              position={{
                lat: place.location.lat,
                lng: place.location.lng,
              }}
              onClick={this.handleMarkerClick}
            />
          ))}

        <InfoWindow
          visible={this.state.showingInfoWindow}
          marker={this.state.activeMarker}
        >
          <div>
            <h1>{this.state.selectedPlace.name}</h1>
          </div>
        </InfoWindow>
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.GATSBY_GOOGLE_MAPS_KEY,
})(MapContainer)
