import React, { Component } from 'react';
import Image from "./Image";
import Modal from "./modal/Modal";

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageNumber: 0,
            imageList: [
                'https://www.haridhamnj.org/wp-content/uploads/2018/07/Gurupoornima2014-11.jpg',
                'https://www.haridhamnj.org/wp-content/uploads/2018/07/Gurupoornima2014-14.jpg',
                'https://www.haridhamnj.org/wp-content/uploads/2018/07/Gurupoornima2014-16.jpg',
                'https://www.haridhamnj.org/wp-content/uploads/2018/07/Gurupoornima2014-53.jpg',
                'https://www.haridhamnj.org/wp-content/uploads/2018/07/AYS2013-111.jpg',
                'https://www.haridhamnj.org/wp-content/uploads/2018/07/AYS2013-118.jpg',
                'https://www.haridhamnj.org/wp-content/uploads/2018/07/AYS2013-120.jpg',
                'https://www.haridhamnj.org/wp-content/uploads/2018/07/AYS2013-151.jpg',
                'https://www.haridhamnj.org/wp-content/uploads/2018/07/AmbrishShibirCA-6.jpg',
                'https://www.haridhamnj.org/wp-content/uploads/2018/07/AmbrishShibirCA-9.jpg',
                'https://www.haridhamnj.org/wp-content/uploads/2018/07/Janmastmi_38.jpg',
                'https://www.haridhamnj.org/wp-content/uploads/2018/07/Janmastmi_39.jpg',
                'https://www.haridhamnj.org/wp-content/uploads/2018/07/Janmastmi_40.jpg',
                'https://www.haridhamnj.org/wp-content/uploads/2018/07/AYS_2011_1.jpg',
                'https://www.haridhamnj.org/wp-content/uploads/2018/07/AYS_2011_36.jpg',
                'https://www.haridhamnj.org/wp-content/uploads/2018/07/AYS_2011_4.jpg',
                'https://www.haridhamnj.org/wp-content/uploads/2018/07/AYS_2011_71.jpg',
                'https://www.haridhamnj.org/wp-content/uploads/2018/07/AmbrishShibir_2011_10.jpg',
                'https://www.haridhamnj.org/wp-content/uploads/2018/07/AmbrishShibir_2011_31.jpg',
                'https://www.haridhamnj.org/wp-content/uploads/2018/07/AYS2017-123-1024x683.jpg',
                'https://www.haridhamnj.org/wp-content/uploads/2018/07/AYS2017-151-1024x684.jpg'
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
