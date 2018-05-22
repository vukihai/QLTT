import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';

import { TextField, Button, IconButton } from 'material-ui';
import AttachmentFIle from '../TinNhan/AttachmentFIle';

const styles = theme => ({
  root: theme.mixins.gutters({
    padding: 40 + 'px',
    width: '100%',
  }),
  bigAvatar: {
    width: 60,
    height: 60,
  },
});

class NewPostForm extends React.Component {
  state = {
    subject: "Bầu Trời Xa tuyển thực tập code php",
    content: "code api php cho dự án QLTT",
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
            Đăng bài
        </Typography>
          <form style={{marginBottom : 20 + 'px'}}>
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
            <AttachmentFIle fileName="banner.png" fileSize="12kb"/>
          <Button variant="raised" color="primary" className={classes.button}>
            Đăng
          </Button>
          <input
            accept="image/*"
            style={{display: 'none'}}
            id="att-file"
            multiple
            type="file"
          />
          <label htmlFor="att-file">
            <IconButton component="span">
                <PhotoCameraIcon />
            </IconButton>
          </label>
        </form>

        </Paper>
      </div>
    );
  }
}

NewPostForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NewPostForm);
