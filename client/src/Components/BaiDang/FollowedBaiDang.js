import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Card, { CardHeader, CardContent } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import red from 'material-ui/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Button } from 'material-ui';
import { SMALL } from 'material-ui/utils/withWidth';

const styles = theme => ({
    card: {
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    actions: {
        display: 'flex',
    },
    expand: {
        transform: 'rotate(0deg)',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
        marginLeft: 'auto',
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
    leftIcon: {
        marginRight: theme.spacing.unit,
    },
    button: {
        margin: theme.spacing.unit,
    },
});

class FollowedBaiDang extends React.Component {
    state = {
        followed: true,
    };

    handleFollowClick = () => {
        this.setState({ followed: !this.state.followed });
    };

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Card className={classes.card}>
                    <CardHeader
                        avatar={
                            <Avatar aria-label="Recipe" className={classes.avatar}>
                                B
                            </Avatar>
                        }
                        action={
                            <div>
                                <Button variant="contained" size={SMALL} disabled={this.props.status != 1} className={classes.button}>
                                    {
                                        this.props.status == 1 ? <FavoriteIcon className={classes.leftIcon} color={this.state.followed ? "secondary" : "primary"} />:""
                                    }
                                    {
                                        this.props.status == 0 ? "Không trúng tuyển" :
                                            this.props.status == 1 ? "Đã theo dõi" :
                                                this.props.status == 2 ? "Chờ phỏng vấn" :
                                                    this.props.status == 3 ? "Đã trúng tuyển" : "ERR"
                                    }
                                </Button>
                            </div>
                        }
                        title={<Link to={"/baidang/1"} ><Typography variant="title">Bầu Trời Xa Corporation tuyển nhân viên chụp ảnh các món ăn ngon trong nhà hàng để đăng lên fanpage, in lên trên thực đơn</Typography></Link>}
                    />

                </Card>
            </div>
        );
    }
}

FollowedBaiDang.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FollowedBaiDang);
