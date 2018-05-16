import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import Grid from '@material-ui/core/Grid';

import { Button } from '@material-ui/core';
import Typography from 'material-ui/Typography';

import FeaturedBaiDang from '../BaiDang/FeaturedBaiDang';
import ThumbnailBaiDang from '../BaiDang/ThumbnailBaiDang';
import Partner from '../Partner/Partner';

const styles = theme => ({
    
});

class PartnerList extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div>
                <Grid container spacing={8}>
                    <Grid item lg={3} md={4} sm={6} xs={12}>
                        <Partner partnerID={1} partnerName="Bầu Trời Xa Corp" />
                    </Grid>
                    <Grid item lg={3} md={4} sm={6} xs={12}>
                        <Partner partnerID={1} partnerName="Bầu Trời Xa Corp" />
                    </Grid>
                    <Grid item lg={3} md={4} sm={6} xs={12}>
                        <Partner partnerID={1} partnerName="Bầu Trời Xa Corp" />
                    </Grid>
                    <Grid item lg={3} md={4} sm={6} xs={12}>
                        <Partner partnerID={1} partnerName="Bầu Trời Xa Corp" />
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
