import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import Typography from 'material-ui/Typography';
import { Grid } from '@material-ui/core';
import { Paper } from 'material-ui';

const styles = theme => ({
    root: {
        width: '100%',
    },
    left: {
        padding: '15px',
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        justifyItems: 'center',
    },
});

class TongKetPage extends React.Component {
    state = {
        expanded: null,
    };

    render() {
        const { classes } = this.props;

        return (
            <div>
                <Paper style={{ padding: '20px' }}>
                    <Grid container>
                        <Grid item xs>
                            <Typography variant="display1" style={{ margin: '10px 0' }}>Nhận xét của Partner</Typography>
                            <Typography variant="subheading">
                                Sinh viên làm tốt nhiệm vụ được giao, hoàn thành dự án thành công
                                Sinh viên làm tốt nhiệm vụ được giao, hoàn thành dự án thành công
                                Sinh viên làm tốt nhiệm vụ được giao, hoàn thành dự án thành công
                                Sinh viên làm tốt nhiệm vụ được giao, hoàn thành dự án thành công
                                Sinh viên làm tốt nhiệm vụ được giao, hoàn thành dự án thành công
                                Sinh viên làm tốt nhiệm vụ được giao, hoàn thành dự án thành công
                                Sinh viên làm tốt nhiệm vụ được giao, hoàn thành dự án thành công
                        </Typography>
                            <Typography variant="display1" style={{ margin: '10px 0' }}>Nhận xét của Giảng viên</Typography>
                            <Typography variant="subheading">
                                Sinh viên làm tốt nhiệm vụ được giao, hoàn thành dự án thành công
                                Sinh viên làm tốt nhiệm vụ được giao, hoàn thành dự án thành công
                                Sinh viên làm tốt nhiệm vụ được giao, hoàn thành dự án thành công
                                Sinh viên làm tốt nhiệm vụ được giao, hoàn thành dự án thành công
                                Sinh viên làm tốt nhiệm vụ được giao, hoàn thành dự án thành công
                                Sinh viên làm tốt nhiệm vụ được giao, hoàn thành dự án thành công
                                Sinh viên làm tốt nhiệm vụ được giao, hoàn thành dự án thành công
                        </Typography>
                        </Grid>
                        <Grid item className={classes.left}>
                            <div>
                                <div style={{flex: 1}}>
                                    <Typography variant="display1">Điểm thực tập</Typography>
                                    <Typography variant="display4" style={{ margin: '30px 0' }}>8</Typography>
                                    <Typography variant="headline">Giỏi</Typography>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        );
    }
}

TongKetPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TongKetPage);
