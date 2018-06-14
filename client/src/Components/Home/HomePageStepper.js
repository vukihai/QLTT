import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";

import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
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
        paddingTop: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        boxShadow: 'none',
    },
});



class HomePageStepper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeStep: 3,
            registerStart: '',
            startSeme: '',
            endSeme: '',
            partner: "",
            lecturer: "",
        };
    }

    componentDidMount() {
        fetch('http://qltt.vn/api/admin/' + localStorage.getItem('id') + "/semester/?accessToken=" + localStorage.getItem('token'))
            .then((response) => response.json())
            .then((rJ) => {
                this.setState({
                    registerStart: rJ.registerStart,
                    startSeme: rJ.startSeme,
                    endSeme: rJ.endSeme,
                });
                if (new Date().getTime() - new Date(rJ.registerStart).getTime() < 0) {
                    this.setState({activeStep: 3});
                } else if (new Date().getTime() - new Date(rJ.registerStart).getTime() > 0 && new Date(rJ.startSeme).getTime() - new Date().getTime() > 0){
                    this.setState({activeStep: 0});
                } else if (new Date(rJ.endSeme).getTime() - new Date().getTime() > 0){
                    this.setState({activeStep: 1});
                } else if (new Date(rJ.endSeme).getTime() - new Date().getTime() < 0){
                    this.setState({activeStep: 2});
                }
            })
            .catch((error) => {
                console.error(error);
            });
        fetch('http://qltt.vn/api/student/' + localStorage.getItem('id') + '/my_Lecturer')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    lecturer: responseJson,
                });
            })
            .catch((error) => {
                console.error(error);
            });
        fetch('http://qltt.vn/api/student/' + localStorage.getItem('id') + '/my_Partner')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    partner: responseJson,
                });
            })
            .catch((error) => {
                console.error(error);
            });

    }
    getStepContent(stepIndex) {
        switch (stepIndex) {
            case 0:
                return (
                    <Grid container>
                        <Grid item xs={12} md={6} style={{ textAlign: 'center' }}>
                            <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                                <Typography variant="headline"> Partner của bạn </Typography>
                                {(this.state.partner == "") ? <ErrorOutlineIcon style={{ fontSize: '80px', margin: '20px 0' }} /> : <Avatar style={{ width: '70px', height: '70px', margin: '30px 0' }}>{this.state.partner[0].name[0]}</Avatar>}
                                <Typography variant="subheading"> {(this.state.partner == "") ? <div><div>Bạn chưa chọn partner nào</div> <Link to='/giangvien'><Button variant="raised" color="primary">Đăng kí</Button></Link></div> : this.state.partner[0].name}</Typography>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6} style={{ textAlign: 'center' }}>
                            <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                                <Typography variant="headline"> Giảng viên của bạn </Typography>
                                {(this.state.lecturer == "") ? <ErrorOutlineIcon style={{ fontSize: '80px', margin: '20px 0' }} /> : <Avatar style={{ width: '70px', height: '70px', margin: '30px 0' }}>{this.state.lecturer[0].name[0]}</Avatar>}
                                <Typography variant="subheading"> {(this.state.lecturer == "") ? <div><div>Bạn chưa chọn giảng viên nào</div> <Link to='/giangvien'><Button variant="raised" color="primary">Đăng kí</Button></Link></div> : this.state.lecturer[0].name}</Typography>
                            </div>
                        </Grid>
                    </Grid>
                );
            case 1:
                return (
                    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                        <AssignmentIcon style={{ fontSize: '100px' }} />
                        <Typography variant="headline"> Hãy báo cáo tuần này </Typography>
                        <Link to='/baocao'><Button variant="raised" color="primary"> Nộp ngay </Button> </Link>
                    </div>
                );
            case 2:
                return (
                    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                        <VerifiedUserIcon style={{ fontSize: '100px' }} />
                        <Typography variant="headline"> Đã kết thúc học kì, đã đến lúc để tổng kết </Typography>
                        <Link to='/tongket'><Button variant="raised" color="primary"> Xem điểm </Button></Link>
                    </div>
                );
            default:
                return 'Lỗi đã xảy ra';
        }
    }
    getSteps() {
        return [this.state.registerStart+'Mở đợt đăng kí thực tập', this.state.startSeme+'Bắt đầu kì thực tập', this.state.endSeme+'Kết thúc kì thực tập'];
    }
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
        const steps = this.getSteps();
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
                                <Typography variant="headline"> Ngoài thời gian đăng kí</Typography>
                            </div>
                        </div>
                    ) : (
                            <div>
                                <Paper className={classes.instructions}>{this.getStepContent(activeStep)}</Paper>
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