import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar';
import ReactDOM from 'react-dom';
import SearchSlide from './SearchSlide';
import LocationsMap from './LocationsMap';

class App extends Component {

  constructor(props) {
    super(props);
    this.slideSearch = React.createRef();
    this.locationsMap = React.createRef();
  }

  openSearchSlide = () => {
      ReactDOM.findDOMNode(this.slideSearch.current).style.width = '250px';
      ReactDOM.findDOMNode(this.locationsMap.current).style.marginLeft = '250px';
  };

  closeSearchSlide = () => {
      ReactDOM.findDOMNode(this.slideSearch.current).style.width = '0';
      ReactDOM.findDOMNode(this.locationsMap.current).style.marginLeft = '0';
  };

  render() {
    return (
      <div className="App">
        <Navbar openSearchSlide={this.openSearchSlide}/>
        <SearchSlide ref={this.slideSearch} closeSearchSlide={this.closeSearchSlide}/>
        <LocationsMap ref={this.locationsMap} />
      </div>
    );
  }
}

export default App;
