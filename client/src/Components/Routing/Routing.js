import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import BaiDangPage from '../Page/BaiDang';
import TheoDoiPage from '../Page/TheoDoi';
import GiangVienPage from '../Page/GiangVien';
import BaoCaoPage from '../Page/BaoCao';
import TinNhanPage from '../Page/TinNhan';
import HomePage from '../Page/Home';
import ProfileForm from '../Profile/Profile';
import ChangePassForm from '../Profile/ChangePass';
import BaiDang from '../BaiDang/BaiDang';
import HocVienPage from '../Page/HocVien';
import PartnerList from '../Partner/PartnerList';

class RouteName extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route exact path='/baidang' component={BaiDangPage} />
                    <Route exact path='/baidang/:id' component={BaiDang} />
                    <Route exact path='/theodoi' component={TheoDoiPage} />
                    <Route exact path='/giangvien' component={GiangVienPage} />
                    <Route exact path='/partner' component={PartnerList} />
                    <Route exact path='/hocvien' component={HocVienPage} />
                    <Route exact path='/baocao' component={BaoCaoPage} />
                    <Route exact path='/tinnhan' component={TinNhanPage} />
                    <Route exact path='/profile' component={ProfileForm} />
                    <Route exact path='/profile/changepass' component={ChangePassForm} />
                </Switch>
            </div>
        );
    }
}


export default RouteName;