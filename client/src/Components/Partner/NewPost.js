import React, { Component } from 'react';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import { Avatar } from '@material-ui/core';
import Typography from 'material-ui/Typography';
import { IconButton } from '@material-ui/core';
import { Paper } from 'material-ui';


class NewPost extends Component {
    render() {
        return (
            <Paper style={{padding: '8px'}}>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <Avatar>
                    P
                </Avatar> 
                <div style={{flex: '1', paddingLeft: '8px'}}>
                    <Typography variant="subheading"> Đăng tuyển thực tập mới? </Typography>
                </div>
                <IconButton>
                    <PhotoCameraIcon />
                </IconButton>
            </div>
            </Paper>
        );
    }
}


export default NewPost;