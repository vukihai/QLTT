import React, { Component } from 'react';
import FollowedBaiDang from '../BaiDang/FollowedBaiDang';
class TheoDoiPage extends Component {
  render() {
    return (
      <div>
        <h1>Đang theo dõi</h1>
        <FollowedBaiDang />
        <FollowedBaiDang />
      </div>
    );
  }
}

export default TheoDoiPage;
