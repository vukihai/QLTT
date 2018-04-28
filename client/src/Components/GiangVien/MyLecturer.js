import React from 'react';
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
});

class MyLecturer extends React.Component {
    state = { selected: false };

    handleSelectClick = () => {
        this.setState({ selected: !this.state.selected });
    };

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Card className={classes.card}>
                    <CardHeader
                        avatar={
                            <Avatar aria-label="Recipe" className={classes.avatar}>
                                T
                            </Avatar>
                        }
                        action={
                            <div>
                                <Button size={SMALL} disabled style={{minWidth: '0', padding: 0}}>2k</Button>
                                <IconButton onClick={this.handleSelectClick}>
                                    <FavoriteIcon color={this.state.selected?"secondary":"primary"}/>
                                </IconButton>
                            </div>
                        }
                        title="Lê Đình Thanh"
                        subheader="Giảng Viên phát triển ứng dụng web"
                    />
                </Card>
            </div>
        );
    }
}

MyLecturer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MyLecturer);