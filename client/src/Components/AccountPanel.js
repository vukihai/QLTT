import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Manager, Target, Popper } from 'react-popper';
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";

import Button from 'material-ui/Button';
import ClickAwayListener from 'material-ui/utils/ClickAwayListener';
import Collapse from 'material-ui/transitions/Collapse';
import Grow from 'material-ui/transitions/Grow';
import Paper from 'material-ui/Paper';
import Portal from 'material-ui/Portal';
import { MenuItem, MenuList } from 'material-ui/Menu';
import { withStyles } from 'material-ui/styles';

import IconButton from 'material-ui/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
const styles = theme => ({
  root: {
    display: 'inline-block',
  },
  paper: {
    marginRight: theme.spacing.unit * 2,
  },
  popperClose: {
    pointerEvents: 'none',
  },
});

class AccountPanel extends React.Component {
  state = {
    open: false,
  };

  handleToggle = () => {
    this.setState({ open: !this.state.open });
  };

  handleClose = event => {
    if (this.target1.contains(event.target)) {
      return;
    }

    this.setState({ open: false });
  };
  logout() {
      localStorage.clear();
      this.props.rerenderCallback();
  }
  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.root}>
        <Manager>
          <Target>
            <div
              ref={node => {
                this.target1 = node;
              }}
            >
                <IconButton
                    aria-owns={open ? 'menu-appbar' : null}
                    aria-haspopup="true"
                    onClick={this.handleToggle}
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
            </div>
          </Target>
          <Popper
            placement="bottom-start"
            eventsEnabled={open}
            className={classNames({ [classes.popperClose]: !open })}
          >
            <ClickAwayListener onClickAway={this.handleClose}>
              <Grow in={open} id="menu-list-grow" style={{ transformOrigin: '0 0 0' }}>
                <Paper>
                  <MenuList role="menu">
                    <MenuItem onClick={this.handleClose}>iM Vukihai</MenuItem>
                    <MenuItem onClick={this.handleClose}><NavLink to="/profile">Hồ sơ </NavLink></MenuItem>
                    <MenuItem onClick={this.handleClose}>Tài khoản</MenuItem>
                    <MenuItem onClick={this.handleClose}><a onClick={() => this.logout()}>Đăng xuất</a></MenuItem>
                  </MenuList>
                </Paper>
              </Grow>
            </ClickAwayListener>
          </Popper>
        </Manager>
      </div>
    );
  }
}

AccountPanel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AccountPanel);
