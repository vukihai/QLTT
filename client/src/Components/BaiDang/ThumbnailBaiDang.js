import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardHeader, CardMedia, CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import red from 'material-ui/colors/red';
import Avatar from 'material-ui/Avatar';

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
                        image={this.props.image}
                        title={this.props.image}
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
                        // action={
                        //     <div>
                        //         <Button size={SMALL} disabled style={{minWidth: '0', padding: 0}}>10k</Button>
                        //         <IconButton disabled onClick={this.handleFollowClick}>
                        //             <FavoriteIcon color="primary" color="secondary"/>
                        //         </IconButton>
                        //     </div>
                        // }
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
