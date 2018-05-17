import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

import { TextField, Button, Grid, Avatar } from 'material-ui';

const styles = theme => ({
    root: theme.mixins.gutters({
        padding: 40 + 'px',
        width: 450 + 'px'
    }),
    bigAvatar: {
        width: 60,
        height: 60,
    },
});

class GiangVienCuaToi extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
        this.update = this.update.bind(this);
    }
    componentDidMount() {

    }
    update() {

    }

    render() {
        const { classes } = this.props;
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Paper className={classes.root} elevation={4}>
                    <Typography variant="headline" component="h3" style={{ textAlign: 'center' }}>
                        Giảng viên của tôi
                    </Typography>
                    <Typography component="p" style={{ textAlign: 'center', marginBottom: 40 + 'px' }}>
                        Hiện đang hướng dẫn thực tập
                    </Typography>
                    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', marginBottom: 25 + 'px' }}>
                        <Avatar className={classes.bigAvatar} src={this.props.avatar}>
                        {this.props.avatar!=""?"":  this.props.name.substring(0,1)}
                    </Avatar>
                        <div style={{ display: 'flex', flex: '1', marginTop: 10 + 'px', marginBottom: 40 + 'px' }}>
                            {this.props.name}
                    </div>
                        <Button color="primary" className={classes.button}>
                            Trò truyện
                        </Button>
                        <Button color="primary" className={classes.button} onClick={this.props.deselectLecturer}>
                            Bỏ Lựa chọn
                        </Button>
                    </div>
                </Paper>
            </div>
        );
    }
}

GiangVienCuaToi.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GiangVienCuaToi);
