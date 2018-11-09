import React, { Component } from 'react';
import './App.css';
import {
    Router as Router,
    Route
} from 'react-router-dom';
import Header from './component/header/Header';
import GalleryList from './component/GalleryList';

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
            <Router history={history}>
                <div className="App">
                    <Header user={this.state.user}/>
                        <div className="content">
                            <Route exact path="/" component={GalleryList} />
                        </div>
                    </div>

            </Router>
        );
    }
}



export default App;