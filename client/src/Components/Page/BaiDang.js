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
    fetch('http://localhost/QLTT/api/post/?fields=id,partnerName,image,title,postTime,exp')
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
    fetch('http://localhost/QLTT/api/partner/')
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
            <Link to="/baidang/partner">
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
            <ThumbnailPartner partnerID={1} partnerName="Sample data" fixedWidth />
            <ThumbnailPartner partnerID={1} partnerName="Bầu Trời Xa Corp" fixedWidth />
            <ThumbnailPartner partnerID={1} partnerName="Bầu Trời Xa Corp" fixedWidth />
            <ThumbnailPartner partnerID={1} partnerName="Bầu Trời Xa Corp" fixedWidth />
            <ThumbnailPartner partnerID={1} partnerName="Bầu Trời Xa Corp" fixedWidth />
            <ThumbnailPartner partnerID={1} partnerName="Bầu Trời Xa Corp" fixedWidth />
            <ThumbnailPartner partnerID={1} partnerName="Bầu Trời Xa Corp" fixedWidth />
            <ThumbnailPartner partnerID={1} partnerName="Bầu Trời Xa Corp" fixedWidth />
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
              image="http://anhdep.pro/wp-content/uploads/2015/09/phong-canh-rung-nui-2.jpg"
              partnerAvatar="https://material-ui-next.com/static/images/remy.jpg"
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
              image="http://anhdep.pro/wp-content/uploads/2015/09/phong-canh-rung-nui-2.jpg"
              title="Bầu Trời Xa Corporation tuyển nhân viên chụp ảnh cảnh nghệ thuật để đăng lên mạng cho vui"
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
BaiDangPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BaiDangPage);
