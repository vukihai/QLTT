import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';



import Card, { CardHeader, CardContent } from 'material-ui/Card';

import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import red from 'material-ui/colors/red';
import ReplyIcon from '@material-ui/icons/Reply';




import { Button } from 'material-ui';
import { SMALL } from 'material-ui/utils/withWidth';
import grey from 'material-ui/colors/grey'
import AttachmentView from './AttachmentView';
import { Grid } from '@material-ui/core';

const styles = theme => ({
    card: {
        boxShadow: 'none',
        borderBottom: '1px solid '+grey[200],
        borderRadius: '0'
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    actions: {
        display: 'flex',
    },
    expand: {
        transform: 'rotate(0deg)',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
        marginLeft: 'auto',
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
});

class MailUI extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            expanded: false,
            followed: false,
            item: []
        };
    }
    componentDidMount() {
        this.getMail();
        var interval = setInterval(()=>{
            this.getMail();
        }, 5000);
    }
    getMail() {
        fetch("http://localhost:80/QLTT/api/student/" + this.state.id + "/messages/" + this.props.match.params.id)
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
                <Card className={classes.card}>
                    <CardHeader
                        avatar={
                            <Avatar className={classes.avatar} src={this.props.avatar}>
                                {this.props.avatar===""?this.props.senderName.substring(0,1):""}
                            </Avatar>
                        }
                        action={
                            <div>
                                <Button size={SMALL} disabled style={{ minWidth: '0', padding: 0 }}>{this.props.dateTime}</Button>
                                <IconButton>
                                    <ReplyIcon color="primary" />
                                </IconButton>
                            </div>
                        }
                        title={this.props.senderName}
                        subheader={this.props.subject}
                    />
                        <CardContent>
                            <Typography>
                                {this.props.content}
                            </Typography>
                            <Grid container>
                            
                                {this.props.attachments? this.props.attachments.map(att => (
                                    <Grid item lg={3} md={4} sm={6} xs={12}> <AttachmentView fileName={att.fileName} fileLink={"public/"+att.fileName}/></Grid>
                                )):""}
                            
                            </Grid>
                            
                            
                        </CardContent>


                </Card>
            </div>
        );
    }
}

MailUI.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MailUI);