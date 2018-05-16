import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import { ListItemSecondaryAction } from 'material-ui';
import { Button } from 'material-ui';
import NhanTinUI from '../TinNhan/NhanTinUI';

const styles = theme => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
});

class TinNhanPage extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div>
                <h1> Hộp thư </h1>
                <div className={classes.root}>
                    <List>
                        <ListItem button>
                            <Avatar>
                                A
                            </Avatar>
                            <ListItemText
                                primary="Admin"
                                secondary="Thông báo nộp tiền học phí thực tập :v "
                            />
                            <ListItemSecondaryAction>
                                <Button>21:51 20/04/2018</Button>
                            </ListItemSecondaryAction>
                        </ListItem>
                        <ListItem button>
                            <Avatar>
                                T
                            </Avatar>
                            <ListItemText
                                primary="Lê Đình Thanh"
                                secondary="Thông báo phạt vì đi học muộn :v"
                            />
                            <ListItemSecondaryAction>
                                <Button>22:00 Hôm qua</Button>
                            </ListItemSecondaryAction>
                        </ListItem>
                        <ListItem button>
                            <Avatar>
                                D
                        </Avatar>
                            <ListItemText
                                primary="Phạm Ngọc Duy"
                                secondary="Điểm danh chưa ông ơi?"
                            />
                            <ListItemSecondaryAction>
                                <Button>Vừa xong</Button>
                            </ListItemSecondaryAction>
                        </ListItem>
                    </List>
                </div>
                <h1> Thảo luận </h1>
                <div style={{marginTop: 50+ 'px'}}>
                    <NhanTinUI />
                </div>
            </div>
        );
    }
}

TinNhanPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TinNhanPage);
