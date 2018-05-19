import React, { Component } from 'react';
import './colGrid.css';


class ColGrid extends Component {
    render() {
        return (
            <div className={this.props.container ? "grid-container" : this.props.item ? "grid-item" : ""}>
                {this.props.children}
            </div>
        );
    }
}


export default ColGrid;
