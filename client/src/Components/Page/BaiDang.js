import React, { Component } from 'react';
import BaiDang from '../BaiDang/BaiDang';
import { Grid } from 'material-ui';
import FeaturedBaiDang from '../BaiDang/FeaturedBaiDang';
class BaiDangPage extends Component {
  render() {
    return (
      <div>

        <h1>Nổi bật</h1>
        <Grid container spacing={8}>
          <Grid item xs={12}>
            <FeaturedBaiDang />
          </Grid>
          <Grid item xs={12}>
            <h1> Nhiều hơn... </h1>
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
