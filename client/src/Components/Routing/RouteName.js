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
                    <Route exact path='/' render={() => { document.title = "Trang chủ - Quản lí thực tập"; return <div>Trang chủ</div>} } />
                    <Route path='/period' render={() => { document.title = "Học kì - Quản lí thực tập"; return <div>Học kì</div>} } />
                    <Route path='/timkiem' render={() => { document.title = "Tìm kiếm - Quản lí thực tập"; return <div>Tìm kiếm</div>} } />
                    <Route path='/baidang' render={() => { document.title = "Bài Đăng - Quản lí thực tập"; return <div>Bài Đăng</div>} } />
                    <Route path='/theodoi' render={() => {document.title = "Đang theo dõi - Quản lí thực tập"; return <div>Theo dõi</div>} } />
                    <Route path='/giangvien' render={() => { document.title = "Giảng viên - Quản lí thực tập"; return <div>Giảng viên</div>} } />
                    <Route path='/sinhvien' render={() => { document.title = "Sinh viên - Quản lí thực tập"; return <div>Sinh viên</div>} } />
                    <Route path='/partner' render={() => { document.title = "Partner - Quản lí thực tập"; return <div>Partner</div>} } />
                    <Route path='/hocvien' render={() => { document.title = "Học viên - Quản lí thực tập"; return <div>Học viên</div>} } />
                    <Route path='/baocao' render={() => { document.title = "Báo cáo - Quản lí thực tập"; return <div>Báo cáo</div>} } />
                    <Route path='/tongket' render={() => { document.title = "Tổng kết - Quản lí thực tập"; return <div>Tổng kết</div>} } />
                    <Route path='/tinnhan' render={() => { document.title = "Tin nhắn - Quản lí thực tập"; return <div>Tin nhắn</div>} } />
                    <Route path='/guitinnhan' render={() => { document.title = "Gửi tin nhắn - Quản lí thực tập"; return <div>Gửi tin nhắn</div>} } />
                    <Route path='/tinnhan' render={() => { document.title = "Tin nhắn - Quản lí thực tập"; return <div>Tin nhắn</div>} } />
                    <Route path='/profile' render={() => { document.title = "Hồ sơ - Quản lí thực tập"; return <div>Hồ sơ</div>} } />
                </Switch>
            </div>
        );
    }
}


export default RouteName;
