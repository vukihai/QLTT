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
import StarIcon from '@material-ui/icons/Star';
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
    constructor(props) {
        super(props);
        this.state = {
            followed: true,
            selected: false,
        };
        this.luachon = this.luachon.bind(this);
    }

    handleFollowClick = () => {
        this.setState({ followed: !this.state.followed });
    };
    luachon() {
        if (this.props.status == 3) {
            return fetch('http://qltt.vn/api/partner/0/follow/' + localStorage.getItem('id') + '/?postID=' + this.props.id + '&status=' + this.props.status + '&accessToken=' + localStorage.getItem("token"))
                .then((response) => response.json())
                .then((responseJson) => {
                    alert("ok");
                    this.setState({
                        selected: true,
                    })

                })
                .catch((error) => {
                    console.error(error);
                });
        }
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Card className={classes.card}>
                    <CardHeader
                        avatar={
                            <Avatar aria-label="Recipe" className={classes.avatar}>
                                {('' + this.props.partnerName).substr(0, 1)}
                            </Avatar>
                        }
                        action={
                            <div>
                                <Button variant="contained" size={SMALL} disabled={this.props.status == 0} className={classes.button} onClick={this.luachon}>
                                    {
                                        this.props.status == 1 ? <StarIcon className={classes.leftIcon} color={this.state.followed ? "primary" : "action"} /> : ""
                                    }
                                    {
                                        (this.props.status == 3 || this.props.status == 4)? <FavoriteIcon className={classes.leftIcon} color={(this.state.selected|| this.props.status == 4) ? "primary" : "action"} /> : ""
                                    }
                                    {
                                        this.props.status == 0 ? "Không trúng tuyển" :
                                            this.props.status == 1 ? (this.state.followed ? "Đã theo dõi" : "Theo dõi") :
                                                this.props.status == 2 ? "Chờ phỏng vấn" :
                                                    (this.props.status == 3 || this.props.status == 4) ? ((this.state.selected || this.props.status == 4) ? "Đã lựa chọn" : "Lựa chọn thực tập") : "ERR"
                                    }
                                </Button>
                            </div>
                        }
                        title={<Link to={"/baidang/" + this.props.id} ><Typography variant="title">{this.props.title}</Typography></Link>}
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