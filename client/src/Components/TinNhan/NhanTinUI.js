import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import { ListItemSecondaryAction } from 'material-ui';
import { Button } from 'material-ui';
import { Grid } from 'material-ui';

const styles = theme => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
});

class NhanTinUI extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
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
                <Grid container justify="flex-end" alignItems="flex-end">
                    <Grid direction="column">
                        <Grid item><Button variant="raised" color="primary"> My chat here </Button></Grid>
                        <Grid item><Button variant="raised" color="primary"> My chat here </Button></Grid>
                        <Grid item><Button variant="raised" color="primary"> My chat here </Button></Grid>
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