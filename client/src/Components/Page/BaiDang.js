import React, { Component } from 'react';
import BaiDang from '../BaiDang/BaiDang';
import { Grid } from 'material-ui';
class BaiDangPage extends Component {
  render() {
    return (
      <div>

        <h1>Bài đăng</h1>
        <Grid container spacing={8}>
          <Grid item xs={12}>
            <BaiDang />
          </Grid>
          <Grid item xs={12} lg={4} md={6}>
            <BaiDang />
          </Grid>
          <Grid item xs={12} lg={4} md={6}>
            <BaiDang />
          </Grid>
          <Grid item xs={12} lg={4} md={6}>
            <BaiDang />
          </Grid>
          <Grid item xs={12} lg={4} md={6}>
            <BaiDang />
          </Grid>
          <Grid item xs={12} lg={4} md={6}>
            <BaiDang />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default BaiDangPage;
