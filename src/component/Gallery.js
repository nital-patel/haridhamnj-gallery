import React, { Component } from 'react';
import Image from "./Image";
import Modal from "./modal/Modal";

class Gallery extends Component {


    constructor(props) {
        super(props);
        this.state = {
            imageList: [
                'https://haridhamnj.org/wp-content/uploads/2014/09/AmbrishDiksha-01.jpg',
                'https://haridhamnj.org/wp-content/uploads/2018/08/AYS2018-46.jpg',
                'https://haridhamnj.org/wp-content/uploads/2018/09/RakshaBandhanNJ-27.jpg',
                'https://haridhamnj.org/wp-content/uploads/2018/09/RakshaBandhanNJ-30.jpg',
                'https://haridhamnj.org/wp-content/uploads/2018/07/Youth-Sabha-10.jpg',
                'https://haridhamnj.org/wp-content/uploads/2018/07/Youth-Sabha-12.jpg',
                'https://haridhamnj.org/wp-content/uploads/2018/07/Youth-Sabha-13.jpg',
                'https://haridhamnj.org/wp-content/uploads/2018/07/GuruhariSwamiji_Airport-Arrival-19.jpg',
                'https://haridhamnj.org/wp-content/uploads/2018/07/GuruhariSwamiji_Airport-Arrival-18.jpg',
                'https://haridhamnj.org/wp-content/uploads/2018/07/GuruhariSwamiji_Airport-Arrival-6.jpg',
                'https://haridhamnj.org/wp-content/uploads/2018/04/SMSGD_18-1-1030x659.jpg',
                'https://haridhamnj.org/wp-content/uploads/2014/09/Gurupoornima2014-16.jpg',
                'https://haridhamnj.org/wp-content/uploads/2014/09/Gurupoornima2014-53.jpg',
                'https://haridhamnj.org/wp-content/uploads/2014/09/Gurupoornima2014-56.jpg',
                'https://haridhamnj.org/wp-content/uploads/2014/09/Gurupoornima2014-11.jpg',
                'https://haridhamnj.org/wp-content/uploads/2014/09/Gurupoornima2014-14.jpg',
                'https://haridhamnj.org/wp-content/uploads/2014/09/GBM_Session-4-05.jpg',
                'https://haridhamnj.org/wp-content/uploads/2014/09/GBM_Session-4-17.jpg',
                'https://haridhamnj.org/wp-content/uploads/2014/09/GBM_Session-4-19.jpg',
                'https://haridhamnj.org/wp-content/uploads/2014/09/AmbrishDiksha-15.jpg',
                'https://haridhamnj.org/wp-content/uploads/2014/09/AmbrishDiksha-18.jpg'
            ]
        };

    }
    render() {
        const {image} = this.props;
        const imageList = this.state.imageList;
        return (
            <div className="wrapper" >
                {
                    imageList.map((image, index) => (
                        <Image image={image} key={index}/>
                    ))
                }
                <div>
                    {
                        (this.state.show)
                            ?
                            <Modal
                                show={this.state.show} className="test">
                                <div className="test">
                                    <button type="button" className="previous round">&#8249;</button>
                                </div>
                                <img className="modal-content" src={image} alt="something"/>
                                <a className="close" onClick={this.onClose}>x</a>
                                <div className="caption"></div>
                            </Modal>
                            :
                            null
                    }
                </div>
            </div>



        );
    }
};

export default Gallery;
