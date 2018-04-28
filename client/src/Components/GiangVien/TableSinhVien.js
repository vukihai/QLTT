import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';

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

let id = 0;
function createData(name, msv, dateOfBirth, GPA, baoCaoLink) {
    id += 1;
    return { id, name, msv, dateOfBirth, GPA, baoCaoLink };
}

const data = [
    createData('Phạm Nguyên', 10000001, '13/11/1998', 3.75, 'xem'),
    createData('Phạm Nguyên', 10000002, '13/11/1998', 3.75, 'xem'),
    createData('Phạm Nguyên', 10000003, '13/11/1998', 3.75, 'xem'),
    createData('Phạm Nguyên', 10000004, '13/11/1998', 3.75, 'xem'),
    createData('Phạm Nguyên', 10000005, '13/11/1998', 3.75, 'xem'),
    createData('Phạm Nguyên', 10000006, '13/11/1998', 3.75, 'xem'),
    createData('Phạm Nguyên', 10000007, '13/11/1998', 3.75, 'xem'),
];

class TableSinhVien extends React.Component {

    render() {
        const { classes } = this.props;

        return (
            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>STT</TableCell>
                            <TableCell>Mã sinh viên</TableCell>
                            <TableCell>Họ và tên</TableCell>
                            <TableCell>Ngày sinh</TableCell>
                            <TableCell>GPA</TableCell>
                            <TableCell>Báo cáo</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map(n => {
                            return (
                                <TableRow key={n.id}>
                                    <TableCell>{n.id}</TableCell>
                                    <TableCell>{n.msv}</TableCell>
                                    <TableCell>{n.name}</TableCell>
                                    <TableCell>{n.dateOfBirth}</TableCell>
                                    <TableCell>{n.GPA}</TableCell>
                                    <TableCell>{n.baoCaoLink}</TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}

TableSinhVien.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TableSinhVien);