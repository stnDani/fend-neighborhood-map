import React, { Component } from 'react'

class SearchSlide extends Component {

    render() {
        return (
            <div className="side-nav">
                <a href="#" className="btn-close" onClick={this.props.closeSearchSlide}>&times;</a>
                <a href="#">Home</a>
                <a href="#">Services</a>
                <a href="#">Contact</a>
            </div>
        )
    }
}

export default SearchSlide;

