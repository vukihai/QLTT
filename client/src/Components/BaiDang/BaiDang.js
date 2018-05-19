import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardHeader, CardMedia, CardContent } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import red from 'material-ui/colors/red';

import MoreVertIcon from '@material-ui/icons/MoreVert';

import { Button } from 'material-ui';
import { SMALL } from 'material-ui/utils/withWidth';

const styles = theme => ({
    card: {
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    avatar: {
        backgroundColor: red[500],
    },
});

class BaiDang extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            role: localStorage.getItem('role'),
            partnerName: "Not found",
            partnerAvatar: "",
            postTime: "",
            title: "Not found",
            content: "Bài viết bạn đang tìm kiếm hiện không có",
            image: ""
        }
    }
    componentDidMount() {
        return fetch('http://localhost/QLTT/api/post/'+this.props.match.params.id)
          .then((response) => response.json())
          .then((responseJson) => {
            this.setState({
                isLoading: false,
                partnerName: responseJson.partnerName,
                partnerAvatar: "",
                postTime: responseJson.postTime,
                title: responseJson.title,
                content: responseJson.content,
                image: responseJson.image
            });
          })
          .catch((error) => {
            console.error(error);
          });
      }
    render() {
        const { classes } = this.props;
        return (
            <div>
                <Card className={classes.card}>
                    <CardHeader
                        avatar={
                            <Avatar className={classes.avatar} src={this.state.partnerAvatar}>
                                {this.state.partnerAvatar === "" ? this.state.partnerName.substring(0, 1) : ""}
                            </Avatar>
                        }
                        action={
                            <div>
                                <Button size={SMALL} disabled style={{ minWidth: '0', padding: 0, marginRight: '5px' }}>{this.state.postTime}</Button>
                                {
                                    (this.state.role != 3) ? (
                                        <IconButton onClick={this.handleFollowClick}>
                                            <MoreVertIcon color="primary" />
                                        </IconButton>
                                    ) : (
                                            <Button variant="raised" color="primary">Theo dõi</Button>
                                        )
                                }

                            </div>
                        }
                        title={<Typography variant="title">{this.state.partnerName}</Typography>}
                    />
                    <CardContent>
                        <Typography variant="headline">
                            {this.state.title}
                        </Typography>
                        <Typography variant="subheading">
                            {this.state.content}
                        </Typography>
                    </CardContent>
                    <CardMedia
                        className={classes.media}
                        image={this.state.image}
                        title="Contemplative Reptile"
                    />
                </Card>
            </div>
        );
    }
}

BaiDang.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BaiDang);
