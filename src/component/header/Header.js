import React from 'react';
import { Component } from 'react';
import './header.css';

class Header extends Component {
    render() {
        return (
            <header>
                <div className="logo">
                    2018-Gallery
                </div>
                <div className="header-title">
                    <h1>You are here:Home/2018 – Gallery</h1>
                </div>

            </header>
        );
    }
};
export default Header;

