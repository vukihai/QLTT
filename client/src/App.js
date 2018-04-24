import React, { Component } from 'react';

import Footer from './Components/Footer.js';
import Header from './Components/Header.js';
import Material from './Components/Material'
class App extends Component {
  render() {
    return (
        <div>
            <Material />
            <Header />
            <button className="btn btn-danger">Hello world!!</button>
            <Footer />
        </div>
    );
  }
}

export default App;
