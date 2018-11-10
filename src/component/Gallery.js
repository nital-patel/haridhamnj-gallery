import React, { Component } from 'react';

class Gallery extends Component {
    constructor() {
        super();
        this.state = {
            imageList: [
                'https://events.yds.org/images/hms-hero.jpg',
                'https://events.yds.org/images/hms-hero.jpg',
                'https://events.yds.org/images/hms-hero.jpg',
                'https://events.yds.org/images/hms-hero.jpg',
                'https://events.yds.org/images/hms-hero.jpg',
                'https://events.yds.org/images/hms-hero.jpg',
                'https://events.yds.org/images/hms-hero.jpg'
            ]
        };
    }
    render() {
        const imageList = this.state.imageList;

        return (
            <div className="wrapper" >
                {
                    imageList.map((image, index) => (
                        <div className="content" key={index}>
                            <div className="item">
                                <div className="shell">
                                    <div className="main-content">
                                        <div>
                                            <img className="img1" src={image}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        );
    }
};

export default Gallery;
