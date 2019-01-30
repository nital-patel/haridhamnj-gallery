import React from 'react';
import Gallery from "../Gallery";

export default class Modal extends React.Component{
    render() {
        if (!this.props.show) {
            return null;
        }
        return(
            <div className="modal1">
                {this.props.children}
            </div>
        )
    }

}
