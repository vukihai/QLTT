import React, { Component } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import FollowedBaiDang from '../BaiDang/FollowedBaiDang';
class StudentTheoDoiPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: 0,
      id: localStorage.getItem("id"),
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
          {
            this.state.data.map(post => (this.state.tab == 0 || (this.state.tab == post.status && post.status !=4) || (this.state.tab == 4 && post.status == 0) || (this.state.tab == 3 && post.status == 4)) &&
              <div>
                <FollowedBaiDang status={post.status} id={post.postId} partnerName={post.partnerName} title={post.title} />
                {/*more here*/}
              </div>)
          }
        </div>
      </div>
    );
  }
}

export default StudentTheoDoiPage;
