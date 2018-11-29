import React, { Component } from 'react';
import './App.css';

import {
    Router as Router,
    Route
} from 'react-router-dom';

import Header from './component/header/Header';
import Gallery from './component/Gallery';
import Modal from './component/modal/Modal';

import createBrowserHistory from 'history/createBrowserHistory'
const history = createBrowserHistory();
window.applicationHistory = history;

class App extends Component {

    render() {
        return (
            <Router history={history}>
                <div>
                    <Header/>
                        <div>
                            <Gallery/>
                            <Modal/>

                        </div>
                </div>
            </Router>
        );

    }
}

export default App;