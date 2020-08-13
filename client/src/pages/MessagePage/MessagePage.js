import React, { useState, useEffect } from 'react';
import { makeStyles, Typography, Grid, Paper } from '@material-ui/core';
import axios from 'axios';
import MsgUserList from './MsgUserList';
import Messages from './Messages';

const useStyles = makeStyles((theme) => ({
  list: {
    height: 800,
    overflow: 'auto',
    marginTop: '120px',
    [theme.breakpoints.down('xs')]: {
      height: 450,
    },
  },
  search: {
    marginTop: '120px',
  },
  header: {
    padding: theme.spacing(3.5),
    height: 80,
  },
  titleTop: {
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(1),
  },
  messageRoot: {
    width: 900,
    height: 600,
    marginLeft: theme.spacing(1),
    marginTop: '120px',
    [theme.breakpoints.down('xs')]: {
      width: 450,
      marginLeft: theme.spacing(0),
    },
    [theme.breakpoints.down('md')]: {
      width: 700,
    },
  },
  messageGrid: {
    height: '80%',
    overflow: 'auto',
  },
  avatar: {
    width: theme.spacing(8),
    height: theme.spacing(8),
    marginLeft: theme.spacing(2),
    marginTop: theme.spacing(1),
  },
  name: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(3),
  },
  send: {
    maxWidth: 300,
    marginLeft: theme.spacing(73),
  },
  receive: {
    maxWidth: 300,
    color: theme.palette.primary,
    margin: theme.spacing(1),
  },
  receiveBox: {
    backgroundColor: '#FFB6C1',
  },
  messageTxt: {
    variant: 'body',
    component: 'p',
  },
}));

function MessagePage(props) {
  const classes = useStyles();
  const [users, setUsers] = useState([]);
  const [selectedUserID, setSelectedUser] = useState(null);

  useEffect(() => {
    axios.get(`/users/all/${props.userID}`).then(({ data }) => {
      setUsers(data);
    });
  }, [props.userID]);

  const selectedUser = (userID) => {
    setSelectedUser(userID);
  };

  return users ? (
    <>
      <Grid container spacing={0} align="center" justify="center">
        <Paper elevation={3} square className={classes.list}>
          <MsgUserList users={users} selectedUser={selectedUser} />
        </Paper>
        <Paper elevation={0} square className={classes.messageRoot}>
          <Messages currentUserID={props.userID} selectedUserID={selectedUserID} />
        </Paper>
      </Grid>
    </>
  ) : (
    <Typography component="h1" variant="h1" align="center" className={classes.search} gutterBottom>
      Loading...
    </Typography>
  );
}

export default MessagePage;
