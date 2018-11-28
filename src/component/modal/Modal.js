import React from 'react';

export default class Modal extends React.Component{
    render() {
        if (!this.props.show) {
            return null;
        }
        return(
            <div className="">
                {this.props.children}
            </div>

        )
    }

}
