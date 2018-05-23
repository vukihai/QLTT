import React, { Component } from 'react';
import { Grid } from 'material-ui';
import HomePagePost from  '../BaiDang/HomePagePost.js';



class homepage extends Component {

    render() {
        return (
          <div>
              <Grid container spacing={8}>
                  <Grid item xs={8}>
                      <HomePagePost/>
                  </Grid>
                  <Grid item xs={4}>thông báo</Grid>
              </Grid>
          </div>
        );
    }
}


export default homepage;
