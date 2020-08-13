import React from 'react';
import {
  Avatar,
  List,
  ListItemText,
  ListItem,
  Divider,
  ListItemIcon,
  Typography,
  Grid,
} from '@material-ui/core';
import PeopleIcon from '@material-ui/icons/People';
import WorkIcon from '@material-ui/icons/Work';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import PaymentIcon from '@material-ui/icons/Payment';
import MessageIcon from '@material-ui/icons/Message';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

const useStyles = (theme) => ({
  list: {
    width: 250,
  },
  avatar: {
    width: theme.spacing(6),
    height: theme.spacing(6),
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
});

function MobileNavbar(props) {
  const handleClickNav = () => {
    props.handleDrawer();
  };
  const handleLogOut = () => {
    props.logout();
  };
  const { classes } = props;
  return (
    <div style={{ height: '100%' }}>
      <div className={classes.list} onClick={handleClickNav}>
        <Grid container alignItems="center" direction="row">
          <Avatar
            alt="Remy Sharp"
            src={props.profileImg}
            component={Link}
            to="/profile"
            className={classes.avatar}
          />
          <Typography type="body1" style={{ fontSize: '25px' }}>
            {props.currentUserName}
          </Typography>
        </Grid>
        <Divider />
        <List>
          <ListItem button component={Link} to="/list">
            <ListItemIcon>
              {' '}
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText
              disableTypography
              primary={
                <Typography type="h1" style={{ color: 'black', fontSize: '15px' }}>
                  Sitter List
                </Typography>
              }
            />
          </ListItem>
          <ListItem button component={Link} to="/jobs">
            <ListItemIcon>
              {' '}
              <WorkIcon />
            </ListItemIcon>
            <ListItemText
              disableTypography
              primary={
                <Typography type="h1" style={{ color: 'black', fontSize: '15px' }}>
                  My Jobs
                </Typography>
              }
            />
          </ListItem>
          <ListItem button component={Link} to="/requests">
            <ListItemIcon>
              {' '}
              <SupervisedUserCircleIcon />
            </ListItemIcon>
            <ListItemText
              disableTypography
              primary={
                <Typography type="h1" style={{ color: 'black', fontSize: '15px' }}>
                  My Sitters
                </Typography>
              }
            />
          </ListItem>
          <ListItem button component={Link} to="/payment">
            <ListItemIcon>
              {' '}
              <PaymentIcon />
            </ListItemIcon>
            <ListItemText
              disableTypography
              primary={
                <Typography type="h1" style={{ color: 'black', fontSize: '15px' }}>
                  My Payment
                </Typography>
              }
            />
          </ListItem>
          <ListItem button component={Link} to="/messages">
            <ListItemIcon>
              {' '}
              <MessageIcon />
            </ListItemIcon>
            <ListItemText
              disableTypography
              primary={
                <Typography type="h1" style={{ color: 'black', fontSize: '15px' }}>
                  Messages
                </Typography>
              }
            />
          </ListItem>
        </List>
      </div>
      <div onClick={handleLogOut} style={{ width: '100%' }}>
        <List style={{ float: 'right' }}>
          <ListItem button component={Link} to="/">
            <ListItemIcon style={{ marginRight: '-32px' }}>
              {' '}
              <ExitToAppIcon style={{ color: '#DF1B1B' }} />
            </ListItemIcon>
            <ListItemText
              disableTypography
              primary={
                <Typography type="h1" style={{ color: 'black', fontSize: '15px' }}>
                  LOGOUT
                </Typography>
              }
            />
          </ListItem>
        </List>
      </div>
    </div>
  );
}
export default withStyles(useStyles)(MobileNavbar);
