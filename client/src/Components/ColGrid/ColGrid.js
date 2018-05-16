import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import './colGrid.css';


class ColGrid extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { classes } = this.props;
        return (
            <div className={this.props.container ? "grid-container" : this.props.item ? "grid-item" : ""}>
                {this.props.children}
            </div>
        );
    }
}


export default ColGrid;