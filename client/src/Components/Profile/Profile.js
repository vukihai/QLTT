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

import ContactInfoForm from './ContactInfo';
import GeneralInfoForm from './GeneralInfo';
import SkillInfoForm from './SkillInfo';
import HobbiesInfoForm from './HobbiesInfo';

const styles = theme => ({
  root: theme.mixins.gutters({
    padding: 40 + 'px',
  }),
});

class StudentProfileForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      id: this.props.match.params.id ? parseInt(this.props.match.params.id) : localStorage.getItem("id"),
      updateButtonEnable: this.props.match.params.id ? (this.props.match.params.id == localStorage.getItem("id") ? true : false) : true,
      tab: this.props.match.params.tab ? parseInt(this.props.match.params.tab) : 0,
      data: {
        hoten: "",
        VNUmail: "",
      },
    }
  }
  handleTabChange = (event, value) => {
    this.setState({ tab: value });
  };
  componentDidMount() {
    return fetch('http://qltt.vn/api/student/' + this.state.id + '/fixed_info?accessToken=' + localStorage.getItem("token"))
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
                P
              </Avatar>
            </div>
            <div style={{ flex: '1' }}>
              <Typography variant="display1" style={{ fontWeight: 'bold' }}>{this.state.data.hoten}</Typography>
              <Typography>{this.state.data.VNUmail}</Typography>
            </div>
            <div style={{ textAlign: 'right' }}>
              <Link to="/profile/changepass">
                <Button variant="raised" color="primary" className={classes.button}>
                  Đổi mật khẩu tài khoản
                      </Button>
              </Link>
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
              <Link to="tab-0">
                <Tab label="Thông tin chung" />
              </Link>
              <Link to="tab-1">
                <Tab label="Liên hệ" />
              </Link>
              <Link to="tab-2">
                <Tab label="Kỹ năng" />
              </Link>
              <Link to="tab-3">
                <Tab label="Sở thích" />
              </Link>
            </Tabs>
          </div>
        </div>
        <div>
          {
            this.state.tab === 0 && (
              <GeneralInfoForm id={this.state.id} editable={this.state.updateButtonEnable} />
            )
          }
          {
            this.state.tab === 1 && (
              <ContactInfoForm id={this.state.id} editable={this.state.updateButtonEnable} />
            )
          }
          {
            this.state.tab === 2 && (
              <SkillInfoForm id={this.state.id} editable={this.state.updateButtonEnable} />
            )
          }
          {
            this.state.tab === 3 && (
              <HobbiesInfoForm id={this.state.id} editable={this.state.updateButtonEnable} />
            )
          }
        </div>
      </div>
    );
  }
}

StudentProfileForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StudentProfileForm);
