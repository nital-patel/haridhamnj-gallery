import React, { Component } from 'react';
import logo from './logo.svg';
import header from './component/header/Header';
import GalleryList from './component/GalleryList';
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="App">
            <header>
                <div className="logo">
                    2018-Gallery
                </div>
              <div className="header-title">
                <p>You are here:  Home  /  2018 – Gallery</p>
              </div>
            </header>
                <div className="wrapper" >
                    <div className="content">
                        <div className="item">
                            <div className="shell">
                                <div className="main-content">
                                    <img className="img1" src={'https://events.yds.org/images/hms-hero.jpg'} />
                                        <div className="footer">
                                            <p className="gallery-name">hi</p>
                                            <p className="gallery-detail">hello</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>


    );
  }
}

export default App;
