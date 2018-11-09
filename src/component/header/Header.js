import React from 'react';
import { Component } from 'react';
import './header.css';

class Header extends Component {
    render() {
        return (
            <header>
                <div className="logo">
                    <p>2018-Gallery</p>
                </div>
                <div className="header-title">
                    <p>You are here:  Home  /  2018 – Gallery</p>
                </div>
            </header>
        );
    }
};
export default Header;

