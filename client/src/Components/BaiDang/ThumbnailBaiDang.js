import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classnames from 'classnames';
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Collapse from 'material-ui/transitions/Collapse';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import red from 'material-ui/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Badge, Chip } from 'material-ui';
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

class ThumbnailBaiDang extends React.Component { 
    render() {
        const { classes } = this.props;
        return (
            <div>
                <Link to={'/baidang/'+this.props.postID}>
                <Card className={classes.card}>
                    <CardMedia
                        className={classes.media}
                        image="http://anhdep.pro/wp-content/uploads/2015/09/phong-canh-rung-nui-2.jpg"
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography variant="title">
                            {this.props.title}
                        </Typography>
                    </CardContent>
                    <CardHeader
                        avatar={
                            <Avatar className={classes.avatar} src={this.props.partnerAvatar}>
                                {this.props.partnerAvatar===""?this.props.partnerName.substring(0,1):""}
                            </Avatar>
                        }
                        action={
                            <div>
                                <Button size={SMALL} disabled style={{minWidth: '0', padding: 0}}>10k</Button>
                                <IconButton disabled onClick={this.handleFollowClick}>
                                    <FavoriteIcon color="primary" color="secondary"/>
                                </IconButton>
                            </div>
                        }
                        title={this.props.partnerName}
                        subheader={this.props.postTime}
                    />
                </Card>
                </Link>
            </div>
        );
    }
}

ThumbnailBaiDang.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ThumbnailBaiDang);
