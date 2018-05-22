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

class HobbiesInfoForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            data: {
                hobbies: "",
                interests: "",
                note: "",
            }
        }
        this.update = this.update.bind(this);
    }
    componentDidMount() {
        return fetch('http://web.bautroixa.vn/api/student/' + localStorage.getItem('id') + '/')
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
        return fetch('http://web.bautroixa.vn/api/student/' + localStorage.getItem('id') + '/', {
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
                            id="hobbies"
                            label="hobbies"
                            value={this.state.data.hobbies}
                            onChange={this.handleChange('hobbies')}
                            margin="normal"
                            fullWidth
                        />
                        <TextField
                            id="interests"
                            label="interests"
                            value={this.state.data.interests}
                            onChange={this.handleChange('interests')}
                            margin="normal"
                            fullWidth
                        />
                        <TextField
                            id="note"
                            label="note"
                            multiLine
                            rows="6"
                            value={this.state.data.note}
                            onChange={this.handleChange('note')}
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

HobbiesInfoForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HobbiesInfoForm);