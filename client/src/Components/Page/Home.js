import React, { Component } from 'react';
import { Grid } from 'material-ui';
import HomePagePost from  '../BaiDang/HomePagePost.js';
import HomePageStepper from '../Home/HomePageStepper';


class homepage extends Component {

    render() {
        return (
          <div style={{width: '100%'}}>
              <HomePageStepper />
          </div>
        );
    }
}


export default homepage;
