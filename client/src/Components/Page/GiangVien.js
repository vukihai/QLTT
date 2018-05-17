import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TableSinhVien from '../GiangVien/TableSinhVien';
import MyLecturer from '../GiangVien/MyLecturer';
import { Grid } from 'material-ui';
import { Button } from 'material-ui';
import { withStyles } from 'material-ui';
import MyLecturer2 from '../GiangVien/MyLecturer2';
import GiangVienCuaToi from '../GiangVien/GiangVienCuaToi';
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
          <GiangVienCuaToi deselectLecturer={this.selectLecturer} name={this.state.name} avatar={this.state.avatar} />
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
