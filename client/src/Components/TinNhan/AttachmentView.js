import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import Card, { CardMedia, CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';


const styles = theme => ({
    card: {
        backgroundColor: '#3F51B5',
        width: '230px'
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    text: {
        color: 'white',
    }
});

class AttachmentView extends React.Component { 
    constructor(props){
        super(props);
    }
    render() {
        const { classes } = this.props;
        return (
            <div>
                <Link to={this.props.fileLink}>
                <Card className={classes.card}>
                    <CardMedia
                        className={classes.media}
                        image="data:image/png;base64,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"
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography variant="subheading" className={classes.text}>
                            {this.props.fileName}
                        </Typography>
                    </CardContent>
                </Card>
                </Link>
            </div>
        );
    }
}

AttachmentView.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AttachmentView);
