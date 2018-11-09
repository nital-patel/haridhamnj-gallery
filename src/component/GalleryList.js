import React from 'react';
import { Component } from 'react';

class GalleryList extends Component {
    render() {
        return (
            <div className="wrapper" >
                <div className="content">
                    <div className="item">
                        <div className="shell">
                            <div className="main-content">
                                <div>
                                <img className="img1" src={'https://events.yds.org/images/hms-hero.jpg'} />
                                </div>
                                <div className="footer">
                                    <p className="gallery-name">hi</p>
                                    <p className="gallery-detail">hello</p>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
};

export default GalleryList;
