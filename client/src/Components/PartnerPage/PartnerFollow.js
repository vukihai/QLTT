import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import {NavLink } from "react-router-dom";
import {browserHistory,withRouter} from "react-router-dom"

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

function createData(id, name, msv, dateOfBirth, GPA, baoCaoLink) {
    return { id, name, msv, dateOfBirth, GPA, baoCaoLink };
}

class PartnerFollow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          id:localStorage.getItem('id'),
          isLoading: false,
          jsonData: [],
          data: [
          ]
        }
    }
    dumbData() {
        var dat = [];
        for(var i = 0; i<this.state.jsonData.length; i++) {
            var stu = this.state.jsonData[i];
            dat.push(createData(stu.studentId, stu.hoten, stu.username, stu.ngaysinh, stu.diemTB, 'xem'));
        }
        this.setState({
          data: dat
        })
    }
    componentDidMount() {
        fetch('http://localhost/api/partner/' + localStorage.getItem('id') + '/follow/?accessToken=' + localStorage.getItem("token"))
          .then((response) => response.json())
          .then((responseJson) => {

            this.setState({
              isLoading: false,
              jsonData: responseJson,
            }, function () {
            });
                    this.dumbData();
          })
          .catch((error) => {
            console.error(error);
          });
        
    }
    goStuInfo(id){
        this.props.history.push('/sinhvien/'+id+"/tab-0");
    }
    render() {
        const { classes } = this.props;
        return (
            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Họ và tên</TableCell>
                            <TableCell>Ngày sinh</TableCell>
                            <TableCell>GPA</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.data.map(n => {
                            return (
                                    <TableRow hover key={n.id} onClick = {() =>this.goStuInfo(n.id)}>
                                        <TableCell>{n.id}</TableCell>
                                        <TableCell>{n.name}</TableCell>
                                        <TableCell>{n.dateOfBirth}</TableCell>
                                        <TableCell>{n.GPA}</TableCell>
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