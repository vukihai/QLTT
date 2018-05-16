import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";

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
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import StarIcon from '@material-ui/icons/Star';
import MailIcon from '@material-ui/icons/Mail';
import RssFeedIcon from '@material-ui/icons/RssFeed';
import SchoolIcon from '@material-ui/icons/School';
import AssignmentIcon from '@material-ui/icons/Assignment';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import HomeIcon from '@material-ui/icons/Home';
import SettingsIcon from '@material-ui/icons/Settings';
import HelpIcon from '@material-ui/icons/Help';
import Menu, { MenuItem } from 'material-ui/Menu';
import Badge from 'material-ui/Badge';

//component import
import Home from './Page/Home';
import BaiDangPage from './Page/BaiDang';
import TheoDoiPage from './Page/TheoDoi';
import GiangVienPage from './Page/GiangVien';
import BaoCaoPage from './Page/BaoCao';
import TinNhanPage from './Page/TinNhan'
import Notification from './Notification.js';
import AccountPanel from './AccountPanel.js';
import ProfileForm from './Profile/Profile';
import ChangePassForm from './Profile/ChangePass';

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
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
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
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
    },
    flex: {
        flex: 1
    },
    routeItem: {
        '&:focus': {
            backgroundColor: theme.palette.primary.main,
            '& $primary, & $icon': {
                color: theme.palette.common.white,
            },
        },
    },
});

class MaterialDrawer extends React.Component {
    //state
    state = {
        open: false,
        anchorEl: null,
        rerender: false
    };

    //event function
    handleDrawerOpen = () => {
        this.setState({ open: true });
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
                        <Toolbar disableGutters={!this.state.open}>
                            <IconButton
                                aria-owns={open ? 'menu-appbar' : null}
                                aria-haspopup="true"
                                onClick={this.handleMenu}
                                color="inherit"
                                aria-label="open drawer"
                                onClick={this.handleDrawerOpen}
                                className={classNames(classes.menuButton, this.state.open && classes.hide)}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="title" color="inherit" noWrap className={this.state.open && classes.hide} style={{marginRight: 20+'px'}}>
                                <Switch>
                                    <Route exact path='/' render={() => <div>QLTT</div>} />
                                    <Route path='/baidang' render={() => <div>Bài đăng</div>} />
                                    <Route path='/theodoi' render={() => <div>Theo dõi</div>} />
                                    <Route path='/giangvien' render={() => <div>Giảng viên</div>} />
                                    <Route path='/baocao' render={() => <div>Báo cáo</div>} />
                                    <Route path='/tinnhan' render={() => <div>Tin nhắn</div>} />
                                    <Route path='/profile' render={() => <div>Hồ sơ</div>} />
                                </Switch>
                            </Typography>
                            {/* <input type="text" placeholder="Search..."/> */}
                            <TextField
                                id="searchKeyword"
                                label="Tìm kiếm..."
                                // value={this.state.repeatPass}
                                // onChange={this.handleChange('repeatPass')}
                                type="search"
                                fullWidth
                                className={classes.flex}
                                />
                            {/* <Typography variant="title" color="inherit" noWrap className={classes.flex}>
                                Search....
                            </Typography> */}

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
                        {/* Hamberger button on Drawer */}
                        <div className={classes.toolbar}>
                            <IconButton onClick={this.handleDrawerClose} className={classes.menuButton}>
                                {/* {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />} */}
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="title" color="inherit" noWrap className={classes.flex}>
                                QLTT
                            </Typography>
                        </div>
                        <Divider />
                        {/* Nav-link on Drawer */}
                        <List>
                            <NavLink exact={true} to="/">
                                <ListItem button className={classes.routeItem}>
                                    <ListItemIcon>
                                        <HomeIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Trang chủ" />

                                </ListItem>
                            </NavLink>
                            <NavLink to="/baidang">
                                <ListItem button className={classes.routeItem}>

                                    <ListItemIcon>
                                        <RssFeedIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Bài đăng" />

                                </ListItem>
                            </NavLink>
                            <NavLink to="/theodoi">
                                <ListItem button className={classes.routeItem}>
                                    <ListItemIcon>
                                        <StarIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Đang theo dõi" />
                                </ListItem>
                            </NavLink>
                            <NavLink to="/giangvien">
                                <ListItem button className={classes.routeItem}>
                                    <ListItemIcon>
                                        <SchoolIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Giảng viên" />
                                </ListItem>
                            </NavLink>
                            <NavLink to="/baocao">
                                <ListItem button className={classes.routeItem}>
                                    <ListItemIcon>
                                        <AssignmentIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Báo cáo" />
                                </ListItem>
                            </NavLink>
                            <NavLink to="/tinnhan">
                                <ListItem button className={classes.routeItem}>
                                    <ListItemIcon>
                                        <MailIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Tin nhắn" />
                                </ListItem>
                            </NavLink>
                        </List>
                        <Divider />
                        <List>
                            <NavLink to="/caidat">
                                <ListItem button className={classes.routeItem}>
                                    <ListItemIcon>
                                        <SettingsIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Cài đặt" />

                                </ListItem>
                            </NavLink>
                            <NavLink to="/trogiup">
                                <ListItem button className={classes.routeItem}>

                                    <ListItemIcon>
                                        <HelpIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Trợ giúp" />

                                </ListItem>
                            </NavLink>
                        </List>
                    </Drawer>
                    {/* Main app space */}
                    <main className={classes.content} style={{ overflow: 'scroll' }}>
                        <div className={classes.toolbar} />
                        <Switch>
                            <Route exact path='/' component={Home} />
                            <Route exact path='/baidang' component={BaiDangPage} />
                            <Route exact path='/theodoi' component={TheoDoiPage} />
                            <Route exact path='/giangvien' component={GiangVienPage} />
                            <Route exact path='/baocao' component={BaoCaoPage} />
                            <Route exact path='/tinnhan' component={TinNhanPage} />
                            <Route exact path='/profile' component={ProfileForm} />
                            <Route exact path='/profile/changepass' component={ChangePassForm} />
                        </Switch>
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
