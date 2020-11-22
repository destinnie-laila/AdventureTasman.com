import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

// This the marker comoponet that pin points a location which is different to the SimpleMap
const AnyReactComponent = ({ text }) => <div>{text}</div>;

// This is the over all map of the Nelson region using the Lat and Long for Nelson NZ
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: -41.27,
      lng: 173.28
    },
    zoom: 11
  };

  // Did a NPM install for google maps, The google map tag is built in from the dependency
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: "AIzaSyAWhEOQJKpkqNdp7r8qmzqdx8ySaNapO8Y",
            language: "en"
          }} // Implemented my own API key
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {/* This is the default pin point that the marker is set to you may change this location if you like */}

          <AnyReactComponent
            lat={-41.270634}
            lng={173.283966}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;



// ====== Code reference

// https://www.npmjs.com/package/google-map-react



