import React, { useState, useEffect } from 'react';
import { makeStyles, Typography, Grid, Card, CardContent, Divider } from '@material-ui/core';
import axios from 'axios';
import moment from 'moment';
import Calendar from './Calendar';
import RequestComponent from './RequestComponent';
import BlankComponent from './BlankComponent';

const useStyles = makeStyles((theme) => ({
  root: {
    flexWrap: 'wrap',
    width: theme.spacing(50),
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
    marginLeft: theme.spacing(1),
  },
  title: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(1),
  },
  search: {
    marginTop: '120px',
  },
  calendar: {
    flexWrap: 'wrap',
    width: 380,
    height: 400,
    marginLeft: theme.spacing(5),
    [theme.breakpoints.down('xs')]: {
      marginLeft: theme.spacing(0),
      height: 500,
    },
  },
}));

function ManageRequestPage(props) {
  const classes = useStyles();
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios.get(`/request/${props.userID}`).then(({ data }) => {
      setBookings(data);
    });
  }, [props.userID]);

  const handleRequests = () => {
    const today = moment().format('YYMMDDhhmm');
    let current = [];
    let past = [];
    current.push(
      <Typography variant="h6" align="left" className={classes.titleTop}>
        CURRENT BOOKINGS:
      </Typography>
    );
    past.push(
      <>
        <Divider style={{ marginTop: '24px' }} />
        <Typography variant="h6" align="left" className={classes.title}>
          PAST BOOKINGS:
        </Typography>
      </>
    );

    bookings.forEach((booking) => {
      if (moment(booking.start).format('YYMMDDhhmm') > today) {
        current.push(<RequestComponent booking={booking} closed={false} />);
      } else {
        past.push(<RequestComponent booking={booking} closed={true} />);
      }
    });

    if (current.length === 1) current.push(<BlankComponent />);
    if (past.length === 1) past.push(<BlankComponent />);

    return current.concat(past);
  };

  return bookings ? (
    <Grid container spacing={0} align="center" justify="center">
      <Grid maxwidth="md" className={classes.root} style={{ marginTop: '120px' }}>
        <Card className={classes.list}>
          <CardContent className={classes.contents}>{handleRequests()}</CardContent>
        </Card>
      </Grid>
      <Card className={classes.calendar} style={{ marginTop: '120px' }}>
        <Calendar />
      </Card>
    </Grid>
  ) : (
    <Typography component="h1" variant="h1" align="center" className={classes.search} gutterBottom>
      Loading...
    </Typography>
  );
}

export default ManageRequestPage;
