import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar';
import ReactDOM from 'react-dom';
import SearchSlide from './SearchSlide';
import MetaTags from 'react-meta-tags'

class App extends Component {

  constructor(props) {
    super(props);
    this.slideSearch = React.createRef();
    this.locationsMap = React.createRef();
    this.showList = null;
  }

  state = {
      locations: [
          {
              "id":"1",
              "name":"Palace of the Parliament",
              "latlng": {
                  "lat": 44.4275,
                  "lng": 26.0851
              },
              "venueId":"4bed1a98bac3c9b603d2fde9"
          },
          {
              "id":"2",
              "name":"National History Museum",
              "latlng": {
                  "lat": 44.4314,
                  "lng": 26.0952
              },
              "venueId":"4ba85767f964a5203bd739e3"
          },
          {
              "id":"3",
              "name":"French Revolution",
              "latlng": {
                  "lat": 44.4416,
                  "lng": 26.0949
              },
              "venueId":"533db02e498ef9088b39c2c5"
          },
          {
              "id":"4",
              "name":"Cismigiu Garden",
              "latlng": {
                  "lat": 44.4369,
                  "lng": 26.0887
              },
              "venueId":"4b530be7f964a5206c8d27e3"
          },
          {
              "id":"5",
              "name":"Carturesti Carusel",
              "latlng": {
                  "lat": 44.4318,
                  "lng": 26.0994
              },
              "venueId":"5377cb5111d2b93afe516785"
          }
      ]
  };

  openSearchSlide = () => {
      ReactDOM.findDOMNode(this.slideSearch.current).style.width = '250px';
      this.slideSearch.current.openSlide();
      this.setState({
          showList:true
      });
  };

  closeSearchSlide = () => {
      ReactDOM.findDOMNode(this.slideSearch.current).style.width = '0';
      this.slideSearch.current.closeSlide();
      this.setState({
          showList:false
      });
  };

  render() {
    return (
      <div className="App">
        <MetaTags>
            <title>Bucharest Neighborhood Map</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </MetaTags>
        <Navbar openSearchSlide={this.openSearchSlide}/>
        <SearchSlide ref={this.slideSearch} locations={this.state.locations} closeSearchSlide={this.closeSearchSlide} showList={this.state.showList}/>
      </div>
    );
  }
}

export default App;
