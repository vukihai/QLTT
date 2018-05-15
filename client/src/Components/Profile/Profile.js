import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

import { TextField, Button, Grid, Avatar } from 'material-ui';

const styles = theme => ({
  root: theme.mixins.gutters({
    padding: 40 + 'px',
    width: 450 + 'px'
  }),
  bigAvatar: {
    width: 60,
    height: 60,
  },
});

class ProfileForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      email: "",
      skypeID: "",
      facebook: "",
      phonenumber: ""
    }
    this.update = this.update.bind(this);
  }
  componentDidMount() {
    return fetch('http://web.bautroixa.vn/api/student/1')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          email: responseJson.personalEmail,
          skypeID: responseJson.skype,
          facebook: responseJson.facebook,
          phonenumber: responseJson.phoneNumber
        }, function () {

        });

      })
      .catch((error) => {
        console.error(error);
      });
  }
  update() {
    var formData = new FormData();
    var sendData = {
      personalEmail: this.state.email,
      skype: this.state.skypeID,
      facebook: this.state.facebook,
      phoneNumber: this.state.phonenumber,
    };
    for (var k in sendData) {
      formData.append(k, sendData[k]);
    }
    return fetch('http://web.bautroixa.vn/api/student/1/', {
      method: 'POST',
      headers: {
      },
      body: formData,
    })
      .then((response) => response.json())
      .then((responseJson) => {
        alert(responseJson.success ? "success" : responseJson.err)
      })
      .catch((error) => {
        console.error(error);
      });
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };
  render() {
    const { classes } = this.props;
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Paper className={classes.root} elevation={4}>
          <Typography variant="headline" component="h3" style={{ textAlign: 'center' }}>
            Thông tin cá nhân
        </Typography>
          <Typography component="p" style={{ textAlign: 'center', marginBottom: 40 + 'px' }}>
            Cập nhật thông tin cá nhân của bạn
        </Typography>
          <form>
            <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', marginBottom: 25 + 'px' }}>
              <Avatar className={classes.bigAvatar}>
                A
                    </Avatar>
              <div style={{ display: 'flex', flex: '1', marginTop: 10 + 'px', marginBottom: 25 + 'px' }}>
                16020925
                    </div>
              <Button color="primary" className={classes.button}>
                Cập nhật ảnh đại diện
                    </Button>
              <NavLink to="/profile/changepass">
                <Button color="primary" className={classes.button}>
                  Đổi mật khẩu tài khoản
                      </Button>
              </NavLink>
            </div>
            <TextField
              id="email"
              label="Email cá nhân"
              value={this.state.email}
              onChange={this.handleChange('email')}
              margin="normal"
              fullWidth
            />
            <TextField
              id="skype"
              label="Nhập ID skype của bạn"
              value={this.state.skypeID}
              onChange={this.handleChange('skypeID')}
              margin="normal"
              fullWidth
            />
            <TextField
              id="facebook"
              label="Nhập trang cá nhân facebook của bạn"
              value={this.state.facebook}
              onChange={this.handleChange('facebook')}
              margin="normal"
              fullWidth
            />
            <TextField
              id="phonenumber"
              label="Nhập số điện thoại của bạn"
              value={this.state.phonenumber}
              onChange={this.handleChange('phonenumber')}
              margin="normal"
              fullWidth
            />
          </form>
          <a href="#">
            <Typography component="p" style={{ marginBottom: 30 + 'px' }}>
              Còn nhiều thông tin nữa...
          </Typography>
          </a>
          <Button variant="raised" color="primary" className={classes.button} onClick={this.update}>
            Cập nhật
          </Button>

        </Paper>
      </div>
    );
  }
}

ProfileForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProfileForm);