import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './marker'

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 48.853364,
      lng: 2.349052,
    },
    zoom: 13
  };

  render() {
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          //bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Marker
            lat={this.props.selectedFlatCoordinates.lat}
            lng={this.props.selectedFlatCoordinates.lng}
            text={'Kreyser Avrora'}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
