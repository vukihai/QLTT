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
import { Badge, Chip, GridList }from 'material-ui';
import { Button } from 'material-ui';
import { SMALL } from 'material-ui/utils/withWidth';
import { GridListTile } from 'material-ui';
import { GridListTileBar } from 'material-ui';
import Subheader from 'material-ui/List/ListSubheader';

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


class LecturerList extends React.Component {
    state = { selected: false };

    handleSelectClick = () => {
        this.setState({ selected: !this.state.selected });
    };

    render() {
        const { classes } = this.props;
        const tileData = [
            {
                img: "http://anhdep.pro/wp-content/uploads/2015/09/phong-canh-rung-nui-2.jpg",
                title: 'Image',
                author: 'author',
            },
            {
                img: "http://anhdep.pro/wp-content/uploads/2015/09/phong-canh-rung-nui-2.jpg",
                title: 'Image',
                author: 'author',
            },
            {
                img: "http://anhdep.pro/wp-content/uploads/2015/09/phong-canh-rung-nui-2.jpg",
                title: 'Image',
                author: 'author',
            },
            {
                img: "http://anhdep.pro/wp-content/uploads/2015/09/phong-canh-rung-nui-2.jpg",
                title: 'Image',
                author: 'author',
            },
        ];
        return (
            <div className={classes.root} >
                <GridList cellHeight={180} className={classes.gridList}>
                    <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                        <Subheader component="div">December</Subheader>
                    </GridListTile>
                    {tileData.map(tile => (
                        <GridListTile key={tile.img}>
                            <img src={tile.img} alt={tile.title} />
                            <GridListTileBar
                                title={tile.title}
                                subtitle={<span>by: {tile.author}</span>}
                                actionIcon={
                                    <IconButton className={classes.icon}>
                                        <FavoriteIcon />
                                    </IconButton>
                                }
                            />
                        </GridListTile>
                    ))}
                </GridList>
            </div>
        );
    }
}

LecturerList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LecturerList);