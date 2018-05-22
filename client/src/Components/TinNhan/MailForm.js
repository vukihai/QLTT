import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import AttachFileIcon from '@material-ui/icons/AttachFile';

import { TextField, Button, IconButton } from 'material-ui';
import AttachmentFIle from './AttachmentFIle';

const styles = theme => ({
  root: theme.mixins.gutters({
    padding: 40 + 'px',
    width: 100 + '%'
  }),
  bigAvatar: {
    width: 60,
    height: 60,
  },
});

class MailForm extends React.Component {
  state = {
    receiver : "16020925",
    subject: "Hỏi về cách gửi mail",
    content: "GỬi thế nào nhỉ?",
  }
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };
  render() {
    const { classes } = this.props;
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Paper className={classes.root} elevation={4}>
          <Typography variant="headline" component="h3">
            Soạn thư
        </Typography>
          <form style={{marginBottom : 20 + 'px'}}>
            <TextField
              id="receiver"
              label="Người nhận"
              value={this.state.receiver}
              onChange={this.handleChange('receiver')}
              margin="normal"
              fullWidth
            />
            <TextField
              id="subject"
              label="Chủ đề"
              type="subject"
              value={this.state.subject}
              onChange={this.handleChange('subject')}
              margin="normal"
              fullWidth
            />
            <TextField
                id="content"
                label="Nội dung"
                multiline
                rows="8"
                value={this.state.content}
                onChange={this.handleChange('content')}
                margin="normal"
                fullWidth
            />
            <AttachmentFIle fileName="attachment.docx" fileSize="12kb"/>
          <Button variant="raised" color="primary" className={classes.button}>
            Gửi
          </Button>
          <input
            accept=".xlsx,.xls,image/*,.doc, .docx,.ppt, .pptx,.txt,.pdf"
            style={{display: 'none'}}
            id="att-file"
            multiple
            type="file"
          />
          <label htmlFor="att-file">
            <IconButton component="span">
                <AttachFileIcon />
            </IconButton>
          </label>
        </form>

        </Paper>
      </div>
    );
  }
}

MailForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MailForm);
