import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Button from 'material-ui/Button';


import Typography from 'material-ui/Typography';

const color = ['#00887a', '#3F51B5','#778f9b','#414141', '#eb3f79', '#1d87e4','#a900ff', '#378d3b', '#e53935', '#00abc0', '#ff6f42'];
const styles = theme => ({
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
                
                <Card style={{width: this.props.fixedWidth? '230px':'100%', backgroundColor: color[parseInt(this.props.lecturerID)%11]}}>
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
                        <Button size="small" color="inherit" onClick={() => alert('Bạn đã chọn '+this.props.lecturerName)}>
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
