import React, { Component } from 'react';
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by';
import LocationsMap from './LocationsMap';
import ReactDOM from 'react-dom';

class SearchSlide extends Component {

    constructor(props) {
        super(props);
        this.locationsMap = React.createRef();
    }
    state = {
        query: ''
    };

    updateQuery = (query) => {
        this.setState({
            query: query.trim()
        })
    };

    clearQuery = () => {
        this.setState({
            query: ''
        })
    };

    openSlide = () => {
        ReactDOM.findDOMNode(this.locationsMap.current).style.marginLeft = '250px';
    };

    closeSlide = () => {
        ReactDOM.findDOMNode(this.locationsMap.current).style.marginLeft = '0';
    };

    render() {

        const { locations } = this.props;
        const { query } = this.state;

        let showingLocations;

        if (query) {
            const match = new RegExp(escapeRegExp(this.state.query), 'i');
            showingLocations = this.props.locations.filter((location) => match.test(location.name))
        } else {
            showingLocations = this.props.locations;
        }

        showingLocations.sort(sortBy('name'));

        return (
            <React.Fragment>
                <div className="side-nav">
                    <a className="btn-close" onClick={this.props.closeSearchSlide}><span> &times;</span></a>
                    <input
                        className = 'search-locations'
                        type='text'
                        placeholder='Search locations'
                        value={this.state.query}
                        onChange={(event) => this.updateQuery(event.target.value)}
                    />
                    {showingLocations.length !== locations.length && (
                        <div className='showing-locations'>
                            <span>Showing {showingLocations.length} of {locations.length} places</span>
                            <button onClick={this.clearQuery}>show all</button>
                        </div>

                    )}

                    <ol className={['locations-list', this.props.showList ? '' : 'hide-list'].join(' ')}>
                        {showingLocations.map((location) => (
                            <li key={location.id} className='locations-list-item' tabIndex={0} onClick={(event) => this.updateQuery(event.currentTarget.textContent)}>
                                <div className='location-details'>{location.name}</div>
                            </li>
                        ))}
                    </ol>
                </div>
                <LocationsMap ref={this.locationsMap} locations={showingLocations} />
            </React.Fragment>
        )
    }
}

export default SearchSlide;

