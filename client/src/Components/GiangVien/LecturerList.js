import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import Grid from '@material-ui/core/Grid';

import { Button } from '@material-ui/core';
import Typography from 'material-ui/Typography';

import FeaturedBaiDang from '../BaiDang/FeaturedBaiDang';
import ThumbnailBaiDang from '../BaiDang/ThumbnailBaiDang';
import ThumbnailGiangVien from '../GiangVien/ThumbnailGiangVien';

const styles = theme => ({
    
});

class LecturerList extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div>
                <Grid container spacing={8}>
                    <Grid item lg={3} md={4} sm={6} xs={12}>
                        <ThumbnailGiangVien lecturerID={1} lecturerName="Lê Đình Thanh" selectLecturer={this.props.selectLecturer}/>
                    </Grid>
                    <Grid item lg={3} md={4} sm={6} xs={12}>
                        <ThumbnailGiangVien lecturerID={2} lecturerName="Bùi Đình Tú" selectLecturer={this.props.selectLecturer}/>
                    </Grid>
                    <Grid item lg={3} md={4} sm={6} xs={12}>
                        <ThumbnailGiangVien lecturerID={3} lecturerName="Hồ Đắc Phương" selectLecturer={this.props.selectLecturer}/>
                    </Grid>
                    <Grid item lg={3} md={4} sm={6} xs={12}>
                        <ThumbnailGiangVien lecturerID={4} lecturerName="Thầy Đô" selectLecturer={this.props.selectLecturer}/>
                    </Grid>
                </Grid>
            </div>
        );
    }
}
LecturerList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LecturerList);
