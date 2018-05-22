import React, { Component } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import FollowedBaiDang from '../BaiDang/FollowedBaiDang';
class TheoDoiPage extends Component {
  state = {
    tab: 0,
  }
  handleTabChange = (event, value) => {
    this.setState({ tab: value });
  };
  render() {
    return (
      <div>
        <div>
          <Tabs
            value={this.state.tab}
            onChange={this.handleTabChange}
            indicatorColor="primary"
            textColor="primary"
            scrollable
            scrollButtons="auto"
            centered
          >
            <Tab label="Tất cả" />
            <Tab label="Đã theo dõi" />
            <Tab label="Chờ phỏng vấn" />
            <Tab label="Trúng tuyển" />
            <Tab label="Không trúng tuyển" />
          </Tabs>
        </div>
        <div>

          {(this.state.tab == 0 || this.state.tab == 1) &&
            <div>
              <FollowedBaiDang status={1} />
              {/*more here*/}
            </div>
          }
          {(this.state.tab == 0 || this.state.tab == 2) &&
            <div>
              <FollowedBaiDang status={2} />
              {/*more here*/}
            </div>
          }
          {(this.state.tab == 0 || this.state.tab == 3) &&
            <div>
              <FollowedBaiDang status={3} />
              {/*more here*/}
            </div>
          }
          {(this.state.tab == 0 || this.state.tab == 4) &&
            <div>
              <FollowedBaiDang status={0} />
              {/*more here*/}
            </div>
          }

        </div>
      </div>
    );
  }
}

export default TheoDoiPage;
