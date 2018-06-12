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

import ColGrid from '../ColGrid/ColGrid';
import ThumbnailBaiDang from '../BaiDang/ThumbnailBaiDang';

const styles = theme => ({
  root: theme.mixins.gutters({
    padding: 40 + 'px',
  }),
});

class Partner extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      id: this.props.match.params.id ? this.props.match.params.id : localStorage.getItem("id"),
      updateButtonEnable: this.props.match.params.id ? (this.props.match.params.id == localStorage.getItem("id") ? true : false) : true,
      tab: this.props.match.params.tab ? parseInt(this.props.match.params.tab) : 0,
      data: {
        name: "Loading...",
        contact: "",
      },
      postList: [],
    }
    this.update = this.update.bind(this);
  }
  componentDidMount() {
    fetch('http://localhost/QLTT/api/partner/' + this.state.id + '/info')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          data: responseJson,
        });
      })
      .catch((error) => {
        this.setState({
          isLoading: false,
          name: "Not Found",
        });
        console.error(error);
      });
    fetch('http://localhost/QLTT/api/partner/' + this.state.id + '/feed?fields=id,partnerName,image,title,postTime,exp')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          postList: responseJson,
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
    return fetch('http://web.bautroixa.vn/api/partner/' + this.state.id + '/?accessToken=' + localStorage.getItem("token"), {
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
              <Typography variant="display1" style={{ fontWeight: 'bold' }}> {this.state.data.name}</Typography>
              <Typography>{this.state.data.contact}</Typography>
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
                <Tab label="Bài đăng" />
              </Link>
              <Link to={'tab-1'}>
                <Tab label="Liên hệ" />
              </Link>
            </Tabs>
          </div>
        </div>
        <div>
          {
            this.state.tab === 0 && (
              <Paper className={classes.root} elevation={4}>
                <ColGrid container>
                  {
                    this.state.postList.map(post => (
                      <ColGrid item>
                        <ThumbnailBaiDang
                          postID={post.id}
                          title={post.title}
                          partnerAvatar=""
                          image={post.image}
                          partnerName={post.partnerName}
                          postTime={post.postTime}
                        />
                      </ColGrid>
                    ))
                  }
                </ColGrid>
              </Paper>
            )
          }
          {
            this.state.tab === 1 && (
              <Paper className={classes.root} elevation={4}>
                <TextField
                  id="contact"
                  label="Thông tin liên hệ"
                  multiline
                  rows="10"
                  value={this.state.data.contact}
                  onChange={this.handleChange('contact')}
                  margin="normal"
                  fullWidth
                />
                {
                  this.state.updateButtonEnable ?
                    <Button variant="raised" color="primary" className={classes.button} onClick={this.update}>Cập nhật</Button>
                    : ""
                }
              </Paper>
            )
          }
        </div>
      </div>
    );
  }
}

Partner.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Partner);
