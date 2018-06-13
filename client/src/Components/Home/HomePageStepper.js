import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";

import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Avatar } from '@material-ui/core';

import AssignmentIcon from '@material-ui/icons/Assignment';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

const styles = theme => ({
    root: {
        width: '100%',
    },
    backButton: {
        marginRight: theme.spacing.unit,
    },
    instructions: {
        marginTop: theme.spacing.unit,
        marginBottom: theme.spacing.unit,
    },
});

function getSteps() {
    return ['2018-06-01 Mở đợt đăng kí thực tập', '2018-06-10 Kết thúc đăng kí, Bắt đầu kì thực tập', 'Kết thúc kì thực tập'];
}

function getStepContent(stepIndex) {
    switch (stepIndex) {
        case 0:
            return (
                <Grid container>
                    <Grid item xs={12} md={6}>
                        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                            <Typography variant="headline"> Partner của bạn </Typography>
                            <ErrorOutlineIcon style={{fontSize: '80px',margin: '20px 0'}}/>
                            <Typography variant="subheading"> Bạn chưa chọn partner nào </Typography>
                            <Link to='/baidang'><Button variant="raised" color="primary">Đăng kí</Button></Link>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6} style={{ textAlign: 'center' }}>
                        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                            <Typography variant="headline"> Giảng viên của bạn </Typography>
                            <Avatar style={{width: '70px',height: '70px',margin: '30px 0'}}>L</Avatar>
                            <Typography variant="subheading"> Lê Đình Thanh </Typography>
                        </div>
                    </Grid>
                </Grid>
            );
        case 1:
            return (
                <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                    <AssignmentIcon style={{fontSize: '100px'}}/>
                    <Typography variant="headline"> Bạn chưa nộp báo cáo tuần này </Typography>
                    <Link to='/baocao'><Button variant="raised" color="primary"> Nộp ngay </Button> </Link>
                </div>
            );
        case 2:
            return (
                <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                <VerifiedUserIcon style={{fontSize: '100px'}}/>
                    <Typography variant="headline"> Đã kết thúc học kì, đã đến lúc để tổng kết </Typography>
                    <Link to='/tongket'><Button variant="raised" color="primary"> Xem điểm </Button></Link>
                </div>
            );
        default:
            return 'Lỗi đã xảy ra';
    }
}

class HomePageStepper extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        activeStep: 0,
    };

    handleNext = () => {
        const { activeStep } = this.state;
        this.setState({
            activeStep: activeStep + 1,
        });
    };

    handleBack = () => {
        const { activeStep } = this.state;
        this.setState({
            activeStep: activeStep - 1,
        });
    };

    handleReset = () => {
        this.setState({
            activeStep: 0,
        });
    };

    render() {
        const { classes } = this.props;
        const steps = getSteps();
        const { activeStep } = this.state;

        return (
            <div className={classes.root}>
                <Stepper activeStep={activeStep} alternativeLabel>
                    {steps.map(label => {
                        return (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>
                <div>
                    {this.state.activeStep === steps.length ? (
                        <div>
                            <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                                <Typography variant="headline"> Hãy chuẩn bị cho học kì mới </Typography>
                            </div>
                            <Button onClick={this.handleReset}>Reset</Button>
                        </div>
                    ) : (
                            <div>
                                <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                                <div>
                                    <Button
                                        disabled={activeStep === 0}
                                        onClick={this.handleBack}
                                        className={classes.backButton}
                                    >
                                        Back
                </Button>
                                    <Button variant="contained" color="primary" onClick={this.handleNext}>
                                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                    </Button>
                                </div>
                            </div>
                        )}
                </div>
            </div>
        );
    }
}

HomePageStepper.propTypes = {
    classes: PropTypes.object,
};

export default withStyles(styles)(HomePageStepper);