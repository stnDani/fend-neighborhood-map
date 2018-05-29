import React, { Component } from 'react'

class Navbar extends Component {

    render() {
        return (
            <nav className="navbar">
                <span className="open-slide">
                    <a onClick={this.props.openSearchSlide}>
                        <svg width="30" height="30">
                            <path d="M0,5 30,5" stroke="#fff" strokeWidth="5"/>
                            <path d="M0,14 30,14" stroke="#fff" strokeWidth="5"/>
                            <path d="M0,23 30,23" stroke="#fff" strokeWidth="5"/>
                        </svg>
                    </a>
                </span>
            </nav>
        )
    }
}

export default Navbar;