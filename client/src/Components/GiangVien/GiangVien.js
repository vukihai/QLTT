import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';

import { TextField, Button, Grid, Avatar } from 'material-ui';
import red from 'material-ui/colors/red';

const styles = theme => ({
  root: theme.mixins.gutters({
    padding: 40 + 'px',
  }),
});

class GiangVien extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      tab: this.props.match.params.tab ? parseInt(this.props.match.params.tab) : 0,
      id: this.props.match.params.id ? this.props.match.params.id : localStorage.getItem("id"),
      updateButtonEnable: this.props.match.params.id ? (this.props.match.params.id == localStorage.getItem("id") ? true : false) : true,
      data: {
        name: "LECTURER NOT AVAILABLE",
        VNUmail: "API GET: /api/lecturer/:id/ FAILED",
        gmail: "loading...",
        note: "loading...",
      }
    }
    this.update = this.update.bind(this);
  }
  componentDidMount() {
    return fetch('http://qltt.vn/api/lecturer/' + this.state.id + '/?accessToken=' + localStorage.getItem("token"))
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          data: responseJson,
        }, function () {
        });

      })
      .catch((error) => {
        console.error(error);
      });
  }
  update() {
    var formData = new FormData();
    var sendData = this.state.data;
    for (var k in sendData) {
      formData.append(k, sendData[k]);
    }
    return fetch('http://qltt.vn/api/lecturer/' + this.state.id + '/?accessToken=' + localStorage.getItem("token"), {
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
  handleTabChange = (event, value) => {
    this.setState({ tab: value });
  };
  handleChange = name => event => {
    if (this.state.updateButtonEnable) {
      const ATTname = name;
      const ATTvalue = event.target.value;
      this.setState(prevState => ({
        data: {
          ...prevState.data,
          [ATTname]: ATTvalue,
        }
      }));
    }
  };
  componentWillReceiveProps(nextProps) {
    nextProps.match.params.tab ? this.setState({ tab: parseInt(nextProps.match.params.tab) }) : 0;
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <div>
          <div style={{ display: 'flex', padding: '16px', alignItems: 'center' }}>
            <div style={{ marginRight: '16px' }}>
              <Avatar style={{ backgroundColor: red[500], width: '80px', height: '80px' }}>
                {this.state.data.name.substr(0, 1)}
              </Avatar>
            </div>
            <div style={{ flex: '1' }}>
              <Typography variant="display1" style={{ fontWeight: 'bold' }}>{this.state.data.name}</Typography>
              <Typography> {this.state.data.VNUmail}</Typography>
            </div>
            <div style={{ textAlign: 'right' }}>
              {
                this.state.updateButtonEnable ? (
                  <Link to="/profile/changepass">
                    <Button variant="raised" color="primary" className={classes.button}>
                      Đổi mật khẩu tài khoản
                      </Button>
                  </Link>
                ) : (
                    <div>
                      <Button variant="raised" color="primary" className={classes.button}> NCKH </Button>
                      <Button variant="raised" color="primary" className={classes.button}>Thực tập</Button>
                      <Button variant="raised" className={classes.button}>Nhắn tin</Button>
                    </div>
                  )
              }
            </div>
          </div>
          <div>
            <Tabs
              value={this.state.tab}
              onChange={this.handleTabChange}
              indicatorColor="primary"
              textColor="primary"
              scrollable
              scrollButtons="auto"
            >
              <Link to={'tab-0'}>
                <Tab label="Thông tin liên hệ" />
              </Link>
              <Link to={'tab-1'}>
                <Tab label="Giới thiệu" />
              </Link>
            </Tabs>
          </div>
        </div>
        <div>
          <Paper className={classes.root} elevation={4}>
            {
              this.state.tab === 0 && (
                <form>
                  <TextField
                    id="VNUmail"
                    label="Địa chỉ VNUmail"
                    value={this.state.data.VNUmail}
                    onChange={this.handleChange('VNUmail')}
                    margin="normal"
                    fullWidth
                  />
                  <TextField
                    id="gmail"
                    label="Địa chỉ Gmail"
                    value={this.state.data.gmail}
                    onChange={this.handleChange('gmail')}
                    margin="normal"
                    fullWidth
                  />
                </form>

              )
            }
            {
              this.state.tab === 1 && (
                <TextField
                  id="note"
                  label="Giới thiệu"
                  value={this.state.data.note}
                  onChange={this.handleChange('note')}
                  multiline
                  rows="10"
                  margin="normal"
                  fullWidth
                />
              )
            }
            {
              this.state.updateButtonEnable ?
                <Button variant="raised" color="primary" className={classes.button} onClick={this.update}>Cập nhật</Button>
                : ""
            }
          </Paper>
        </div>
      </div>
    );
  }
}

GiangVien.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GiangVien);
