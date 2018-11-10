import React, { Component } from 'react';
import './App.css';

import Header from './component/header/Header';
import Gallery from './component/Gallery';

import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory();
window.applicationHistory = history;


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: null
        };
    }
    render() {
        return (
                <div className="App">
                    <Header/>
                        <div className="content">
                            <Gallery/>
                        </div>
                </div>
        );

    }
}

export default App;