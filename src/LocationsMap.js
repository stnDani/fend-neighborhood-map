import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const google = window.google;

class LocationsMap extends Component {


    render() {

        const GoogleMapExample = withScriptjs(withGoogleMap(props => (
            <GoogleMap
                defaultCenter = { { lat: 44.427, lng: 26.084 } }
                defaultZoom = { 14 }
            >
            <Marker
               position={{ lat: 44.427, lng: 26.084 }}
            />
            </GoogleMap>
        )));

        return (
            <div ref={this.locationsMap} className="map">
                <GoogleMapExample
                    isMarkerShown
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCIaCvRtpRcvl23HE_jzXBAtVV4bP586po&v=3.exp&libraries=geometry,drawing,places"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `800px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
            </div>
        )
    }
}

export default LocationsMap;