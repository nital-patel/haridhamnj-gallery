import React, {Component} from 'react';

class Image extends Component {

    render() {
        const {image, onClick, number} = this.props;

        return (
            <div className="content">
                <div className="item">
                    <div className="shell">
                        <div className="main-content">
                            <div className="img-content">
                                <img className="img1" src={image} alt="" onClick={()=> {onClick(number)}}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Image;