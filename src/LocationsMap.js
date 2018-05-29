import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps';
import MarkerClusterer from 'react-google-maps/lib/components/addons/MarkerClusterer.js';
import Foursquare from './Foursquare'


const GoogleMapExample = withScriptjs(withGoogleMap(props => (
    <GoogleMap
        defaultCenter = { { lat: 44.4369, lng: 26.0887 } }
        defaultZoom = { 15 }
        ref={() => {props.onMapLoad()}}
    >
        <MarkerClusterer>
            {props.locations.map((location, index) => {
                return (<Marker
                    key={location.id}
                    position={{ lat: location.latlng.lat, lng: location.latlng.lng}}
                    animation= {window.google.maps.Animation.DROP}
                    onClick={ () => { props.showInfo(index) } }
                    >
                        { (props.showInfoIndex === index) &&
                        <InfoWindow>
                            <Foursquare location={location.latlng} locationName={location.name} venueId={location.venueId}/>
                        </InfoWindow>
                        }
                    </Marker>
                )
            })}
        </MarkerClusterer>
    </GoogleMap>
)));


class LocationsMap extends Component {

    constructor(props) {
        super(props);
        this.onMapLoad = this.onMapLoad.bind(this);
        this.showInfo = this.showInfo.bind(this);

        this.state = {
            showInfoIndex: null
        }
    }

    onMapLoad = () => {
    };


    showInfo = (index) => {
        this.setState(
            { showInfoIndex: index })
    };

    render() {

        return (
            <div ref={this.locationsMap} className="map">
                <GoogleMapExample
                    onMapLoad={this.onMapLoad}
                    className="gMap"
                    isMarkerShown
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCIaCvRtpRcvl23HE_jzXBAtVV4bP586po&v=3.exp&libraries=geometry,drawing,places"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div className="mapContainer"/>}
                    mapElement={<div style={{ height: `100%` }} />}
                    locations={this.props.locations}
                    showInfo={this.showInfo}
                    showInfoIndex={this.state.showInfoIndex}
                />
            </div>
        )
    }
}

export default LocationsMap;