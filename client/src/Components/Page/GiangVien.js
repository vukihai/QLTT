import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TableSinhVien from '../GiangVien/TableSinhVien';
import MyLecturer from '../GiangVien/MyLecturer';
import { Grid } from 'material-ui';
import { Button } from 'material-ui';
import { withStyles } from 'material-ui';

const styles = theme => ({
  leftCenter: {
    display: 'flex',
    marginLeft: 'auto',
    alignItems: 'center'
  }
});

class GiangVienPage extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <h1>Giảng Viên của tôi</h1>

        <Grid container spacing={8}>
          <Grid item xs={12}>
            <MyLecturer />
          </Grid>
          <Grid item xs={6}>
            <h1>Giảng viên khác</h1>
          </Grid>
          <Grid item xs={6} className={classes.leftCenter}>
            <div className={classes.leftCenter}>
              <Button color="primary">Xem thêm</Button>
            </div>
          </Grid>
          <Grid item xs={12} lg={3} md={6}>
            <MyLecturer />
          </Grid>
          <Grid item xs={12} lg={3} md={6}>
            <MyLecturer />
          </Grid>
          <Grid item xs={12} lg={3} md={6}>
            <MyLecturer />
          </Grid>
          <Grid item xs={12} lg={3} md={6}>
            <MyLecturer />
          </Grid>
        </Grid>
        <h1>Danh sách sinh viên:</h1>
        <TableSinhVien />
      </div>
    );
  }
}

GiangVienPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GiangVienPage);
