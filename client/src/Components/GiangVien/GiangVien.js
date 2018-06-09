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
                L
              </Avatar>
            </div>
            <div style={{ flex: '1' }}>
              <Typography variant="display1" style={{ fontWeight: 'bold' }}>Lê Đình Thanh</Typography>
              <Typography>Giảng viên trường Đại học Công Nghệ </Typography>
            </div>
            <div style={{ textAlign: 'right' }}>
                <Button variant="raised" className={classes.button}>
                  NCKH
                </Button>
                <Button variant="raised" className={classes.button}>
                  Thực tập
                </Button>
                <Button variant="raised" color="primary" className={classes.button}>
                  Nhắn tin
                </Button>
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
              <Link to={'/giangvien/'+this.props.match.params.id+'/tab-0'}>
                <Tab label="Thông tin" />
              </Link>
              <Link to={'/giangvien/'+this.props.match.params.id+'/tab-1'}>
                <Tab label="Liên hệ" />
              </Link>
            </Tabs>
          </div>
        </div>
        <div>
          {
            this.state.tab === 0 && (
                <Paper className={classes.root} elevation={4}>
                    Các thông tin cơ bản về thầy chẳng hạn :3
                    + Chuyên ngành
                    + Giải thưởng
                </Paper>
            )
          }
          {
            this.state.tab === 1 && (
                <Paper className={classes.root} elevation={4}>
                    Các thông tin ở đây: VNUmail, gmail, SĐT, ...
                </Paper>
            )
          }
        </div>
      </div>
    );
  }
}

GiangVien.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GiangVien);
