import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { Link } from "react-router-dom";

import ColGrid from '../ColGrid/ColGrid';

import { Button } from '@material-ui/core';
import Typography from 'material-ui/Typography';

import ThumbnailBaiDang from '../BaiDang/ThumbnailBaiDang';
import Partner from '../Partner/Partner';
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
    fetch('http://web.bautroixa.vn/api/post/?fields=id,partnerName,image,title,postTime,exp')
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
          <ColGrid item>
            <ThumbnailBaiDang
              postID={1}
              title="Bầu Trời Xa Corporation tuyển lập trình viên công nghệ thông tin HTML, CSS, JS làm front-end cho dự án mới nhất của công ty: Web site chụp ảnh thuê"
              partnerAvatar="https://material-ui-next.com/static/images/remy.jpg"
              image="http://anhdep.pro/wp-content/uploads/2015/09/phong-canh-rung-nui-2.jpg"
              partnerName="Bầu Trời Xa"
              postTime="16/05/2018"
            />
          </ColGrid>
          <ColGrid item>
            <ThumbnailBaiDang
              postID={2}
              title="Tuyển nhân viên bán hàng"
              partnerAvatar="https://material-ui-next.com/static/images/remy.jpg"
              image="http://anhdep.pro/wp-content/uploads/2015/09/phong-canh-rung-nui-2.jpg"
              partnerName="Xa Bầu Trời"
              postTime="16/05/2018"
            />
          </ColGrid>
          <ColGrid item>
            <ThumbnailBaiDang
              postID={3}
              title="Tuyển hacker, hack nick facebook"
              image="http://anhdep.pro/wp-content/uploads/2015/09/phong-canh-rung-nui-2.jpg"
              partnerAvatar=""
              partnerName="Trời Xa Bầu"
              postTime="16/05/2018"
            />
          </ColGrid>
          <ColGrid item>
            <ThumbnailBaiDang
              postID={4}
              title="Bầu Trời Xa Corporation tuyển nhân viên chụp ảnh cảnh nghệ thuật để đăng lên mạng cho vui"
              image="http://anhdep.pro/wp-content/uploads/2015/09/phong-canh-rung-nui-2.jpg"
              partnerAvatar=""
              partnerName="VC Corp"
              postTime="16/05/2018"
            />
          </ColGrid>
          <ColGrid item>
            <ThumbnailBaiDang
              postID={5}
              image="http://anhdep.pro/wp-content/uploads/2015/09/phong-canh-rung-nui-2.jpg"
              title="Bầu Trời Xa Corporation tuyển lập trình viên back-end cho dự án mới nhất của mình, Công ti của chúng tôi yêu cầu trình độ php hoặc là nodejs. Biết lập trình hướng đối tượng. Học tốt cấu trúc dữ liệu và giải thuật, khả năng tư duy xây dựng hướng api. Có 1-2 năm kinh nghiệm là một lợi thế"
              partnerAvatar=""
              partnerName="FPT"
              postTime="16/05/2018"
            />
          </ColGrid>
        </ColGrid>
      </div>
    );
  }
}
BaiDangPartnerPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BaiDangPartnerPage);
