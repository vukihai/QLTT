import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import PropTypes from 'prop-types';
import { Grid } from 'material-ui';
import { Button } from 'material-ui';
import { withStyles } from 'material-ui';
import LecturerList from '../GiangVien/LecturerList';

const styles = theme => ({
  leftCenter: {
    display: 'flex',
    marginLeft: 'auto',
    alignItems: 'center'
  }
});

class GiangVienPage extends Component {
  state = {
    selected: false,
    name: "Lê Đình Thanh",
    avatar: ""
  }
  selectLecturer =  (lecturerName) => {
    this.setState({selected: !this.state.selected});
    this.setState({name: lecturerName});
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        {this.state.selected?(
          <Redirect to= {'/giangvien/1/tab-0'} />
        ): (
          <LecturerList selectLecturer={this.selectLecturer}/>
        )}
        
      </div>
    );
  }
}

GiangVienPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GiangVienPage);
