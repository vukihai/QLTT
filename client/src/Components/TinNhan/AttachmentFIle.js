import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import DeleteIcon from '@material-ui/icons/Delete';

import { TextField, Button, Grid, Avatar, IconButton } from 'material-ui';

const styles = theme => ({
    attachmentColor: {
        color: theme.palette.primary.main,
        fontWeight: 'bold'
    },
});

class AttachmentFile extends React.Component {
    state = {
    }
    render() {
        const { classes } = this.props;
        return (
            <div style={{ backgroundColor: '#f5f5f5', display: 'flex', alignItems: 'center', padding: '0 10px' }}>
                <div style={{ flex: 1 }}>
                    <Typography variant="subheading">
                        <span className={classes.attachmentColor}>{this.props.fileName}</span>  ({this.props.fileSize})
                    </Typography>
                </div>
                <div style={{ flex: 1, textAlign: 'right' }}>
                    <IconButton onClick={() => {this.props.deleteAction()}}>
                        <DeleteIcon />
                    </IconButton>
                </div>
            </div>
        );
    }
}

AttachmentFile.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AttachmentFile);