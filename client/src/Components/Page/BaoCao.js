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
import { Grid } from '@material-ui/core';

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
      id: localStorage.getItem("id"),
      expanded: null,
      reportList: [],
    };
  }
  componentDidMount() {
    return fetch('http://localhost/QLTT/api/student/' + this.state.id + '/reports?fields=id,weekStart,content,attachment')
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

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;
    var panelID = 0;
    return (
      <div className={classes.root}>
        {
          this.state.reportList.length > 0 ? this.state.reportList.map(report => {
            panelID++;
            return (
              <ExpansionPanel expanded={expanded === 'panel' + panelID} onChange={this.handleChange('panel' + panelID)}>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography className={classes.heading}>Báo cáo tuần {panelID}</Typography>
                  <Typography className={classes.secondaryHeading}>Bắt đầu ngày {report.weekStart} </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Grid container>
                    <Grid item xs>
                      <Typography> {report.content}</Typography>
                    </Grid>
                    {
                      report.attachment != "" ? (
                        <Grid item>
                          <AttachmentView fileName={report.attachment} fileLink={"public/" + report.attachment} />
                        </Grid>
                      ):""
                    }

                  </Grid>
                </ExpansionPanelDetails>
              </ExpansionPanel>
            )
          }
          ) : "Chưa có báo cáo nào"
        }

      </div>
    );
  }
}

BaoCaoPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BaoCaoPage);
