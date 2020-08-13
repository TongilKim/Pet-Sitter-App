import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Button,
  Badge,
  Avatar,
  Grid,
  Popover,
  IconButton,
  Drawer,
} from '@material-ui/core';
import Login from './Login';
import SignUp from './SignUp';
import axios from 'axios';
import NotificationList from '../pages/NotificationPage/NotificationList';
import MobileNavbar from './MobileNavbar';
import socketIOClient from 'socket.io-client';
import history from '../history';

const useStyles = (theme) => ({
  appBar: {
    top: 0,
    height: theme.spacing(9),
    borderBottom: `1px solid ${theme.palette.divider}`,
    position: 'fixed',
    background: 'white',
    [theme.breakpoints.down('md')]: {
      height: theme.spacing(9),
    },
  },
  toolbar: {
    display: 'flex',
    flexDirection: 'row',
    margin: theme.spacing(0.5),
  },
  logo: {
    flexGrow: 1,
    [theme.breakpoints.down('xs')]: {
      width: '35%',
    },
  },
  logedInLogo: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(0, 4.5),
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  logoutBtn: {
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  menuButton: {
    display: 'none',
    [theme.breakpoints.down('md')]: {
      display: 'block',
    },
  },
  avatar: {
    width: theme.spacing(6),
    height: theme.spacing(6),
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
});

function Navbar(props) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [profileImg, setProfileImg] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [notifications, setNotifications] = useState([]);
  const [badgeInVisible, setBadgeInVisible] = useState(true);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [currentUserName, setCurrentUserName] = useState('');
  var socket = socketIOClient.connect(process.env.REACT_APP_SOCKET_IO_SERVER);
  const logout = (event) => {
    axios
      .post('/users/logout')
      .then((response) => {
        if (response.status === 200) {
          setLoggedIn(false);
          history.push('/');
          socket.disconnect();
          sessionStorage.clear();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  const handleNotificationClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleNotificationClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    const token = sessionStorage.getItem('loginToken');

    if (token !== null) {
      axios.get(`/profile/ref/${props.userID}`).then(({ data }) => {
        setProfileImg(`${process.env.REACT_APP_S3_IMAGE_URL + data.profileImg}`);
        const currentUser = data;
        setCurrentUserName(currentUser.firstName);
        // Noti for sitter request
        axios.get(`/request/getSitterRequest/${currentUser.userID}`).then(({ data }) => {
          socket.emit('newUser', currentUser.userID);
          socket.emit('updateRequests', data);
          socket.on('requestsFromOwner', function (requests) {
            if (requests.length > 0) {
              for (let i = 0; i < requests.length; i++) {
                if (!requests[i].readStatus) {
                  setBadgeInVisible(false);
                  Object.assign(requests[i], {
                    notifyMsg: 'has requested your service',
                    userRole: 'Dog Owner',
                  });
                  setNotifications((notification) => [...notification, requests[i]]);
                }
              }
            }
          });
        });
        axios.get(`/request/getConfirmedRequest/${currentUser.userID}`).then(({ data }) => {
          // Noti for accepted/denied request
          socket.emit('newUser', currentUser.userID);
          socket.emit('updateConfirms', data);
          socket.on('confirmsFromSitter', function (requests) {
            if (requests.length > 0) {
              for (let i = 0; i < requests.length; i++) {
                if (requests[i].acceptedStatus && !requests[i].readStatus) {
                  setBadgeInVisible(false);
                  Object.assign(requests[i], {
                    notifyMsg: 'has accepted your request',
                    userRole: 'Dog sitter',
                  });
                  setNotifications((notification) => [...notification, requests[i]]);
                }
                if (requests[i].declinedStatus && !requests[i].readStatus) {
                  setBadgeInVisible(false);
                  Object.assign(requests[i], {
                    notifyMsg: 'has declined your request',
                    userRole: 'Dog sitter',
                  });
                  setNotifications((notification) => [...notification, requests[i]]);
                }
              }
            }
          });
        });

        setLoggedIn(true);
      });
    }
  }, [props]);

  const { classes } = props;
  const openNotification = Boolean(anchorEl);
  const popOverId = openNotification ? 'simple-popover' : undefined;
  return (
    <div>
      {loggedIn ? (
        <>
          <CssBaseline />
          <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
            <Toolbar className={classes.toolbar}>
              <Link to="/list">
                <img
                  src="/images/logo.png"
                  alt=""
                  className={setLoggedIn ? classes.logedInLogo : classes.logo}
                />
              </Link>
              <Grid container alignItems="center" justify="flex-end" direction="row">
                <Button component={Link} to="/list" className={classes.link}>
                  sitter list
                </Button>
                <Badge
                  color="secondary"
                  variant="dot"
                  invisible={badgeInVisible}
                  className={classes.link}
                >
                  <Button onClick={handleNotificationClick}>Notifications</Button>
                  <Popover
                    id={popOverId}
                    open={openNotification}
                    anchorEl={anchorEl}
                    onClose={handleNotificationClose}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'center',
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'center',
                    }}
                  >
                    <NotificationList notifications={notifications} />
                  </Popover>
                </Badge>
                <Button component={Link} to="/jobs" className={classes.link}>
                  My Jobs
                </Button>
                <Button component={Link} to="/requests" className={classes.link}>
                  My Sitters
                </Button>
                <Button component={Link} to="/payment" className={classes.link}>
                  My Payment
                </Button>
                <Button component={Link} to="/messages" className={classes.link}>
                  Messages
                </Button>
                <Avatar
                  alt="Remy Sharp"
                  src={profileImg}
                  component={Link}
                  to="/profile"
                  className={classes.avatar}
                />
                <Button
                  variant="outlined"
                  color="primary"
                  component={Link}
                  to="/"
                  onClick={logout}
                  className={classes.logoutBtn}
                  style={{ marginLeft: '3%' }}
                >
                  logout
                </Button>
                <IconButton
                  edge="start"
                  className={classes.menuButton}
                  color="primary"
                  aria-label="menu"
                  onClick={handleDrawer}
                >
                  <MenuIcon />
                </IconButton>
                <Drawer anchor="right" open={openDrawer} onClose={handleDrawer}>
                  <MobileNavbar
                    profileImg={profileImg}
                    currentUserName={currentUserName}
                    handleDrawer={handleDrawer}
                    logout={logout}
                  />
                </Drawer>
              </Grid>
            </Toolbar>
          </AppBar>
        </>
      ) : (
        <div>
          <CssBaseline />
          <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
            <Toolbar className={classes.toolbar}>
              <img src="/images/logo.png" alt="" className={classes.logo} />
              <Grid container alignItems="center" justify="flex-end" direction="row" spacing={4}>
                <Login />
                <SignUp />
              </Grid>
            </Toolbar>
          </AppBar>
        </div>
      )}
    </div>
  );
}

export default withStyles(useStyles)(Navbar);
