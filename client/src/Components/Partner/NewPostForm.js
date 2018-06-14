import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import DeleteIcon from '@material-ui/icons/Delete';
import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css';

import moment from 'moment';
import 'moment/locale/vi'; // this is the important bit, you have to import the locale your'e trying to use.
import MomentUtils from 'material-ui-pickers/utils/moment-utils';
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider';
import DateTimePicker from 'material-ui-pickers/DateTimePicker';

import { TextField, Button, IconButton } from 'material-ui';
import AttachmentFIle from '../TinNhan/AttachmentFIle';
import { Grid } from '@material-ui/core';

moment.locale('vi');

const styles = theme => ({
  root: theme.mixins.gutters({
    padding: 40 + 'px',
    width: '100%',
  }),
  bigAvatar: {
    width: 60,
    height: 60,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
});

class NewPostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "<br><br><br><br><br><br>",
      imageFile: '',
      imageSize: '',
      exp: new Date(),
    };
    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
    this.upload = this.upload.bind(this);
    this.deleteImage = this.deleteImage.bind(this);
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
  handleExpTime = (date) => {
    this.setState({ exp: date });
  }
  deleteImage() {
    this.setState({
      imageFile: '',
      imageSize: '',
    })
  }
  handleFileChange(selectorFiles) {
    this.setState({
      imageFile: "Đang tải lên",
      imageSize: '...',
    })
    this.upload(selectorFiles[0]);
  }
  upload(upFile) {
    var formData = new FormData();
    formData.append("upfile", upFile);
    return fetch('http://qltt.vn/api/upload/?accessToken=' + localStorage.getItem("token"), {
      method: 'POST',
      headers: {
      },
      body: formData,
    }).then((response) => response.json())
      .then((responseJson) => {
        responseJson.err ? alert(responseJson.err) : null;
        this.setState({
          imageFile: 'http://qltt.vn/public/' + responseJson.data.name,
          imageSize: responseJson.data.size,
        })
      })
      .catch((error) => {
        console.error(error);
      });
  }
  create() {
    var formData = new FormData();
    var sendData = {
      title: this.state.title,
      image: this.state.imageFile,
      content: this.state.content,
      exp: this.state.exp.toISOString(),
    };
    for (var k in sendData) {
      formData.append(k, sendData[k]);
    }
    return fetch('http://qltt.vn/api/partner/' + localStorage.getItem('id') + '/feed', {
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
  update() {
    var formData = new FormData();
    var sendData = {
      title: this.state.title,
      image: this.state.imageFile,
      content: this.state.content,
      exp: this.state.exp.toISOString(),
    };
    for (var k in sendData) {
      formData.append(k, sendData[k]);
    }
    return fetch('http://qltt.vn/api/post/' + this.props.match.params.id, {
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
  delete() {
    var r = window.confirm("Bạn chắc chắn muốn xóa chưa?");
    if (r) {
      return fetch('http://qltt.vn/api/post/' + this.props.match.params.id + '/delete', {
        method: 'GET',
        headers: {
        },
      })
        .then((response) => response.json())
        .then((responseJson) => {
          alert(responseJson.success ? "success" : responseJson.err);
          this.props.history.push('/baidang');
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }
  componentDidMount() {
    if (this.props.match.params.id) {
      return fetch('http://qltt.vn/api/post/' + this.props.match.params.id)
        .then((response) => response.json())
        .then((responseJson) => {
          this.setState({
            isLoading: false,
            exp: new Date(responseJson.exp),
            title: responseJson.title,
            content: responseJson.content,
            imageFile: responseJson.image,
            imageSize: '',
          });
        })
        .catch((error) => {
          console.error(error);
        });
    }
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
            <div style={{ "color": "rgba(0, 0, 0, 0.54)", "font-size": 13 }}>Nội dung</div>
            <ReactQuill
              theme="snow"
              modules={{
                toolbar: [
                  [{ 'header': [1, 2, false] }],
                  ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                  [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
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
              onChange={this.contentChange}
            />
            <Grid container style={{ marginTop: '30px' }}>
              <Grid item>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  {
                    this.state.imageFile ?
                      <img src={this.state.imageFile} style={{ height: '90px', width: '160px' }} />
                      : ""
                  }
                  <input
                    accept="image/*"
                    style={{ display: 'none' }}
                    id="att-file"
                    onChange={(e) => this.handleFileChange(e.target.files)}
                    multiple
                    type="file"
                  />
                  <label htmlFor="att-file">
                    <Button variant="contained" className={classes.button} component="span">
                      <PhotoCameraIcon className={classes.leftIcon} />Chọn ảnh bìa
                </Button>
                  </label>
                </div>
              </Grid>
              <Grid item md>
                {
                  this.state.imageFile ?
                    <AttachmentFIle fileName={this.state.imageFile} fileSize={this.state.imageSize} deleteAction={this.deleteImage} />
                    : ""
                }
              </Grid>
            </Grid>


            <div style={{ display: 'flex', flexDirection: 'row-reverse' }}>
              {
                this.props.match.params.id ?
                  <div>
                    <Button variant="raised" color="primary" className={classes.button} onClick={this.update}> Cập nhật</Button>
                    <Button variant="contained" className={classes.button} component="span" onClick={this.delete}><DeleteIcon className={classes.leftIcon} />Xóa</Button>
                  </div> :
                  <Button variant="raised" color="primary" className={classes.button} onClick={this.create}> Đăng</Button>
              }

              <MuiPickersUtilsProvider utils={MomentUtils} moment={moment} locale="vi">
                <DateTimePicker
                  disablePast
                  format="HH:mm DD/MM/YYYY"
                  value={this.state.exp}
                  onChange={this.handleExpTime}
                  showTodayButton
                  label="hết hạn"
                />
              </MuiPickersUtilsProvider>
            </div>
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
