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
    mail(sender, title, sendTime, seen) {
        var mail = <ListItem button>
                            <Avatar>
                                {sender[0].toUpperCase()}
                            </Avatar>
                            <ListItemText
                                primary= {sender}
                                secondary= {title}
                            />
                            <ListItemSecondaryAction>
                                <Button>{sendTime}</Button>
                            </ListItemSecondaryAction>
                        </ListItem>;
        return mail;
    }
    listMailView() {
        let listMail = [];
        for(var i=0; i< this.state.items.length; i++) {
            var item = this.state.items[i];
            listMail.push(this.mail(item.senderID, item.title, item.sendTime, item.seen));
        }
        if(listMail.length == 0) {
            listMail.push(<ListItemText
                primary= {"hộp thư rỗng! "}
             />);
        }
        return listMail;
    }
    getMail() {
        fetch("http://localhost:80/QLTT/api/student/" + this.state.id + "/messages")
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
    render() {
        const { classes } = this.props;
        return (
            <div>
                <h1> Thư </h1>
                <div style={{marginTop: 50+ 'px'}}>
                    <Paper>
                        <Typography variant="headline" style={{padding: '15px'}}>[Subject here] Hỏi về cách gửi mail </Typography>
                        <MailUI avatar="" senderName="Phạm Ngọc Duy" subject={"Hỏi về cách gửi mail".substring(0,50)} dateTime="17:01 17/05/2018" content="GỬi thế nào nhỉ?" attachments={[{fileName: "attackment.docx"},{fileName: "attackment2.docx"}]}/>
                        <MailUI avatar="" senderName="Vũ Đình Hướng" subject={"Re: GỬi thế nào nhỉ?".substring(0,50)} dateTime="17:21 17/05/2018" content="Không biết gửi how to hỏi :v"/>
                    </Paper>
                </div>

                <h1> Soạn thư </h1>
                <MailForm />

                <h1> Hộp thư </h1>
                <div className={classes.root}>
                    <List>
                        {this.listMailView()}
                    </List>
                </div>
                <h1> Thảo luận </h1>
                <div style={{marginTop: 50+ 'px'}}>
                    <NhanTinUI />
                </div>
            </div>
        );
    }
}

TinNhanPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TinNhanPage);
