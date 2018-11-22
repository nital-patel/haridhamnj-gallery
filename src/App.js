import React, { Component } from 'react';
import './App.css';

import Header from './component/header/Header';
import Gallery from './component/Gallery';
import Modal from './component/modal/Modal';

class App extends Component {

    render() {
        return (
                <div>
                    <Header/>
                        <div>
                            <Gallery/>

                            <Modal/>
                        </div>
                </div>
        );

    }
}

export default App;