import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, CardActionArea, CardContent, Typography, Divider } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 340,
    height: 80,
  },
  header: {
    marginTop: theme.spacing(0),
    height: 50,
    padding: theme.spacing(1),
  },
  search: {
    marginTop: '120px',
  },
  contents: {
    padding: theme.spacing(0.5),
  },
  date: {
    float: 'left',
    marginLeft: theme.spacing(0.5),
    marginTop: theme.spacing(1),
  },
  settings: {
    float: 'right',
  },
  avatar: {
    float: 'left',
    width: theme.spacing(6),
    height: theme.spacing(6),
    marginLeft: theme.spacing(1),
  },
  name: {
    float: 'left',
    marginLeft: theme.spacing(1),
    padding: theme.spacing(1.5),
  },
  status: {
    float: 'right',
    marginTop: theme.spacing(1.5),
    marginRight: theme.spacing(1.5),
    color: theme.palette.text.secondary,
  },
}));

export default function MsgUserList(props) {
  const classes = useStyles();
  const [users, setUsers] = useState();

  useEffect(() => {
    setUsers(props.users);
  }, [props]);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.selectedUser(e.currentTarget.getAttribute('value'));
  };

  return users ? (
    <>
      <CardContent className={classes.header}>
        <Typography variant="h2" align="left" style={{ fontWeight: '550' }}>
          InBox Messages
        </Typography>
      </CardContent>
      <Divider />
      {users.map((user) => {
        return (
          <div onClick={handleSubmit} value={user.userProfile[0].userID}>
            <CardActionArea className={classes.root} onClick={handleSubmit}>
              <CardContent className={classes.contents}>
                <Avatar
                  aria-label="recipe"
                  className={classes.avatar}
                  alt=""
                  src={process.env.REACT_APP_S3_IMAGE_URL + user.userProfile[0].profileImg}
                />
                <Typography variant="h6" className={classes.name} gutterBottom>
                  {`${user.firstName} ${user.lastName}`}
                </Typography>
              </CardContent>
            </CardActionArea>
            <Divider />
          </div>
        );
      })}
    </>
  ) : (
    <Typography component="h1" variant="h1" align="center" className={classes.search} gutterBottom>
      Loading...
    </Typography>
  );
}
