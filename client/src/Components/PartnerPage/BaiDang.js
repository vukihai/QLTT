import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { Link } from "react-router-dom";

import ColGrid from '../ColGrid/ColGrid';

import { Button } from '@material-ui/core';
import Typography from 'material-ui/Typography';

import ThumbnailBaiDang from '../BaiDang/ThumbnailBaiDang';
import ThumbnailPartner from '../Partner/ThumbnailPartner';
import NewPost from '../Partner/NewPost';

const styles = theme => ({
  margins: {
    '& > *': {
      marginRight: '15px',
    }
  },
});

class BaiDangPartnerPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      postList: [],
    }
  }
  componentDidMount() {
    fetch('http://qltt.vn/api/partner/'+localStorage.getItem('id')+'/feed?fields=id,partnerName,image,title,postTime,exp')
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
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <ColGrid container>
            <ColGrid item>
              <Link to='./baidang/new'>
                <NewPost />
              </Link>
            </ColGrid>
          {
            this.state.postList.map(post => (
              <ColGrid item>
                <ThumbnailBaiDang
                  postID={post.id}
                  title={post.title}
                  partnerAvatar=""
                  image={post.image}
                  partnerName={post.partnerName}
                  postTime={post.postTime}
                />
              </ColGrid>
            ))
          }
        </ColGrid>
      </div>
    );
  }
}
BaiDangPartnerPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BaiDangPartnerPage);
