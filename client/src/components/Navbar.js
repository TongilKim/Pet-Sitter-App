import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Button,
  Badge,
  Avatar,
  Grid,
  Popover,
} from '@material-ui/core';
import Login from './Login';
import SignUp from './SignUp';
import axios from 'axios';
import NotificationList from '../pages/NotificationPage/NotificationList';
import socketIOClient from 'socket.io-client';
import history from '../history';

const useStyles = (theme) => ({
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    display: 'flex',
    flexDirection: 'row',
    margin: theme.spacing(1),
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  logo: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(0, 5),
  },
  avatar: {
    width: theme.spacing(6),
    height: theme.spacing(6),
  },
});

function Navbar(props) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [profileImg, setProfileImg] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [notifications, setNotifications] = useState([]);
  const [badgeInVisible, setBadgeInVisible] = useState(true);

  const logout = (event) => {
    axios
      .post('/users/logout')
      .then((response) => {
        if (response.status === 200) {
          setLoggedIn(false);
          history.push('/');
          localStorage.clear();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleNotificationClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleNotificationClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    const token = localStorage.getItem('loginToken');
    if (token !== null) {
      axios.get(`/profile/ref/${props.userID}`).then(({ data }) => {
        setProfileImg(`${process.env.REACT_APP_S3_IMAGE_URL + data.profileImg}`);
        const currentUser = data;

        //If sitter request is available
        axios.get(`/request/getSitterRequest/${currentUser._id}`).then(({ data }) => {
          if (data.length !== 0) {
            console.log('you have owner request');
            var socket = socketIOClient.connect(process.env.REACT_APP_SOCKET_IO_SERVER);
            if (socket !== undefined) {
              socket.emit('updateRequests', data);
              socket.on('requestsFromOwner', function (requests) {
                if (requests.length > 0) {
                  for (let i = 0; i < requests.length; i++) {
                    if (!requests[i].readStatus) {
                      setBadgeInVisible(false);
                      setNotifications((notification) => [...notification, requests[i]]);
                    }
                  }
                }
              });
            }
          } else {
            axios.get(`/request/getConfirmedRequest/${currentUser.userID}`).then(({ data }) => {
              if (data.length !== 0) {
                var socket = socketIOClient.connect(process.env.REACT_APP_SOCKET_IO_SERVER);
                console.log('you have sitter confirm');
                socket.emit('updateConfirms', data);
                socket.on('confirmsFromSitter', function (requests) {
                  if (requests.length > 0) {
                    for (let i = 0; i < requests.length; i++) {
                      if (
                        (requests[i].acceptedStatus && !requests[i].readStatus) ||
                        (requests[i].declinedStatus && !requests[i].readStatus)
                      ) {
                        setBadgeInVisible(false);
                        console.log('requests in Navbar: ', requests[i]);
                        setNotifications((notification) => [...notification, requests[i]]);
                      }
                    }
                  }
                });
              }
            });
          }
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
                <img src="/images/logo.png" alt="" />
              </Link>
              <Button component={Link} to="/list" className={classes.link}>
                list
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
              <Badge
                color="secondary"
                variant="dot"
                invisible={badgeInVisible}
                className={classes.link}
              >
                <Button component={Link} to="/payment">
                  My Payment
                </Button>
              </Badge>
              <Badge
                color="secondary"
                variant="dot"
                invisible={badgeInVisible}
                className={classes.link}
              >
                <Button component={Link} to="/messages">
                  Messages
                </Button>
              </Badge>

              <Button component={Link} to="/" onClick={logout}>
                logout
              </Button>

              <Avatar
                alt="Remy Sharp"
                src={profileImg}
                component={Link}
                to="/profile"
                className={classes.avatar}
              />
            </Toolbar>
          </AppBar>
        </>
      ) : (
        <div>
          <AppBar position="static" color="default">
            <Toolbar>
              <img src="/images/logo.png" alt="" />
              <Grid container alignItems="center" justify="flex-end" direction="row" spacing={4}>
                <Link
                  href="#"
                  color="inherit"
                  underline="always"
                  style={{ marginRight: '35px', fontWeight: '700' }}
                >
                  BECOME A SITTER
                </Link>
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
