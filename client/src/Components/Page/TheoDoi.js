import React, { Component } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import FollowedBaiDang from '../BaiDang/FollowedBaiDang';
class StudentTheoDoiPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: 0,
      data: [],
    }
  }
  componentDidMount() {
    return fetch('http://qltt.vn/api/student/' + this.state.id + '/follows?accessToken=' + localStorage.getItem("token"))
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          data: responseJson,
        }, function () {

        });

      })
      .catch((error) => {
        console.error(error);
      });
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
              <FollowedBaiDang status={1} id={1} partnerName={"Bầu Trời Xa"} title="tuyển nhân viên giặt là ủi" />
              {/*more here*/}
            </div>
          }
          {(this.state.tab == 0 || this.state.tab == 2) &&
            <div>
              <FollowedBaiDang status={2} id={2} partnerName={"SAMSUNG"} title="tuyển sinh viên thử độ bền điện thoại"/>
              {/*more here*/}
            </div>
          }
          {(this.state.tab == 0 || this.state.tab == 3) &&
            <div>
              <FollowedBaiDang status={3} id={3} partnerName={"SAMSUNG"} title="tuyển sinh viên thử độ bền điện thoại"/>
              {/*more here*/}
            </div>
          }
          {(this.state.tab == 0 || this.state.tab == 4) &&
            <div>
              <FollowedBaiDang status={0} id={4} partnerName={"SAMSUNG"} title="tuyển sinh viên thử độ bền điện thoại"/>
              {/*more here*/}
            </div>
          }

        </div>
      </div>
    );
  }
}

export default StudentTheoDoiPage;
