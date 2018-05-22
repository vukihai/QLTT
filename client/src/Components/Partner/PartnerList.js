import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import Grid from '@material-ui/core/Grid';

import ThumbnailPartner from '../Partner/ThumbnailPartner';

const styles = theme => ({
    
});

class PartnerList extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div>
                <Grid container spacing={8}>
                    <Grid item lg={3} md={4} sm={6} xs={12}>
                        <ThumbnailPartner partnerID={1} partnerName="Bầu Trời Xa Corp" />
                    </Grid>
                    <Grid item lg={3} md={4} sm={6} xs={12}>
                        <ThumbnailPartner partnerID={1} partnerName="Bầu Trời Xa Corp" />
                    </Grid>
                    <Grid item lg={3} md={4} sm={6} xs={12}>
                        <ThumbnailPartner partnerID={1} partnerName="Bầu Trời Xa Corp" />
                    </Grid>
                    <Grid item lg={3} md={4} sm={6} xs={12}>
                        <ThumbnailPartner partnerID={1} partnerName="Bầu Trời Xa Corp" />
                    </Grid>
                </Grid>
            </div>
        );
    }
}
PartnerList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PartnerList);
