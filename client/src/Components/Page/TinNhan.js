import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemText } from 'material-ui/List';
import {NavLink } from "react-router-dom";
import Avatar from 'material-ui/Avatar';
import { ListItemSecondaryAction, Paper } from 'material-ui';
import { Button } from 'material-ui';
import NhanTinUI from '../TinNhan/NhanTinUI';
import MailUI from '../TinNhan/MailUI';
import { Typography } from 'material-ui';
import MailForm from '../TinNhan/MailForm';
import InboxItem from '../TinNhan/InboxItem';
const styles = theme => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
});

class TinNhanPage extends React.Component {
    state = {
        id: localStorage.getItem('id'),
        items: []
    }

    componentDidMount() {
        this.getMail();
        var interval = setInterval(()=>{
            this.getMail();
        }, 5000);
    }

    getMail() {
        fetch("http://localhost:80/QLTT/api/messages/" + this.state.id)
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
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
    listMailView() {
        let listMail = [];
        for(var i=0; i< this.state.items.length; i++) {
            var item = this.state.items[i];
            listMail.push(<NavLink to={"/tinnhan/" + item.id}><InboxItem sender={item.sender} subject={item.subject} sendTime={item.sendTime} seen={item.seen} /> </NavLink>);
        }
        if(listMail.length == 0) {
            listMail.push(<ListItemText
                primary= {"hộp thư rỗng! "}
             />);
        }
        return listMail;
    }
    render() {
        const { classes } = this.props;
        return (
            <div>
                <h1> Hộp thư <Button variant="raised" color="primary" className={classes.button} style={{"float": "right"}}>
            Soạn thư mới
                </Button>
            </h1>
                <div className={classes.root}>
                    <List>
                        {this.listMailView()}
                    </List>
                </div>
            </div>
        );
    }
}

TinNhanPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TinNhanPage);
