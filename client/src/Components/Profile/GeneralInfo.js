import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

import { TextField, Button, Grid, Avatar } from 'material-ui';
import red from 'material-ui/colors/red';

const styles = theme => ({
    root: theme.mixins.gutters({
        padding: 40 + 'px',
    }),
    bigAvatar: {
        width: 60,
        height: 60,
    },
});

class GeneralInfoForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            data: {
                studentID: "",
                msv: "",
                class: "",
                khoa: "",
                nganh: "",
                diachi: "",
                hoten: "",
                ngaysinh: "",
                VNUmail: "",
                diemTB: "",
                namTN: "",
            }
        }
    }
    componentDidMount() {
        return fetch('http://localhost/QLTT/api/student/' + localStorage.getItem('id') + '/fixed_info?accessToken='+localStorage.getItem("token"))
            .then((response) => response.json())
            .then((responseJson) => {

                this.setState({
                    isLoading: false,
                    data: responseJson,
                }, function () {
                });

            })
            .catch((error) => {
                console.error(error);
            });
    }
    render() {
        const { classes } = this.props;
        return (

            <div>
                <Paper className={classes.root} elevation={4}>
                    <form>
                        <TextField
                            id="msv"
                            label="Mã sinh viên"
                            value={this.state.data.msv}
                            margin="normal"
                            fullWidth
                        />
                        <TextField
                            id="VNUmail"
                            label="VNUmail"
                            value={this.state.data.VNUmail}
                            margin="normal"
                            fullWidth
                        />
                        <TextField
                            id="hoten"
                            label="Họ và tên"
                            value={this.state.data.hoten}
                            margin="normal"
                            fullWidth
                        />
                        <TextField
                            id="ngaysinh"
                            label="Ngày tháng năm sinh"
                            value={this.state.data.ngaysinh}
                            margin="normal"
                            fullWidth
                        />
                        <TextField
                            id="diachi"
                            label="Địa chỉ"
                            value={this.state.data.diachi}
                            margin="normal"
                            fullWidth
                        />
                        <TextField
                            id="class"
                            label="Lớp"
                            value={this.state.data.class}
                            margin="normal"
                            fullWidth
                        />
                        <TextField
                            id="khoa"
                            label="Khoa"
                            value={this.state.data.khoa}
                            margin="normal"
                            fullWidth
                        />
                        <TextField
                            id="nganh"
                            label="Ngành"
                            value={this.state.data.nganh}
                            margin="normal"
                            fullWidth
                        />
                        <TextField
                            id="diemTB"
                            label="Điểm Trung Bình"
                            value={this.state.data.diemTB}
                            margin="normal"
                            fullWidth
                        />
                        <TextField
                            id="namTN"
                            label="Năm tốt nghiệp"
                            value={this.state.data.namTN}
                            margin="normal"
                            fullWidth
                        />
                    </form>

                </Paper>
            </div>
        );
    }
}

GeneralInfoForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GeneralInfoForm);
