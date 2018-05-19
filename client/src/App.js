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
    logedin: localStorage.getItem('logedin'),
    role: localStorage.getItem('role'),
  }
  updateState() {
      this.setState( {
           logedin: localStorage.getItem('logedin'),
            role: localStorage.getItem('role'),
      })
  }
    render() {
        return (
            <div style={{height: 100 + '%'}}>
                {(this.state.logedin) ? (
                <MuiThemeProvider theme={theme}>
                    <Material rerenderCallback={this.updateState.bind(this)} />
                </MuiThemeProvider>
               ): "Please relogin"}

               {!this.state.logedin ? (
                   <div style={{height: 100 + '%'}}>
                        <LoginPage rerenderCallback={this.updateState.bind(this)}/>
                    </div>
               ):""}
            </div>
        );
    }
}

export default App;
