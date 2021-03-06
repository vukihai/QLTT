import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

import { TextField, Button, Grid } from 'material-ui';
import {browserHistory,withRouter} from "react-router-dom";
const styles = theme => ({
  root: theme.mixins.gutters({
    padding: 40 + 'px',
    width: 450 + 'px'
  }),
});

class LoginPage extends React.Component {
  state = {
    username : "",
    password: "",
    error: false,
    isLoaded: false,
    items: "",
    errorMessage: ""
  }
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
      errorMessage: ""
    });
  };

  loginClientProc() {
      if(!("error" in this.state.items)) {
          localStorage.setItem('token', this.state.items.accessToken);
          localStorage.setItem('role', this.state.items.role);
          localStorage.setItem('id', this.state.items.id);
          localStorage.setItem('logedin', true);
          localStorage.setItem('fullName', this.state.items.fullName);
          localStorage.setItem('username', this.state.username);
          localStorage.setItem('lastLogin', this.state.items.lastLogin);
      } else {
          this.state.errorMessage = this.state.items.error;
      }
      this.props.rerenderCallback();
  }
  login() {
      var data = new FormData();
      data.append("username", this.state.username);
      data.append("password", this.state.password);
      fetch("http://qltt.vn/api/login/", {
          method: 'POST',
          body: data
      })
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
          this.loginClientProc();
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
      
  };
  render() {
    const { classes } = this.props;
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 100 + '%' }}>
        <Paper className={classes.root} elevation={4}>
          <Typography variant="headline" component="h3">
            Đăng nhập
        </Typography>
          <Typography component="p">
            Sử dụng tài khoản VNU của bạn
        </Typography>
          <form>
            <TextField
              id="username"
              label="Email hoặc mã sinh viên"
              value={this.state.username}
              onChange={this.handleChange('username')}
              margin="normal"
              fullWidth
            />
            <TextField
              id="pass"
              label="Nhập mật khẩu của bạn"
              type="password"
              value={this.state.password}
              onChange={this.handleChange('password')}
              margin="normal"
              fullWidth
            />
          </form>
          <a href="forgotpass">
            <Typography component="p" style={{ marginBottom: 30 + 'px' }}>
              Bạn quên mật khẩu của bạn?
          </Typography>
          </a>
          <Button variant="raised" color="primary" className={classes.button} onClick={() => {this.login()}}>
            ĐĂNG NHẬP
          </Button>
              <span style={{ marginLeft: 30 + 'px', color: 'red' }}>
                {this.state.errorMessage}
                </span>
        </Paper>
      </div>
    );
  }
}

LoginPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoginPage);
