import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TableSinhVien from '../GiangVien/TableSinhVien';
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

class HocVienPage extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <h1>Danh sách sinh viên:</h1>
        <TableSinhVien />
      </div>
    );
  }
}

HocVienPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HocVienPage);
