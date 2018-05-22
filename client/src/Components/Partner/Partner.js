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

class Partner extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      tab: this.props.match.params.tab ? parseInt(this.props.match.params.tab) : 0,
    }
  }
  handleTabChange = (event, value) => {
    this.setState({ tab: value });
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
                B
              </Avatar>
            </div>
            <div style={{ flex: '1' }}>
              <Typography variant="display1" style={{ fontWeight: 'bold' }}>Bầu Trời Xa</Typography>
              <Typography>Xuân Thủy, Cầu giấy, Hà Nội</Typography>
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
              <Link to={'/partner/'+this.props.match.params.tab+'/tab-0'}>
                <Tab label="Bài đăng" />
              </Link>
              <Link to={'/partner/'+this.props.match.params.tab+'/tab-1'}>
                <Tab label="Liên hệ" />
              </Link>
            </Tabs>
          </div>
        </div>
        <div>
          {
            this.state.tab === 0 && (
                <Paper className={classes.root} elevation={4}>
                    Các bài đăng ở đây
                </Paper>
            )
          }
          {
            this.state.tab === 1 && (
                <Paper className={classes.root} elevation={4}>
                    Cầu giấy Hà Nội
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
