import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import Grid from '@material-ui/core/Grid';

import ThumbnailPartner from '../Partner/ThumbnailPartner';

const styles = theme => ({

});

class PartnerList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            data: [],
        }
    }
    componentDidMount() {
        return fetch('http://qltt.vn/api/partner/?accessToken=' + localStorage.getItem("token"))
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
                <Grid container spacing={8}>
                    {
                        this.state.data.map(partner => (
                            <Grid item lg={3} md={4} sm={6} xs={12}>
                                <ThumbnailPartner partnerID={partner.id} partnerName={partner.name} />
                            </Grid>
                        ))
                    }
                </Grid>
            </div>
        );
    }
}
PartnerList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PartnerList);
