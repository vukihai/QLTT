import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


class RouteName extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' render={() => <div>Trang chủ</div>} />
                    <Route path='/baidang' render={() => <div>Bài đăng</div>} />
                    <Route path='/theodoi' render={() => <div>Theo dõi</div>} />
                    <Route path='/giangvien' render={() => <div>Giảng viên</div>} />
                    <Route path='/partner' render={() => <div>Partner</div>} />
                    <Route path='/hocvien' render={() => <div>Học viên</div>} />
                    <Route path='/baocao' render={() => <div>Báo cáo</div>} />
                    <Route path='/tinnhan' render={() => <div>Tin nhắn</div>} />
                    <Route path='/profile' render={() => <div>Hồ sơ</div>} />
                </Switch>
            </div>
        );
    }
}


export default RouteName;
