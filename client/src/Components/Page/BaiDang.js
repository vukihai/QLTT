import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { Link } from "react-router-dom";

import ColGrid from '../ColGrid/ColGrid';

import { Button } from '@material-ui/core';
import Typography from 'material-ui/Typography';

import ThumbnailBaiDang from '../BaiDang/ThumbnailBaiDang';
import ThumbnailPartner from '../Partner/ThumbnailPartner';

const styles = theme => ({
  margins: {
    '& > *': {
      marginRight: '15px',
    }
  },
});

class BaiDangPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      postList: [],
      partnerList: [],
    }
  }
  componentDidMount() {
    fetch('http://qltt.vn/api/post/?fields=id,partnerName,image,title,postTime,exp')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          postList: responseJson,
        });
      })
      .catch((error) => {
        console.error(error);
      });
    fetch('http://qltt.vn/api/partner/?limit=10')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          partnerList: responseJson,
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
        <div style={{ display: 'flex' }}>
          <div style={{ flex: 1 }}>
            <Typography variant="subheading">
              PARTNER
            </Typography>
          </div>
          <div style={{ flex: 1, textAlign: 'right' }}>
            <Link to="/partner">
              <Button color="primary"> Xem tất cả </Button>
            </Link>
          </div>
        </div>
        <div style={{ display: 'flex', flex: 1, overflow: 'auto', marginBottom: '40px' }}>
          <div className={classes.margins} style={{ display: 'flex', minHeight: 'min-content' }}>
          {
            this.state.partnerList.map(partner => (
              <ThumbnailPartner partnerID={partner.id} partnerName={partner.name} fixedWidth />
            ))
          }
          </div>
        </div>
        <ColGrid container>
          {
            this.state.postList.map(post => (
              <ColGrid item>
                <ThumbnailBaiDang
                  postID={post.id}
                  title={post.title}
                  partnerAvatar=""
                  image={post.image}
                  partnerName={post.partnerName}
                  expTime={post.exp}
                />
              </ColGrid>
            ))
          }
        </ColGrid>
      </div>
    );
  }
}
BaiDangPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BaiDangPage);
