import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Manager, Target, Popper } from 'react-popper';
import Button from 'material-ui/Button';
import ClickAwayListener from 'material-ui/utils/ClickAwayListener';
import Collapse from 'material-ui/transitions/Collapse';
import Grow from 'material-ui/transitions/Grow';
import Paper from 'material-ui/Paper';
import Portal from 'material-ui/Portal';
import { MenuItem, MenuList } from 'material-ui/Menu';
import { withStyles } from 'material-ui/styles';
import {NavLink } from "react-router-dom";

import IconButton from 'material-ui/IconButton';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SettingsIcon from '@material-ui/icons/Settings';
import Badge from 'material-ui/Badge';
import { Typography } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
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

class Notification extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            open: false,
            id: localStorage.getItem('id'),
            token: localStorage.getItem('token'),
            items: [],
            numOfUnread: []
        };
    }
    componentDidMount() {
        this.getNoti();
        this.getNumOfUnread();
        var interval = setInterval(()=>{
            this.getNoti();
            this.getNumOfUnread();
        }, 50000);
    }
    getNoti() {
        fetch("http://localhost:80/QLTT/api/notification/" + this.state.id +"?accessToken=" + this.state.token)
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    items: result
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
            });
            })
    }
    getNumOfUnread() {
        fetch("http://localhost:80/QLTT/api/notification/" + this.state.id +"/NumOfUnread?accessToken=" + this.state.token)
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    numOfUnread: result
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
            });
            })
    }
    read() {
        alert(JSON.parse(this.props));
        var _id = 0;
        var data = new FormData();
        data.append("readID", _id);
        fetch("http://localhost:80/QLTT/api/notification/" + this.state.id +"/?accessToken=" + this.state.token, {
          method: 'POST',
          body: data
        })
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    numOfUnread: result
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
            });
            })
        this.getNoti();
        this.getNumOfUnread();
    }
    notiView() {
        let notiView = [];
        for(var i=0; i< this.state.items.length; i++) {
            var item = this.state.items[i];
                 notiView.push(
                    <NavLink to={item.url} onClick={() =>{this.read()}} >
                        <ListItem button>
                            <ListItemAvatar>
                              <Avatar>
                                <NotificationsIcon />
                              </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                              primary={item.content}
                              secondary={item.time}
                            />
                          </ListItem>
                    </NavLink>
            );
        }
        return notiView;
    }
  handleToggle = () => {
    this.setState({ open: !this.state.open });
  };

  handleClose = event => {
    if (this.target1.contains(event.target)) {
      return;
    }

    this.setState({ open: false });
  };

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
                <Badge className={classes.margin} badgeContent={this.state.numOfUnread.numOfUnread} color="secondary">
                  <NotificationsIcon />
                </Badge>

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
                <Paper style={{width: '500px'}}>
                  <div style={{ display: 'flex', padding: '0 16px', backgroundColor: '#eeeeee', alignItems: 'center' }}>
                    <div style={{ flex: '1' }}>
                      <Typography variant="subheading" style={{ fontWeight: 'bold' }}>Thông báo</Typography>
                    </div>
                    <div style={{ flex: '1', textAlign: 'right' }}>
                      <IconButton>
                        <SettingsIcon />
                      </IconButton>
                    </div>
                  </div>
                  <div>
                    <List dense={false}>
                      {this.notiView()}
                    </List>
                  </div>
                  <MenuList role="menu">
                    <MenuItem onClick={this.handleClose}>Xem tất cả</MenuItem>
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

Notification.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Notification);
