import React, { useState, useEffect, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';
import axios from 'axios';
import history from '../../history';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '55ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    marginTop: '10px',
  },
  link: {
    textDecoration: 'none',
    color: 'black',
  },
}));

export default function NotificationList(props) {
  const classes = useStyles();
  const [notifications, setNotifications] = useState([]);

  const handleRequestClick = (event) => {
    const currentRequestID = event.currentTarget.getAttribute('value');
    axios.get(`/request/ref/${currentRequestID}`).then((response) => {
      if (response.data.accepted || response.data.declined) {
        axios.put(`/request/readSitterConfirm/${currentRequestID}`).then((response) => {
          if (!response.data.error) {
            history.push('/requests');
            window.location.reload();
          }
        });
      } else {
        axios.put(`/request/readOwnerRequest/${currentRequestID}`).then((response) => {
          if (!response.data.error) {
            history.push('/jobs');
            window.location.reload();
          }
        });
      }
    });
  };

  useEffect(() => {
    setNotifications(props.notifications);
  }, [props]);
  return (
    <>
      {notifications.length > 0 ? (
        <>
          <List className={classes.root}>
            {notifications.map((notification) => {
              return (
                <>
                  <ListItem
                    key={notification.requestID}
                    onClick={handleRequestClick}
                    value={notification.requestID}
                    alignItems="flex-start"
                  >
                    <ListItemAvatar>
                      <Avatar
                        alt="Remy Sharp"
                        src={process.env.REACT_APP_S3_IMAGE_URL + notification.profileImg}
                      />
                    </ListItemAvatar>

                    <ListItemText
                      primary={`${notification.firstName} ${notification.notifyMsg}`}
                      secondary={
                        <Fragment>
                          <Typography variant="body2">{notification.userRole}</Typography>
                          <Typography
                            variant="body1"
                            className={classes.inline}
                            color="textPrimary"
                          >
                            {moment(notification.requestedDate).format('YYYY-MM-DD HH:mm')}
                          </Typography>
                        </Fragment>
                      }
                    />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                </>
              );
            })}
          </List>
        </>
      ) : (
        <div></div>
      )}
    </>
  );
}
