import React, { useState } from 'react';
import { makeStyles, Typography, Grid, TextField, Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import moment from 'moment';

const useStyles = makeStyles((theme) => ({
  leftSideContainer: {
    marginTop: '150px',
    [theme.breakpoints.down('md')]: {
      marginTop: '100px',
    },
  },
  leftSide: {
    marginLeft: '110px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '60px',
    },
  },
  dropInContainer: {},
  dropOffContainer: {
    marginLeft: '5%',
    [theme.breakpoints.down('xs')]: {
      marginTop: '20px',
      marginLeft: '0',
    },
  },
  icon: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
  title: {
    fontSize: 60,
    fontWeight: 800,
    [theme.breakpoints.down('sm')]: {
      fontSize: 45,
      textAlign: 'center',
      marginLeft: '-50px',
    },
  },
  text: {
    fontSize: 20,
    fontWeight: 800,
  },
  input: {
    width: theme.spacing(22),
    marginLeft: theme.spacing(1),
  },
  button: {
    width: theme.spacing(28),
    height: theme.spacing(7),
    marginTop: theme.spacing(4),
  },
  img: {
    height: '100%',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
}));

export default function LandingPage() {
  const classes = useStyles();
  const defaultTime = moment('1200', 'HH:mm').add(1, 'day');
  const [location, setLocation] = useState('');
  const [start, setStart] = useState(defaultTime.format('YYYY-MM-DDTHH:mm'));
  const [end, setEnd] = useState(defaultTime.add(1, 'day').format('YYYY-MM-DDTHH:mm'));
  return (
    <>
      <Grid container>
        {/* half left side*/}
        <Grid item xs={12} lg={6} className={classes.leftSideContainer}>
          <div className={classes.leftSide}>
            <Typography variant="h1" className={classes.title}>
              Find the care
              <br />
              your dog deservers
            </Typography>

            <Grid style={{ marginTop: '70px' }}>
              <Typography variant="subtitle1" gutterBottom className={classes.text}>
                WHERE
              </Typography>
              <SearchIcon className={classes.icon} />
              <TextField
                className={classes.input}
                id="standard-basic"
                placeholder="location"
                onChange={(e) => setLocation(e.target.value)}
              />
            </Grid>

            <Grid style={{ marginTop: '60px' }}>
              <Grid container>
                <Grid className={classes.dropInContainer}>
                  <Typography variant="subtitle1" gutterBottom className={classes.text}>
                    DROP IN
                  </Typography>
                  <TextField
                    id="datetime-local"
                    type="datetime-local"
                    defaultValue={start}
                    className={classes.datePicker}
                    onChange={(e) => setStart(e.target.value)}
                  />
                </Grid>
                <Grid className={classes.dropOffContainer}>
                  <Typography variant="subtitle1" gutterBottom className={classes.text}>
                    DROP OFF
                  </Typography>
                  <TextField
                    id="datetime-local"
                    type="datetime-local"
                    defaultValue={end}
                    className={classes.datePicker}
                    onChange={(e) => setEnd(e.target.value)}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Button variant="contained" size="large" color="primary" className={classes.button}>
              FIND MY DOG SITTER
            </Button>
          </div>
        </Grid>

        <Grid item xs={6} className={classes.img}>
          <img
            alt="LovingSitters"
            src="/images/landing.jpg"
            style={{ width: '100%', height: '100%', filter: 'brightness(90%)', float: 'right' }}
          ></img>
        </Grid>
      </Grid>
    </>
  );
}
