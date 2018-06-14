import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import { NavLink } from "react-router-dom";
import { browserHistory, withRouter } from "react-router-dom"

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
});

class PartnerFollow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: localStorage.getItem('id'),
            isLoading: false,
            jsonData: [],
        }
    }
    componentDidMount() {
        fetch('http://qltt.vn/api/partner/' + localStorage.getItem('id') + '/follow/?accessToken=' + localStorage.getItem("token"))
            .then((response) => response.json())
            .then((responseJson) => {

                this.setState({
                    isLoading: false,
                    jsonData: responseJson,
                }, function () {
                });
            })
            .catch((error) => {
                console.error(error);
            });

    }
    nextStatus(stdID, postID, status) {
        fetch('http://qltt.vn/api/partner/' + localStorage.getItem('id') + '/follow/'+stdID+'/?postID='+postID+'&status='+status+'&accessToken=' + localStorage.getItem("token"))
            .then((response) => response.json())
            .then((responseJson) => {
                alert("ok");
                this.componentDidMount();

            })
            .catch((error) => {
                console.error(error);
            });
    }
    goStuInfo(id) {
        this.props.history.push('/sinhvien/' + id + "/tab-0");
    }
    goPost(id) {
        this.props.history.push('/baidang/' + id);
    }
    render() {
        const { classes } = this.props;
        return (
            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>stdID</TableCell>
                            <TableCell>postID</TableCell>
                            <TableCell>Họ và tên</TableCell>
                            <TableCell>Ngày sinh</TableCell>
                            <TableCell>GPA</TableCell>
                            <TableCell>Trạng thái</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.jsonData.map(n => {
                            return (
                                <TableRow hover key={n.studentID}>
                                    <TableCell>{n.studentID}</TableCell>
                                    <TableCell onClick={() => this.goPost(n.postId)}>{n.postId}</TableCell>
                                    <TableCell onClick={() => this.goStuInfo(n.studentID)}>{n.hoten}</TableCell>
                                    <TableCell>{n.ngaysinh}</TableCell>
                                    <TableCell>{n.diemTB}</TableCell>
                                    <TableCell onClick={() => {this.nextStatus(n.studentID, n.postId, n.status);}}>
                                        {n.status == 1 ? "Theo dõi" :
                                            n.status == 2 ? "Đã chọn để phỏng vấn" :
                                                (n.status == 3 || n.status == 4)? "Đã trúng tuyển" :
                                                    n.status == 0 ? "Đã trượt" : "err"}
                                    </TableCell>
                                </TableRow>

                            );
                        })}
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}

PartnerFollow.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(PartnerFollow));