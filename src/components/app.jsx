import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import FlatList from './flat_list';
import flats from '../../flats';
import Marker from './marker';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedFlatLat: 48.856373,
      selectedFlatLng: 2.338629,
      zoom: 12
    };
  }

  selectFlat = (lat, lng) => {
    this.setState({
      selectedFlatLat: lat,
      selectedFlatLng: lng,
      zoom: 16
    });
  }

  render() {
    const center = {
      lat: this.state.selectedFlatLat,
      lng: this.state.selectedFlatLng
    };


    return (
      <div className="container">
        <FlatList flats={flats} selectFlat={this.selectFlat} />
        <div className="map-container">
          <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyBKn0EZIR_sQSdq9Atq0QGsX4KK1hjzbMU' }}
            center={center}
            zoom={this.state.zoom}
          >
            {flats.map(marker => <Marker lat={marker.lat} lng={marker.lng} key={marker.lat} />)}
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;
