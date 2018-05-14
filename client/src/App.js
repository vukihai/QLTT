import React, { Component } from 'react';
import { render } from 'react-dom';

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import indigo from 'material-ui/colors/blue';
import pink from 'material-ui/colors/pink';
import red from 'material-ui/colors/red';

// import Footer from './Components/Footer.js';
// import Header from './Components/Header.js';
import Material from './Components/Material'
import LoginPage from './Components/Login/Login';

import './App.css';

//themes
const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#009688',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

class App extends Component {
  state = {
    logedin: true
  }
  render() {
    
    if (this.state.logedin) {
      return (
        <MuiThemeProvider theme={theme}>
          <Material />
        </MuiThemeProvider>
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
