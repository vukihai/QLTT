import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
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
  state = {
    email : "admin@bautroixa.cf",
    skypeID: "@bautroixacorp",
    facebook: "https://facebook.com/bautroixacorporation",
    phonenumber: "01234567890"
  }
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };
  render() {
    const { classes } = this.props;
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 100 + '%' }}>
        <Paper className={classes.root} elevation={4}>
          <Typography variant="headline" component="h3">
            Thông tin cá nhân
        </Typography>
          <Typography component="p" style={{marginBottom : 10 + 'px'}}>
            Cập nhật thông tin cá nhân của bạn
        </Typography>
          <form>
            <div>
                <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                    <Avatar className={classes.bigAvatar}>
                        A
                    </Avatar>
                    <div style={{display: 'flex', flex: '1'}}>
                        16020925
                    </div>
                    <Button color="primary" className={classes.button}>
                            Cập nhật ảnh đại diện
                    </Button>
                    <a href="./changepass">
                      <Button color="primary" className={classes.button}>
                              Đổi mật khẩu tài khoản
                      </Button>
                    </a>
                </div>
            </div>
            <TextField
              id="password"
              label="Email cá nhân"
              value={this.state.email}
              onChange={this.handleChange('password')}
              margin="normal"
              fullWidth
            />
            <TextField
              id="newPass"
              label="Nhập ID skype của bạn"
              value={this.state.skypeID}
              onChange={this.handleChange('newPass')}
              margin="normal"
              fullWidth
            />
            <TextField
              id="repeatPass"
              label="Nhập trang cá nhân facebook của bạn"
              value={this.state.facebook}
              onChange={this.handleChange('repeatPass')}
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
          <Button variant="raised" color="primary" className={classes.button}>
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