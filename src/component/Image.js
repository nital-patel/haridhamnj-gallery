import React, {Component} from 'react';
import Modal from "./modal/Modal";

class Image extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false
        };
    }
    showModal = () => {
        this.setState({
            show: true
        })
    }
    onClose = () => {
        this.setState({
            show: false
        });
    }
    render() {
        const {image} = this.props;
        return (
            <div className="content">
                <div className="item">
                    <div className="shell">
                        <div className="main-content">
                            <div className="img-content">
                                <img className="img1" src={image} alt="something" onClick={this.showModal}/>
                                <div className="link">
                                </div>
                            </div>
                            <div>
                                {
                                    (this.state.show)
                                        ?
                                        <Modal
                                            show={this.state.show} className="test">
                                            <a href="#" className="previous round">&#8249;</a>
                                            <a href="#" className="next round">&#8250;</a>
                                            <img className="modal-content" src={image} alt="something"/>
                                            <a className="close" onClick={this.onClose}>x</a>
                                            <div className="caption"></div>
                                        </Modal>
                                        :
                                        null
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Image;