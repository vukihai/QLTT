import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import ExpansionPanel, {
  ExpansionPanelDetails,
  ExpansionPanelSummary,
} from 'material-ui/ExpansionPanel';
import Typography from 'material-ui/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AttachmentView from '../TinNhan/AttachmentView';
import { Grid, Button } from '@material-ui/core';

const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
});

class BaoCaoPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      periodStart: '2018-05-20',
      id: localStorage.getItem("id"),
      expanded: null,
      reportList: [],
    };
    this.renderReportList = this.renderReportList.bind(this);
  }
  resetHMS(date) {
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
    return date;
  }
  weekStartConvert(datestring, addDay) {
    var thisDate = new Date(datestring);
    thisDate.setDate(thisDate.getDate() - (thisDate.getDay() == 0 ? 6 : (thisDate.getDay() - 1)) + addDay);
    return this.resetHMS(thisDate);
  }
  componentDidMount() {
    return fetch('http://localhost/QLTT/api/student/' + this.state.id + '/reports?accessToken=' + localStorage.getItem("token") + '&fields=id,weekStart,content,attachment')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          reportList: responseJson,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };
  renderReportList() {
    const { classes } = this.props;
    const { expanded } = this.state;
    console.log(this.state.reportList[0])
    var ret = [], count = 0;
    var weekCount = (this.weekStartConvert(new Date().toString(), 0) - this.weekStartConvert(this.state.periodStart, 0)) / 604800000;
    for (var i = 0; i <= weekCount; i++) {
      var report = this.state.reportList[count];
      var content, attachmentFileName = "";
      if (count < this.state.reportList.length && this.weekStartConvert(this.state.periodStart, i * 7).getTime() == this.weekStartConvert(this.state.reportList[count].weekStart, 0).getTime()) {
        count++;
        content = (
          <div>
            <Typography> {report.content} </Typography>
            <Button variant="raised">Xem nhận xét</Button>
          </div>
        );
        attachmentFileName = report.attachment;
      } else {
        content = (
          <div>
            <Button variant="raised">Nộp báo cáo</Button><Typography> Bạn chưa nộp báo cáo nào</Typography>
          </div>
        );
        attachmentFileName = "";
      }
      ret.push(
        <ExpansionPanel expanded={expanded === 'panel' + i} onChange={this.handleChange('panel' + i)}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Báo cáo tuần {i}</Typography>
            <Typography className={classes.secondaryHeading}>Bắt đầu ngày {this.weekStartConvert(this.state.periodStart, i * 7).toString()} </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Grid container spacing={8}>
              <Grid item xs>
                {content}
              </Grid>
              {
                attachmentFileName != "" ? (
                  <Grid item>
                    <AttachmentView fileName={attachmentFileName} fileLink={"public/" + attachmentFileName} />
                  </Grid>
                ) : ""
              }

            </Grid>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      )
    }
    return ret;
  }

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;
    var panelID = 0;
    return (
      <div className={classes.root}>
        {
          this.renderReportList()
        }

      </div>
    );
  }
}

BaoCaoPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BaoCaoPage);
