import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList';
import Subheader from 'material-ui/List/ListSubheader';
import IconButton from 'material-ui/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { Button } from 'material-ui';

import FavoriteIcon from '@material-ui/icons/Favorite';


const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
    titleBar: {
        background:
            'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
            'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    icon: {
        color: 'white',
    },
});

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 */
const tileData = [
    {
        img: "https://material-ui-next.com/static/images/cards/contemplative-reptile.jpg",
        title: 'Lê Đình Thanh',
        subtitle: 'Giảng viên môn Phát triển ứng dụng Web',
        featured: false,
    },
    {
        img: "https://material-ui-next.com/static/images/cards/contemplative-reptile.jpg",
        title: 'Thầy giáo',
        subtitle: 'Giảng viên môn gì đó',
        featured: false,
    },
    {
        img: "https://material-ui-next.com/static/images/cards/contemplative-reptile.jpg",
        title: 'Thầy giáo',
        subtitle: 'Giảng viên môn gì đó',
        featured: false,
    },
];

function MyLecturer2(props) {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <GridList cellHeight={200} spacing={1} className={classes.gridList}>
                <GridListTile key={tileData[0].img} cols={2} rows={2}>
                    <img src={tileData[0].img} alt={tileData[0].title} />
                    <GridListTileBar
                        title={tileData[0].title}
                        subtitle={tileData[0].subtitle}
                        titlePosition="bottom"
                        actionIcon={
                            <div>
                                <Button className={classes.icon}>About</Button>
                            </div>
                        }
                        actionPosition="right"
                        className={classes.titleBar}
                        actionIconActionPosLeft={<div>hello</div>}
                    />
                </GridListTile>
                <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                    <Subheader component="div">Giảng viên khác</Subheader>
                </GridListTile>
                {tileData.map(tile => (
                    <GridListTile key={tile.img} cols={tile.featured ? 2 : 1} rows={tile.featured ? 2 : 1}>
                        <img src={tile.img} alt={tile.title} />
                        <GridListTileBar
                            title={tile.title}
                            subtitle={tile.subtitle}
                            titlePosition="bottom"
                            actionIcon={
                                <div>
                                    {
                                        tile.featured ?
                                            <Button className={classes.icon}>About</Button>
                                            : <IconButton className={classes.icon}><FavoriteIcon /></IconButton>
                                    }
                                </div>
                            }
                            actionPosition="right"
                            className={classes.titleBar}
                            actionIconActionPosLeft={<div>hello</div>}
                        />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}

MyLecturer2.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MyLecturer2);