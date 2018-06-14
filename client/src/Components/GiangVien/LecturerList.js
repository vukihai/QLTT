import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import Grid from '@material-ui/core/Grid';

import ThumbnailGiangVien from '../GiangVien/ThumbnailGiangVien';

const styles = theme => ({

});

class LecturerList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lecturerList: [],
        }
    }
    componentDidMount() {
        return fetch('http://qltt.vn/api/lecturer/?accessToken=' + localStorage.getItem('token'))
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    lecturerList: responseJson,
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
                <Grid container spacing={8}>
                    {
                        this.state.lecturerList.map(lecturer => (
                            <Grid item lg={3} md={4} sm={6} xs={12}>
                                <ThumbnailGiangVien lecturerID={lecturer.id} lecturerName={lecturer.name} />
                            </Grid>
                        ))
                    }
                </Grid>
            </div>
        );
    }
}
LecturerList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LecturerList);
