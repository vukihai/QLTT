import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';



import Card, { CardHeader, CardContent } from 'material-ui/Card';

import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import red from 'material-ui/colors/red';
import ReplyIcon from '@material-ui/icons/Reply';



import ExpansionPanel, {
  ExpansionPanelDetails,
  ExpansionPanelSummary,
} from 'material-ui/ExpansionPanel';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
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
            id: localStorage.getItem('id'),
            items: [],
            expanded: 'panel' + this.props.match.params.id
        };
    }
    componentDidMount() {
        this.getMail();
        var interval = setInterval(()=>{
            this.getMail();
        }, 5000);
    }
    getMail() {
        fetch("http://localhost:80/QLTT/api/messages/" + this.state.id + "/m/" + this.props.match.params.id)
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
    handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };
    MailView() {
        let mailView = [];
        for(var i=0; i< this.state.items.length; i++) {
            var item = this.state.items[i];
                 mailView.push(
                    <Card>
                        <ExpansionPanel expanded={this.state.expanded === 'panel' + item.id.toString()} onChange={this.handleChange('panel' + item.id.toString())}>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <CardHeader 
                                avatar={
                                    <Avatar>
                                        {item.sender}
                                    </Avatar>
                                }
                                action={
                                    <div>
                                        <Button size={SMALL} disabled style={{ minWidth: '0', padding: 0 }}>{item.dateTime}</Button>
                                    </div>
                                }
                                title={item.senderName}
                                subheader={item.subject}
                            />
                        </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                            <CardContent>
                                <Typography>
                                    {item.content}
                                </Typography>
                                <Grid container>

                                    {item.attachments? item.attachments.map(att => (
                                        <Grid item lg={3} md={4} sm={6} xs={12}> <AttachmentView fileName={att.fileName} fileLink={"public/"+att.fileName}/></Grid>
                                    )):""}

                                </Grid>  
                            </CardContent>
                      </ExpansionPanelDetails>
                </ExpansionPanel>
                    </Card>
            );
        }
        return mailView;
    }
    
    render() {
        const { classes } = this.props;
        return (
            <div>
                    {this.MailView()}
            </div>
        );
    }
}

MailUI.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MailUI);