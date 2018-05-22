import React from 'react';
import { BrowserRouter as Router, NavLink } from "react-router-dom";

//material-ui-framework component import
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import List from 'material-ui/List';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';

// material.io/icons import
import MenuIcon from '@material-ui/icons/Menu';


//component import

import Notification from './Notification.js';
import AccountPanel from './AccountPanel.js';
import LeftPanel from './LeftPanel';
import RouteName from './Routing/RouteName';
import Routing from './Routing/Routing';
import SearchBar from './Material/SearchBar';

//extension-file import
import './material.css';

import { TextField } from 'material-ui';

const drawerWidth = 240;

// style
const styles = theme => ({
    root: {
        flexGrow: 1,
        height: 100 + '%',
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        // marginLeft: drawerWidth,
        // width: `calc(100% - ${drawerWidth}px)`,
        width: '100%',
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing.unit * 7,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing.unit * 9,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    //main content 
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
    },
    flex: {
        flex: 1
    },
});

class MaterialDrawer extends React.Component {
    //state
    state = {
        open: true,
        anchorEl: null,
        rerender: false
    };

    //event function
    handleDrawerOpen = () => {
        this.setState({ open: !this.state.open });
    };

    handleDrawerClose = () => {
        this.setState({ open: false });
    };

    handleMenuOpen = event => {
        this.setState({ anchorEl: event.currentTarget });
    };
    handleMenuClose = () => {
        this.setState({ anchorEl: null });
    };
    rerender() {
        this.setState({
            rerender: !this.state.rerender,
        });
    }
    // main render
    render() {
        const { classes, theme } = this.props;
        const { auth, anchorEl } = this.state;
        const open = Boolean(anchorEl);

        return (
            <Router>
                <div className={classes.root}>
                    {/* Top bar */}
                    <AppBar
                        position="absolute"
                        className={classNames(classes.appBar, this.state.open && classes.appBarShift)}
                    >
                        <Toolbar disableGutters>
                            <IconButton
                                aria-owns={!open ? 'menu-appbar' : null}
                                aria-haspopup="true"
                                onClick={this.handleMenu}
                                color="inherit"
                                aria-label="open drawer"
                                onClick={this.handleDrawerOpen}
                                className={classNames(classes.menuButton)}
                            >
                                <MenuIcon />
                            </IconButton>
                            {/* Heading Page Name */}
                            <Typography variant="title" color="inherit" noWrap style={{paddingRight: '20px', borderRight: '1px solid #e2e2e2'}}>
                                QLTT
                            </Typography>
                            <div style={{padding: '0 20px'}}>
                                <Typography variant="title" color="inherit" noWrap>
                                    <RouteName />
                                </Typography>
                            </div>
                            {/* search bar*/}
                            <div className={classes.flex} style={{width: '100%'}}>
                                <SearchBar />
                            </div>
                            {/* account and notify button */}
                            <div>
                                <Notification />
                                <AccountPanel rerenderCallback={this.props.rerenderCallback}/>
                            </div>
                        </Toolbar>
                    </AppBar>
                    {/* Left Drawer show when click Hamberger button */}
                    <Drawer
                        variant="permanent"
                        classes={{
                            paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
                        }}
                        open={this.state.open}
                    >
                        {/*Top in Drawer : hidden*/}
                        <div className={classes.toolbar}>

                        </div>
                        <Divider />
                        {/* Nav-link on Drawer */}
                        <LeftPanel />
                    </Drawer>
                    {/* Main app space */}
                    <main className={classes.content} style={{ overflow: 'scroll' }}>
                        <div className={classes.toolbar} />
                        <Routing />
                        <Typography noWrap style={{marginTop: 50+'px'}}>{'Phần mềm Quản lí thực tập (c) 2018 DHT Team - Web development course - UET - VNU'}</Typography>
                    </main>
                </div>
            </Router >
        );
    }
}

MaterialDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(MaterialDrawer);
