import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Button from 'material-ui/Button';


import Typography from 'material-ui/Typography';

const styles = theme => ({
    card: {
        backgroundColor: '#3F51B5',
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    text: {
        color: 'white',
    }
});

class ThumbnailGiangVien extends React.Component { 
    constructor(props){
        super(props);
    }
    render() {
        const { classes } = this.props;
        return (
            <div>
                
                <Card className={classes.card} style={{width: this.props.fixedWidth? '230px':'100%',}}>
                    <CardMedia
                        className={classes.media}
                        image="http://anhdep.pro/wp-content/uploads/2015/09/phong-canh-rung-nui-2.jpg"
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography variant="subheading" className={classes.text}>
                            {this.props.lecturerName}
                        </Typography>
                    </CardContent>
                    <CardActions style={{color: 'yellow'}}>
                        <Button size="small" color="inherit" onClick={() => this.props.selectLecturer(this.props.lecturerName)}>
                            Lựa chọn
                        </Button>
                        <Link to={'/giangvien/'+this.props.lecturerID} style={{color: 'white'}}>
                            <Button size="small" color="inherit">
                                Xem thông tin
                            </Button>
                        </Link>
                    </CardActions>
                </Card>
                
            </div>
        );
    }
}

ThumbnailGiangVien.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ThumbnailGiangVien);
