import React, { useState, useEffect } from 'react';
import {
  makeStyles,
  Typography,
  Grid,
  Card,
  CardContent,
  Divider,
  Paper,
  Avatar,
  TextField,
  Button,
  Snackbar,
} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import axios from 'axios';
import moment from 'moment';
import JobComponent from './JobComponent';
import BlankComponent from './BlankComponent';
import socketIOClient from 'socket.io-client';

function Alert(props) {
  return <MuiAlert elevation={7} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  jobListContainer: {
    flexWrap: 'wrap',
    [theme.breakpoints.down('xs')]: {
      width: '250',
    },
  },
  search: {
    marginTop: '120px',
  },
  jobDetailContainer: {
    marginTop: '120px',
  },
  list: {
    width: 400,
    height: 600,
    overflow: 'auto',
  },
  contents: {
    padding: theme.spacing(1),
  },
  titleTop: {
    marginTop: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(2),
    },
  },
  title: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(1),
  },
  jobDetail: {
    flexWrap: 'wrap',
    width: 700,
    height: 600,
    marginLeft: theme.spacing(5),
    padding: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      width: 500,
      height: 700,
      marginLeft: theme.spacing(0),
    },
    [theme.breakpoints.down('xs')]: {
      width: 300,
      marginLeft: theme.spacing(0),
    },
  },
  avatar: {
    width: theme.spacing(13),
    height: theme.spacing(13),
    marginLeft: theme.spacing(1),
  },
  name: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(3),
  },
  buttons: {
    marginTop: theme.spacing(2),
    '& > *': {
      width: 140,
      height: 50,
      margin: theme.spacing(3),
    },
  },
  notice: {
    marginLeft: theme.spacing(1),
    color: theme.palette.text.secondary,
  },
}));

function ManageJobPage(props) {
  const classes = useStyles();
  const [profileID, setProfileID] = useState();
  const [bookings, setBookings] = useState([]);
  const [jobKey, setJobKey] = useState(null);
  const [jobAccepted, setAccept] = useState(false);
  const [jobDeclined, setDecline] = useState(false);

  useEffect(() => {
    axios
      .get(`/profile/ref/${props.userID}`)
      .then(({ data }) => {
        setProfileID(data.userID);
      })
      .then(
        axios.get(`/job/${profileID}`).then(({ data }) => {
          setBookings(data);
        })
      );
  }, [props.userID, profileID]);

  const handleRequests = () => {
    const today = moment().format('YYMMDDhhmm');
    let current = [];
    let past = [];
    current.push(
      <Typography variant="h6" align="left" className={classes.titleTop}>
        CURRENT JOBS:
      </Typography>
    );
    past.push(
      <>
        <Divider style={{ marginTop: '24px' }} />
        <Typography variant="h6" align="left" className={classes.title}>
          PAST JOBS:
        </Typography>
      </>
    );

    bookings.forEach((booking, i) => {
      if (moment(booking.start).format('YYMMDDhhmm') > today) {
        current.push(<JobComponent booking={booking} jobKey={i} onSubmit={selectJob} />);
      } else {
        past.push(<JobComponent booking={booking} jobKey={i} onSubmit={selectJob} />);
      }
    });

    if (current.length === 1) current.push(<BlankComponent />);
    if (past.length === 1) past.push(<BlankComponent />);

    return current.concat(past);
  };

  const selectJob = (key) => {
    setJobKey(key);
  };

  const confirmAccept = (e) => {
    e.preventDefault();
    const request = {
      accepted: true,
      declined: false,
    };
    putConfirmation(request);
  };

  const confirmDecline = (e) => {
    e.preventDefault();
    const request = {
      accepted: false,
      declined: true,
    };
    putConfirmation(request);
  };

  const putConfirmation = (request) => {
    axios
      .put(`/job/${bookings[jobKey]._id}`, request)
      .then((res) => {
        if (!res.data.error) {
          var socket = socketIOClient(process.env.REACT_APP_SOCKET_IO_SERVER);

          if (res.data.accepted) {
            socket.emit('addConfirmNotify', res);
            setAccept(true);
            bookings[jobKey].accepted = true;
          } else {
            socket.emit('addConfirmNotify', res);
            setDecline(true);
            bookings[jobKey].declined = true;
          }
        }
      })
      .catch((error) => {
        console.log('error: ', error);
      });
  };

  const handleMessageClose = (event, reason) => {
    if (reason === 'clickaway') {
      setAccept(false);
      setDecline(false);
      return;
    }
  };

  const showDetail = () => {
    if (jobKey !== null) {
      const profileImg =
        process.env.REACT_APP_S3_IMAGE_URL + bookings[jobKey].ownerProfile[0].profileImg;
      return (
        <>
          <Grid container style={{ marginTop: '3%' }}>
            <Avatar aria-label="recipe" className={classes.avatar} alt="" src={profileImg} />
            <Typography variant="h1" align="left" className={classes.name}>
              {bookings[jobKey].ownerProfile[0].firstName}{' '}
              {bookings[jobKey].ownerProfile[0].lastName}
            </Typography>
          </Grid>
          <Typography
            variant="h6"
            align="left"
            className={classes.titleTop}
            style={{ marginTop: '4%' }}
          >
            SITTNG SCHEDULE:
          </Typography>
          <Grid container>
            <Typography
              variant="h5"
              className={classes.titleTop}
              align="left"
              style={{ backgroundColor: '#FFFACD' }}
            >
              <b> {moment(bookings[jobKey].start).format('D MMM YYYY, hh:mmA')}</b> ~{' '}
              <b>{moment(bookings[jobKey].end).format('D MMM YYYY, hh:mmA')}</b>
            </Typography>
          </Grid>
          <Typography
            variant="h6"
            align="left"
            className={classes.titleTop}
            style={{ marginTop: '4%' }}
          >
            SITTNG COST:
          </Typography>
          <Grid container>
            <Typography variant="h5" className={classes.titleTop}>
              <b>${bookings[jobKey].cost}</b>
            </Typography>
          </Grid>
          <Typography
            variant="h6"
            align="left"
            className={classes.titleTop}
            style={{ marginTop: '4%' }}
          >
            REQUEST FROM OWNER:
          </Typography>
          <Grid container>
            <TextField
              disabled
              id="request"
              style={{ margin: 0, width: '665px', marginLeft: '1%' }}
              placeholder="None"
              fullWidth
              margin="normal"
              variant="outlined"
            />
          </Grid>
          <div className={classes.buttons}>
            {bookings[jobKey].accepted ? (
              <Button disabled variant="outlined" size="large" color="secondary">
                Request Accepted
              </Button>
            ) : bookings[jobKey].declined ? (
              <Button disabled variant="outlined" size="large" color="primary">
                Request Declined
              </Button>
            ) : (
              <>
                <Button variant="outlined" size="large" color="secondary" onClick={confirmAccept}>
                  Accept
                </Button>
                <Button variant="outlined" size="large" color="primary" onClick={confirmDecline}>
                  Decline
                </Button>
              </>
            )}
          </div>
          <Typography
            variant="h6"
            align="left"
            className={classes.notice}
            style={{ marginTop: '2%' }}
          >
            * Accept / Decline will not be reverted.
          </Typography>
        </>
      );
    } else
      return (
        <Typography variant="h6" align="left" className={classes.titleTop}>
          SELECT YOUR JOB TO REVIEW
        </Typography>
      );
  };

  return bookings ? (
    <>
      <Grid container spacing={0} align="center" justify="center">
        <Grid
          item
          xs={12}
          lg={6}
          xl={4}
          className={classes.jobListContainer}
          style={{ marginTop: '120px' }}
        >
          <Card className={classes.list}>
            <CardContent className={classes.contents}>{handleRequests()}</CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} lg={6} xl={4} className={classes.jobDetailContainer}>
          <Grid container spacing={0} align="center" justify="center">
            <Paper className={classes.jobDetail}>{showDetail()}</Paper>
          </Grid>
        </Grid>
      </Grid>

      <Snackbar open={jobAccepted} autoHideDuration={1500} onClose={handleMessageClose}>
        <Alert onClose={handleMessageClose} severity="success">
          Request accepted successfully!
        </Alert>
      </Snackbar>
      <Snackbar open={jobDeclined} autoHideDuration={2000} onClose={handleMessageClose}>
        <Alert onClose={handleMessageClose} severity="warning">
          Request declined.. :(
        </Alert>
      </Snackbar>
    </>
  ) : (
    <Typography component="h1" variant="h1" align="center" className={classes.search} gutterBottom>
      Loading...
    </Typography>
  );
}

export default ManageJobPage;
