import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


import Typography from 'material-ui/Typography';
import { Link } from "react-router-dom";
import { Button } from '@material-ui/core';
import ThumbnailPartner from '../Partner/ThumbnailPartner';
import ThumbnailBaiDang from '../BaiDang/ThumbnailBaiDang';
import ThumbnailGiangVien from '../GiangVien/ThumbnailGiangVien';
import ColGrid from '../ColGrid/ColGrid';

const styles = theme => ({
    margins: {
        '& > *': {
            marginRight: '15px',
        }
    },
});

class SearchPage extends Component {
    state = {
        tab: 0,
        partnerList: [{ id: 1, name: "Bầu Trời Xa" }, { id: 2, name: "Vật vờ Studio" }],
        lecturerList: [{ id: 1, name: "Thanh LĐ" }, { id: 2, name: "ABC" }],
        postList: [{ id: 1, title: "Bầu Trời Xa tuyển hacker", image: "http://anhdep.pro/wp-content/uploads/2015/09/phong-canh-rung-nui-2.jpg", partnerName: "BTX", postTime: "21/05/2018" }]
    }
    handleTabChange = (event, value) => {
        this.setState({ tab: value });
    };
    render() {
        const { classes } = this.props;
        return (
            <div>
                <div style={{ paddingBottom: '25px' }}>
                    <Tabs
                        value={this.state.tab}
                        onChange={this.handleTabChange}
                        indicatorColor="primary"
                        textColor="primary"
                        scrollable
                        scrollButtons="auto"
                    >
                        <Tab label="Tất cả" />
                        <Tab label="Partner" />
                        <Tab label="Giảng viên" />
                        <Tab label="Bài viết" />
                    </Tabs>
                </div>
                <div>
                    {(this.state.tab == 0 || this.state.tab == 1) &&
                        <div>
                            <div style={{ display: 'flex' }}>
                                <div style={{ flex: 1 }}>
                                    <Typography variant="subheading">
                                        PARTNER
                        </Typography>
                                </div>
                                <div style={{ flex: 1, textAlign: 'right' }}>
                                    <Button color="primary" onClick={(event) => this.handleTabChange(event, 1)}> Xem tất cả </Button>
                                </div>
                            </div>
                            <div style={{ display: 'flex', flex: 1, overflow: 'auto', marginBottom: '40px' }}>
                                <div className={classes.margins} style={{ display: 'flex', minHeight: 'min-content' }}>
                                    {
                                        this.state.partnerList.map(partner => (
                                            <ThumbnailPartner partnerID={partner.id} partnerName={partner.name} fixedWidth />
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    }

                    {(this.state.tab == 0 || this.state.tab == 2) &&
                        <div>
                            <div style={{ display: 'flex' }}>
                                <div style={{ flex: 1 }}>
                                    <Typography variant="subheading">
                                        Giảng viên
                        </Typography>
                                </div>
                                <div style={{ flex: 1, textAlign: 'right' }}>
                                    <Button color="primary" onClick={(event) => this.handleTabChange(event, 2)}> Xem tất cả </Button>
                                </div>
                            </div>
                            <div style={{ display: 'flex', flex: 1, overflow: 'auto', marginBottom: '40px' }}>
                                <div className={classes.margins} style={{ display: 'flex', minHeight: 'min-content' }}>
                                    {
                                        this.state.lecturerList.map(lecturer => (
                                            <ThumbnailGiangVien lecturerID={lecturer.id} lecturerName={lecturer.name} />
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    }
                    {(this.state.tab == 0 || this.state.tab == 3) && (
                        <div>
                            <div style={{ display: 'flex' }}>
                                <div style={{ flex: 1 }}>
                                    <Typography variant="subheading">
                                        Bài viết
                            </Typography>
                                </div>
                                <div style={{ flex: 1, textAlign: 'right' }}>
                                    <Button color="primary" onClick={(event) => this.handleTabChange(event, 3)}> Xem</Button>
                                </div>
                            </div>
                            <ColGrid container>
                                {
                                    this.state.postList.map(post => (
                                        <ColGrid item>
                                            <ThumbnailBaiDang
                                                postID={post.id}
                                                title={post.title}
                                                partnerAvatar=""
                                                image={post.image}
                                                partnerName={post.partnerName}
                                                postTime={post.postTime}
                                            />
                                        </ColGrid>
                                    ))
                                }
                            </ColGrid>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

SearchPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchPage);
