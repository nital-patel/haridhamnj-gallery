import React, { Component } from 'react';
import Image from "./Image";
import Modal from "./modal/Modal";

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageNumber: 0,
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
                'https://haridhamnj.org/wp-content/uploads/2014/09/AmbrishDiksha-18.jpg',
                'http://shaharidham.org/category/4153-26.html'
            ]
        };

    }
    showModal = (imageNumber) => {

        this.setState({
            show: true,
            imageNumber: imageNumber
        });

    }

    onClose = (imageNumber) => {
        this.setState({
            show: false,

        });
    }
    onKeyUp = (e) => {
        if(e.which === 27) {
            this.onClose(e);
        }
    }
    componentDidMount() {
        document.addEventListener("keyup", this.onKeyUp);
    }
    componentWillMount() {
        document.removeEventListener("keyup", this.onKeyUp);
    }

    increment = () => {
        const imageNumber = this.state.imageNumber;
        const newImageNumber = (imageNumber < this.state.imageList.length - 1 ) ? imageNumber + 1 : imageNumber;
        this.setState({
            ...this.state,
            imageNumber: newImageNumber
        });
    }

    decrement = () => {
        const imageNumber = this.state.imageNumber;
        const newImageNumber = (imageNumber > 0 ) ? imageNumber - 1 : imageNumber;
        this.setState({
            ...this.state,
            imageNumber: newImageNumber
        });
    }

    render() {
        const imageList = this.state.imageList;
        return (
            <div className="wrapper" >
                {
                    imageList.map((image, index) => (
                        <Image onClick={this.showModal} image={image} key={index} number={index}/>
                    ))
                }
                <div>
                    {
                        (this.state.show)
                            ?
                            <Modal
                                show={this.state.show} className="">
                                <img className="modal-content" alt="" src={imageList[this.state.imageNumber]} />
                                <button className="close" onClick={this.onClose}>x</button>
                                <div className="caption"></div>
                                <div className="test">
                                    <button type="button" onClick={this.decrement} className="previous round">&#8249;</button>
                                </div>
                                <div className="test">
                                    <button type="button" onClick={this.increment} className="next round">&#8250;</button>
                                </div>
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
