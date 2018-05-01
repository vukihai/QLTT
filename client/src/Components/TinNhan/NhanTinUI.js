import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import { ListItemSecondaryAction, TextField, IconButton } from 'material-ui';
import { Button } from 'material-ui';
import { Grid } from 'material-ui';
import grey from 'material-ui/colors/grey'

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import AttachmentIcon from '@material-ui/icons/Attachment';
import SendIcon from '@material-ui/icons/Send';

const styles = theme => ({
    root: {
        width: '100%',
        backgroundColor: grey[200],
    },
});

class NhanTinUI extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                {/* Received message */}
                <Grid container alignItems="flex-end">
                    <Grid item>
                        <Avatar> Y</Avatar>
                    </Grid>
                    <Grid direction="column">
                        <Grid item><Button variant="raised"> Chat here </Button></Grid>
                        <Grid item><Button variant="raised"> Chat here </Button></Grid>
                        <Grid item><Button variant="raised"> Chat here </Button></Grid>
                    </Grid>
                </Grid>
                {/* Your message */}
                <Grid container justify="flex-end" alignItems="flex-end" direction="column">
                    <Grid item><Button variant="raised" color="primary"> My chat here </Button></Grid>
                    <Grid item><Button variant="raised" color="primary"> My chat here </Button></Grid>
                    <Grid item>
                        <Button variant="raised" color="primary"><AttachmentIcon />MyAttachment.pdf</Button>
                    </Grid>
                </Grid>
                {/* Form input */}
                <Grid container spacing={8} alignItems="flex-end" justify="flex-end">
                    <Grid item md xs={12}>
                        <TextField id="input-with-icon-grid" label="Nhập tin nhắn của bạn..." multiline rowsMax="8" fullWidth />
                    </Grid>
                    <Grid item>
                        <IconButton>
                            <AttachFileIcon />
                        </IconButton>
                        <IconButton>
                            <SendIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

NhanTinUI.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NhanTinUI);
