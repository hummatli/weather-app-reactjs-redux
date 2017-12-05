import React, { Component } from 'react';

class  GoogleMap extends Component {

  componentDidMount() {
    new google.maps.Map(this.refs.mapsss, {
      zoom: 7,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    })
  }

  render() {
    return <div ref="mapsss"/>
  }
}

export default GoogleMap;
