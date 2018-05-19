import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import Card, { CardMedia, CardContent, CardActions } from 'material-ui/Card';



import Typography from 'material-ui/Typography';






import { Button } from 'material-ui';


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

class Partner extends React.Component { 
    constructor(props){
        super(props);
    }
    render() {
        const { classes } = this.props;
        return (
            <div>
                <Link to={'/partner/'+this.props.partnerID}>
                <Card className={classes.card} style={{width: this.props.fixedWidth? '230px':'100%',}}>
                    <CardMedia
                        className={classes.media}
                        image="http://anhdep.pro/wp-content/uploads/2015/09/phong-canh-rung-nui-2.jpg"
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography variant="subheading" className={classes.text}>
                            {this.props.partnerName}
                        </Typography>
                    </CardContent>
                    <CardActions style={{color: 'yellow'}}>
                        <Button size="small" color="inherit">
                            Xem thông tin
                        </Button>
                    </CardActions>
                </Card>
                </Link>
            </div>
        );
    }
}

Partner.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Partner);
