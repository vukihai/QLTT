import React, { Component } from 'react';

import Footer from './Components/Footer.js';
import Header from './Components/Header.js';
import Material from './Components/Material'
import LoginPage from './Components/Login/Login';

import './App.css';
class App extends Component {
  state = {
    logedin: true
  }
  render() {
    if (this.state.logedin) {
      return (
        <Material />
        // <Header />
        // <button className="btn btn-danger">Hello world!!</button>
        // <Footer />
      );
    } else {
      return (
        <div style={{height: 100 + '%'}}>
          <LoginPage />
        </div>
      );
    }

  }
}

export default App;
