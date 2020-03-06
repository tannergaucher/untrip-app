import { GoogleApiWrapper, InfoWindow, Map, Marker } from "google-maps-react"

import Icon from "../../images/location-pin.svg"
import Img from "gatsby-image"
import { Link } from "gatsby"
import React from "react"
import { kebabCase } from "lodash"

class MapContainer extends React.Component {
  state = {
    bounds: null,
    mapCenter: null,
    sanitizedPlaces: "",
    selectedPlace: "",
    showingInfoWindow: false,
    activeMarker: {},
  }

  componentDidUpdate = (_prevProps, prevState) => {
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
          image: JSON.parse(place.imageUrl),
          location: {
            lat: place.lat,
            lng: place.lng,
          },
          slug: place.slug,
        })
      })

      this.setState({ sanitizedPlaces })
    } else {
      this.props.places.forEach(place => {
        sanitizedPlaces.push({
          id: place.place.id,
          name: place.place.name,
          image: place.place.image.asset.fluid,
          location: {
            lat: place.place.location.lat,
            lng: place.place.location.lng,
          },
          slug: place.place.slug.current,
        })
      })
    }

    this.setState({ sanitizedPlaces })
    this.makeBounds()
  }

  makeBounds = () => {
    let points = []

    this.state.sanitizedPlaces.forEach(place => {
      points.push(place.location)
    })

    let bounds = new this.props.google.maps.LatLngBounds()

    points.forEach(point => bounds.extend(point))

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
              title={place.name}
              id={place.id}
              name={place.name}
              image={place.image}
              slug={place.slug}
              icon={{
                // FIX
                url:
                  this.state.selectedPlace.position === place.location
                    ? ""
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

        {this.state.selectedPlace && (
          <InfoWindow
            visible={this.state.showingInfoWindow}
            marker={this.state.activeMarker}
          >
            <>
              <h2
                style={{
                  marginTop: `var(--space-sm)`,
                }}
              >
                {this.state.selectedPlace.name}
              </h2>
              <Img fluid={this.state.selectedPlace.image} />
              <hr />
              <nav className="nav">
                <a
                  href={`#${kebabCase(this.state.selectedPlace.title)}`}
                  className="nav-link"
                >
                  <h4>View in post </h4>
                </a>
                <Link
                  className="nav-link"
                  to={`/place/${kebabCase(this.state.selectedPlace.name)}`}
                >
                  <h4>All posts with {this.state.selectedPlace.name}</h4>
                </Link>
              </nav>
            </>
          </InfoWindow>
        )}
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.GATSBY_GOOGLE_MAPS_KEY,
})(MapContainer)
