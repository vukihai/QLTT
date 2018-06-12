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

class ContactInfoForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            id: this.props.id,
            data: {
                personalEmail: "",
                skype: "",
                facebook: "",
                phoneNumber: "",
            }

        }
        this.update = this.update.bind(this);
    }
    componentDidMount() {
        return fetch('http://qltt.vn/api/student/' + this.state.id + '/?accessToken=' + localStorage.getItem("token"))
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
        return fetch('http://qltt.vn/api/student/' + this.state.id + '/?accessToken=' + localStorage.getItem("token"), {
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
        if (this.props.editable) {
            const ATTname = name;
            const ATTvalue = event.target.value;
            this.setState(prevState => ({
                data: {
                    ...prevState.data,
                    [ATTname]: ATTvalue,
                }
            }));
        }
    };
    render() {
        const { classes } = this.props;
        return (

            <div>
                <Paper className={classes.root} elevation={4}>
                    <form>
                        <TextField
                            id="personalEmail"
                            label="Email cá nhân"
                            value={this.state.data.personalEmail}
                            onChange={this.handleChange('personalEmail')}
                            margin="normal"
                            fullWidth
                        />
                        <TextField
                            id="skype"
                            label="Nhập ID skype của bạn"
                            value={this.state.data.skype}
                            onChange={this.handleChange('skype')}
                            margin="normal"
                            fullWidth
                        />
                        <TextField
                            id="facebook"
                            label="Nhập trang cá nhân facebook của bạn"
                            value={this.state.data.facebook}
                            onChange={this.handleChange('facebook')}
                            margin="normal"
                            fullWidth
                        />
                        <TextField
                            id="phoneNumber"
                            label="Nhập số điện thoại của bạn"
                            value={this.state.data.phoneNumber}
                            onChange={this.handleChange('phoneNumber')}
                            margin="normal"
                            fullWidth
                        />
                    </form>
                    {
                        this.props.editable?
                        <Button variant="raised" color="primary" className={classes.button} onClick={this.update}>Cập nhật</Button>
                        : ""
                    }
                    

                </Paper>
            </div>
        );
    }
}

ContactInfoForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContactInfoForm);
