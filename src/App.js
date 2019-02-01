import React, { Component } from 'react';
import './App.css';



import Header from './component/header/Header';
import Gallery from './component/Gallery';

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Gallery/>

            </div>
        );

    }
}

export default App;