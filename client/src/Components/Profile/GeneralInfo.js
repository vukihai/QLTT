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
        this.update = this.update.bind(this);
    }
    componentDidMount() {
        return fetch('http://web.bautroixa.vn/api/student/' + localStorage.getItem('id') + '/fixed_info')
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
    update() {
        var formData = new FormData();
        var sendData = this.state.data;
        for (var k in sendData) {
            formData.append(k, sendData[k]);
        }
        return fetch('http://web.bautroixa.vn/api/student/' + localStorage.getItem('id') + '/fixed_info', {
            method: 'POST',
            headers: {
            },
            body: formData,
        })
            .then((response) => response.json())
            .then((responseJson) => {
                alert(responseJson.success ? "success" : responseJson.err)
            })
            .catch((error) => {
                console.error(error);
            });
    }

    handleChange = name => event => {
        const ATTname = name;
        const ATTvalue = event.target.value;
        this.setState(prevState => ({
            data: {
                ...prevState.data,
                [ATTname]: ATTvalue,
            }
        }));
    };
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
                            onChange={this.handleChange('msv')}
                            margin="normal"
                            fullWidth
                        />
                        <TextField
                            id="VNUmail"
                            label="VNUmail"
                            value={this.state.data.VNUmail}
                            onChange={this.handleChange('VNUmail')}
                            margin="normal"
                            fullWidth
                        />
                        <TextField
                            id="hoten"
                            label="Họ và tên"
                            value={this.state.data.hoten}
                            onChange={this.handleChange('hoten')}
                            margin="normal"
                            fullWidth
                        />
                        <TextField
                            id="ngaysinh"
                            label="Ngày tháng năm sinh"
                            value={this.state.data.ngaysinh}
                            onChange={this.handleChange('ngaysinh')}
                            margin="normal"
                            fullWidth
                        />
                        <TextField
                            id="diachi"
                            label="Địa chỉ"
                            value={this.state.data.diachi}
                            onChange={this.handleChange('diachi')}
                            margin="normal"
                            fullWidth
                        />
                        <TextField
                            id="class"
                            label="Lớp"
                            value={this.state.data.class}
                            onChange={this.handleChange('class')}
                            margin="normal"
                            fullWidth
                        />
                        <TextField
                            id="khoa"
                            label="Khoa"
                            value={this.state.data.khoa}
                            onChange={this.handleChange('khoa')}
                            margin="normal"
                            fullWidth
                        />
                        <TextField
                            id="nganh"
                            label="Ngành"
                            value={this.state.data.nganh}
                            onChange={this.handleChange('nganh')}
                            margin="normal"
                            fullWidth
                        />
                        <TextField
                            id="diemTB"
                            label="Điểm Trung Bình"
                            value={this.state.data.diemTB}
                            onChange={this.handleChange('diemTB')}
                            margin="normal"
                            fullWidth
                        />
                        <TextField
                            id="namTN"
                            label="Năm tốt nghiệp"
                            value={this.state.data.namTN}
                            onChange={this.handleChange('namTN')}
                            margin="normal"
                            fullWidth
                        />
                    </form>
                    <Button variant="raised" color="primary" className={classes.button} onClick={this.update}>
                        Cập nhật
          </Button>

                </Paper>
            </div>
        );
    }
}

GeneralInfoForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GeneralInfoForm);