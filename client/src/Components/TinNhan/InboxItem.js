import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import { ListItemSecondaryAction, Paper } from 'material-ui';
import { Button } from 'material-ui';
import NhanTinUI from '../TinNhan/NhanTinUI';
import MailUI from '../TinNhan/MailUI';
import { Typography } from 'material-ui';
import MailForm from '../TinNhan/MailForm';

const styles = theme => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
});

class InboxItem extends React.Component {
    state = {
        id: localStorage.getItem('id'),
        items: []
    }
    render() {
        const { classes } = this.props;
        return (
            <div>
                <ListItem button>
                    <Avatar>
                        {this.props.sender[0].toUpperCase()}
                    </Avatar>
                    <ListItemText
                        primary= {this.props.sender}
                        secondary= {this.props.subject}
                    />
                    <ListItemSecondaryAction>
                        <Button>{this.props.sendTime}</Button>
                    </ListItemSecondaryAction>
                </ListItem>
            </div>
        );
    }
}

InboxItem.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InboxItem);
