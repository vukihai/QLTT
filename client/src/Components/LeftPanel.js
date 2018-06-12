import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import { NavLink } from "react-router-dom";

// material.io/icons import
import MenuIcon from '@material-ui/icons/Menu';
import StarIcon from '@material-ui/icons/Star';
import MailIcon from '@material-ui/icons/Mail';
import RssFeedIcon from '@material-ui/icons/RssFeed';
import SchoolIcon from '@material-ui/icons/School';
import AssignmentIcon from '@material-ui/icons/Assignment';
import HomeIcon from '@material-ui/icons/Home';
import SettingsIcon from '@material-ui/icons/Settings';
import HelpIcon from '@material-ui/icons/Help';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    backgroundDrawer: {
        backgroundColor: '#fafafa',
    },
    dividerPadding: {
        margin: '10px 0',
    }
});

class LeftPanel extends React.Component {
    PanelItem(route, isExact, icon, text) {
        return (
            <NavLink exact={isExact} to={route}>
                <ListItem button>
                    <ListItemIcon>
                        {icon}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                </ListItem>
            </NavLink>
        )
    }
    page = {
        trangchu: ["/", true, <HomeIcon />, "Trang chủ"],
        baidang: ["/baidang", false, <RssFeedIcon />, "Bài đăng"],
        theodoi: ["/theodoi", false, <StarIcon />, "Đang theo dõi"],
        giangvien: ["/giangvien", false, <SchoolIcon />, "Giảng viên"],
        baocao: ["/baocao", false, <AssignmentIcon />, "Nộp báo cáo"],
        tongket: ["/tongket", false, <VerifiedUserIcon />, "Tổng kết"],
        tinnhan: ["/tinnhan", false, <MailIcon />, "Tin nhắn"],
        hocvien: ["/hocvien", false, <SchoolIcon />, "Học viên"],
        setting: ["/setting", false, <SettingsIcon />, "Cài đặt"],
        help: ["/help", false, <HelpIcon />, "Trợ giúp"],
    }
    pageForRole = {
        0: [this.page.trangchu, this.page.baidang, this.page.giangvien, this.page.theodoi, this.page.baocao, this.page.tongket, this.page.tinnhan],
        1: [this.page.trangchu, this.page.hocvien, this.page.tinnhan],
        2: [this.page.trangchu, this.page.baidang, this.page.theodoi, this.page.tinnhan],
        3: [],
        default: [this.page.setting, this.page.help],
    }
    render() {
        const { classes } = this.props;
        const role = localStorage.getItem('role');
        return (
            <div>
                <List className={classes.backgroundDrawer}>
                    <div>
                        {
                            this.pageForRole[role].map(page => 
                                this.PanelItem(page[0], page[1], page[2], page[3])
                            )
                        }
                        <Divider className={classes.dividerPadding}/>
                        {
                            this.pageForRole.default.map(page => 
                                this.PanelItem(page[0], page[1], page[2], page[3])
                            )
                        }
                    </div>
                </List>
            </div>
        );
    }
}

LeftPanel.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LeftPanel);
