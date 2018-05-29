import React, { Component } from 'react';
import './App.css';


var foursquare = require('react-foursquare')({
    clientID: 'LC4KOWRTO3IM30YOWBK0GUIYHDZOWF1GFR22D0JEA53YVQLB',
    clientSecret: 'WB411YANUQVZDQPBLFDZML0N5CX4SFF5AGZKQVPMVBTJJGBO'
});


export default class Foursquare extends Component {

    constructor(props) {
        super(props);
        this.state = {
            location: null,
            locationPic: null,
            locationUrl: null,
            venueId: {'venue_id': this.props.venueId}
        };
    }

    componentDidMount() {
        foursquare.venues.getVenue(this.state.venueId)
            .then(res=> {
                let photoUrl = res.response.venue.bestPhoto.prefix + '100x100' + res.response.venue.bestPhoto.suffix;
                this.setState(
                    { location: res.response.venue,
                      locationPic: photoUrl,
                      locationUrl: res.response.venue.shortUrl });
            }).catch(err => {
                alert(err);
        });
    }

    render() {
        const { location } = this.state;
            if (!this.state.location) {
                return 'Please wait';
            } else {
                return (
                    <div>
                        <div key={location.id} className="locationName">{location.name}</div>
                        <a href={this.state.locationUrl}><img src={this.state.locationPic} className="locationPhoto" alt={location.name}/></a>
                    </div>
                )
            }
    }
}

