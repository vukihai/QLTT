import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

import { TextField, Button, Grid, Avatar } from 'material-ui';

const styles = theme => ({
  root: theme.mixins.gutters({
    padding: 40 + 'px',
    width: 100 + '%',
  }),
  bigAvatar: {
    width: 60,
    height: 60,
  },
});

class ChangePassForm extends React.Component {
  state = {
    password : "123456",
    newPass: "123456 à quên 123456789",
    repeatPass: "123456 à quên 123456789",
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
          Đổi mật khẩu của bạn
        </Typography>
          <form style={{marginBottom : 20 + 'px'}}>
            <TextField
              id="password"
              label="Nhập mật khẩu hiện tại của bạn"
              type="password"
              value={this.state.password}
              onChange={this.handleChange('password')}
              margin="normal"
              fullWidth
            />
            <TextField
              id="newPass"
              label="Nhập mật khẩu mới"
              type="password"
              value={this.state.newPass}
              onChange={this.handleChange('newPass')}
              margin="normal"
              fullWidth
            />
            <TextField
              id="repeatPass"
              label="Nhập lại mật khẩu mới"
              type="password"
              value={this.state.repeatPass}
              onChange={this.handleChange('repeatPass')}
              margin="normal"
              fullWidth
            />
          </form>
          <Button variant="raised" color="primary" className={classes.button}>
            Đổi mật khẩu
          </Button>

        </Paper>
      </div>
    );
  }
}

ChangePassForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ChangePassForm);
