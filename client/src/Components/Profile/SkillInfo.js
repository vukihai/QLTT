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

class SkillInfoForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            data: {
                staffPosition: "",
                languages: "",
                certificates: "",
                experiences: "",
                skills: "",
                worked_companies: "",
                projects: "",
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
                            id="staffPosition"
                            label="staffPosition"
                            value={this.state.data.staffPosition}
                            onChange={this.handleChange('staffPosition')}
                            margin="normal"
                            fullWidth
                        />
                        <TextField
                            id="languages"
                            label="Ngoại ngữ"
                            value={this.state.data.languages}
                            onChange={this.handleChange('languages')}
                            margin="normal"
                            fullWidth
                        />
                        <TextField
                            id="certificates"
                            label="Các chứng chỉ"
                            value={this.state.data.certificates}
                            onChange={this.handleChange('certificates')}
                            margin="normal"
                            fullWidth
                        />
                        <TextField
                            id="experiences"
                            label="Kinh nghiệm"
                            value={this.state.data.experiences}
                            onChange={this.handleChange('experiences')}
                            margin="normal"
                            fullWidth
                        />
                        <TextField
                            id="skills"
                            label="Kĩ năng"
                            value={this.state.data.skills}
                            onChange={this.handleChange('skills')}
                            margin="normal"
                            fullWidth
                        />
                        <TextField
                            id="worked_companies"
                            label="Đã làm việc tại"
                            value={this.state.data.worked_companies}
                            onChange={this.handleChange('worked_companies')}
                            margin="normal"
                            fullWidth
                        />
                        <TextField
                            id="projects"
                            label="Các dự án"
                            value={this.state.data.projects}
                            onChange={this.handleChange('projects')}
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

SkillInfoForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SkillInfoForm);