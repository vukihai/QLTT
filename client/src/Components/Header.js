import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Footer from './Footer.js';
class Header extends Component {
  render() {
    return (
        <Router>
        <header>
            <div className="container-fluid">
                banner!
            </div>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark sticky-top">
                <Link to="/Logo" className="navbar-brand">Logo</Link>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/Link1" className="nav-link">Link1</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Link2" className="nav-link">Link2</Link>
                    </li>
                </ul>
            </nav>
        
            <Route path="/Link1" component={Footer} />
        </header>
        </Router>
    );
  }
}

export default Header;
