import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css';

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
  constructor(props){
    super(props);
    this.state = {
      title: "Bầu Trời Xa tuyển thực tập code php",
      content: "<br><br><br><br><br><br>",
    };
    this.create = this.create.bind(this);
    this.contentChange = this.contentChange.bind(this)
  }
  
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };
  contentChange(value) {
    this.setState({ content: value });
  }
  create() {
    var formData = new FormData();
    var sendData = {
      title: this.state.title,
      image: "",
      content: this.state.content,
      exp: "",
    };
    for (var k in sendData) {
      formData.append(k, sendData[k]);
    }
    return fetch('http://localhost/QLTT/api/partner/' + localStorage.getItem('id') + '/feed', {
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
  render() {
    const { classes } = this.props;
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Paper className={classes.root} elevation={4}>
          <Typography variant="headline" component="h3">
            Đăng bài
          </Typography>
          <form style={{ marginBottom: 20 + 'px' }}>
            <TextField
              id="title"
              label="Chủ đề"
              type="title"
              value={this.state.title}
              onChange={this.handleChange('title')}
              margin="normal"
              fullWidth
            />
            <div style={{"color": "rgba(0, 0, 0, 0.54)", "font-size": 13}}>nội dung</div>
            <ReactQuill 
                theme="snow"
                modules={{
                toolbar: [
                  [{ 'header': [1, 2, false] }],
                  ['bold', 'italic', 'underline','strike', 'blockquote'],
                  [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
                  ['link', 'image'],
                  ['clean']
                        ],
                      }}
                formats={[
                        'header',
                        'bold', 'italic', 'underline', 'strike', 'blockquote',
                        'list', 'bullet', 'indent',
                        'link', 'image'
                      ]
                    }
                value={this.state.content}
                onChange = {this.contentChange}
                />
            <AttachmentFIle fileName="banner.png" fileSize="12kb" />
            <Button variant="raised" color="primary" className={classes.button} onClick={this.create}>
              Đăng
          </Button>
            <input
              accept="image/*"
              style={{ display: 'none' }}
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
