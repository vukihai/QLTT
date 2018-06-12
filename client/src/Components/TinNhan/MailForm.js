import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import AttachFileIcon from '@material-ui/icons/AttachFile';

import { TextField, Button, IconButton } from 'material-ui';
import AttachmentFIle from './AttachmentFIle';
import SimpleSnackbar from'./SimpleSnackbar';
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
    id: localStorage.getItem('id'),
    token: localStorage.getItem('token'),
    receiver : "",
    parent: null,
    subject: "",
    content: "",
    attachment: "",
    items: "",
    snackbar: ""
  }
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };
  send() {
    var data = new FormData();
    data.append("receiver", this.state.receiver);
      data.append("subject", this.state.subject);
      data.append("content", this.state.content);
      data.append("parent", this.state.parent);
    fetch("http://qltt.vn/api/messages/" + this.state.id.toString() +"?accessToken=" + this.state.token, {
          method: 'POST',
          body: data
      })
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
         if(!("error" in this.state.items)) {
                this.setState({
                    snackbar: null
                  });
                 this.setState({
                    snackbar: <SimpleSnackbar mess={"gửi thành công"}/>
                  });
                setTimeout(function() {
                    1+1;
                }, 2000);
                this.props.history.push('/tinnhan');
            } else {
                this.setState({
                    snackbar: null
                  });
                 this.setState({
                    snackbar: <SimpleSnackbar mess={this.state.items.error}/>
                  });
            }
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
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
          <Button variant="raised" color="primary" className={classes.button} onClick={() => {this.send()}}>
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
        {this.state.snackbar}
      </div>
    );
  }
}

MailForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MailForm);
