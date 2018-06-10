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
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';

import IconButton from 'material-ui/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import { Typography, Avatar } from '@material-ui/core';
import red from 'material-ui/colors/red';
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
  constructor(props){
        super(props);
        this.state = {
            fullName: localStorage.getItem("fullName"),
            username: localStorage.getItem("username"),
        };
    }
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
                  <div style={{ display: 'flex', padding: '16px', backgroundColor: '#eeeeee' }}>
                    <div style={{ marginRight: '16px' }}>
                      <Avatar style={{ backgroundColor: red[500] }}>
                        P
                        </Avatar>
                    </div>
                    <div style={{ flex: '1' }}>
                      <Typography variant="subheading" style={{ fontWeight: 'bold' }}>{this.state.fullName}</Typography>
                      <Typography>{this.state.username}@vnu.edu.vn</Typography>
                    </div>
                  </div>
                  <MenuList role="menu">
                    <NavLink to="/profile"><MenuItem onClick={this.handleClose}>
                      <ListItemIcon>
                        <AccountBoxIcon />
                      </ListItemIcon>
                      <ListItemText inset primary="Hồ sơ" />
                    </MenuItem></NavLink>
                    <NavLink to="/profile/changepass"><MenuItem onClick={this.handleClose}>
                      <ListItemIcon>
                        <VpnKeyIcon />
                      </ListItemIcon>
                      <ListItemText inset primary="Đổi mật khẩu" />
                    </MenuItem></NavLink>
                    <a onClick={() => this.logout()}><MenuItem onClick={this.handleClose}>
                      <ListItemIcon>
                        <ExitToAppIcon />
                      </ListItemIcon>
                      <ListItemText inset primary="Đăng xuất" />
                    </MenuItem></a>
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
