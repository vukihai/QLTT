import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";

import BaiDangPage from '../Page/BaiDang';
import BaiDangPartnerPage from '../PartnerPage/BaiDang';
import StudentTheoDoiPage from '../Page/TheoDoi';
import GiangVienPage from '../Page/GiangVien';
import BaoCaoPage from '../Page/BaoCao';
import TinNhanPage from '../Page/TinNhan';
import HomePage from '../Page/Home';
import StudentProfileForm from '../Profile/Profile';
import ChangePassForm from '../Profile/ChangePass';
import BaiDang from '../BaiDang/BaiDang';
import HocVienPage from '../Page/HocVien';
import PartnerList from '../Partner/PartnerList';
import NewPostForm from '../Partner/NewPostForm';
import NotFound from '../NotFound';
import SearchPage from '../Page/Search';
import Partner from '../Partner/Partner';
import GiangVien from '../GiangVien/GiangVien';
import MailForm from '../TinNhan/MailForm';
import MailUI from '../TinNhan/MailUI';
import TongKetPage from '../Page/Tongket';
import FileUpload from '../Test/FIleUpload';
import SemesterStepper from '../AdminPage/Semester';

class RouteName extends Component {
    constructor(props) {
        super(props);
        this.state = {
            role: localStorage.getItem('role'),
        }
    }
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/fileupload' component={FileUpload} />
                    <Route exact path='/' render={() =>this.state.role == 0?<HomePage />:this.state.role == 1?<Redirect to='/hocvien'/>:this.state.role == 2?<Redirect to='/baidang'/>:this.state.role == 3?<Redirect to='/semester'/>:<NotFound />} />
                    <Route exact path='/timkiem' component={SearchPage} />

                    <Route exact path='/semester' component={this.state.role == 3?SemesterStepper:NotFound} />
                    
                    <Route exact path='/baidang' component={(this.state.role == 0 || this.state.role == 3) ? BaiDangPage : this.state.role == 2 ? BaiDangPartnerPage : NotFound} />
                    <Route exact path='/baidang/new' component={this.state.role == 2 ? NewPostForm : NotFound} />
                    <Route exact path='/baidang/partner' component={PartnerList} />
                    <Route exact path='/baidang/:id' render={(props) => <BaiDang {...props} />} />
                    <Route exact path='/baidang/:id/edit' render={(props) => this.state.role == 2 ? <NewPostForm {...props} />: <NotFound />} />
                    
                    <Route exact path='/theodoi' component={this.state.role == 0 ? StudentTheoDoiPage : HocVienPage} />
                    
                    <Route exact path='/partner/:id/tab-:tab' render={(props) => <Partner {...props} />} />
                    <Route exact path='/partner/:id' render={(props) => <Redirect to={'/partner/' + props.match.params.id + '/tab-0'} />} />
                    <Route exact path='/partner' render={() => this.state.role == 3 ?<PartnerList/>: this.state.role == 0 ?<Redirect to='/baidang/partner' />:<NotFound/>} />
                    
                    <Route exact path='/giangvien/:id/tab-:tab' render={(props) => <GiangVien {...props} />} />
                    <Route exact path='/giangvien/:id' render={(props) => <Redirect to={'/giangvien/' + props.match.params.id + '/tab-0'} />} />
                    <Route exact path='/giangvien' component={GiangVienPage} />

                    <Route exact path='/sinhvien' component={HocVienPage} />
                    <Route exact path='/sinhvien/:id/tab-:tab' render={(props) => <StudentProfileForm {...props} />} />

                    <Route exact path='/hocvien' component={HocVienPage} />
                    <Route exact path='/hocvien/:id' component={StudentProfileForm} />
                    <Route exact path='/baocao' component={BaoCaoPage} />
                    <Route exact path='/tongket' component={TongKetPage} />
                    <Route exact path='/tinnhan' component={TinNhanPage} />
                    <Route exact path='/guitinnhan' component={MailForm} />
                    <Route exact path='/guitinnhan/:receiver' component={MailForm} />
                    <Route exact path='/guitinnhan/:receiver/:subject' component={MailForm} />
                    <Route exact path='/tinnhan/:id' component={MailUI} />
                    <Route exact path='/profile/changepass' component={ChangePassForm} />
                    <Route exact path='/profile/tab-:tab' render={(props) => this.state.role == 0 ? <StudentProfileForm {...props} /> : this.state.role == 1 ? <GiangVien {...props} /> : this.state.role == 2 ? <Partner {...props} /> : <NotFound />} />
                    <Route exact path='/profile' render={() => <Redirect to='/profile/tab-0' />} />
                </Switch>
            </div>
        );
    }
}


export default RouteName;
