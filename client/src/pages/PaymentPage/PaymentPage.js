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
  Button,
  Snackbar,
  Dialog,
  Backdrop,
  Fade,
} from '@material-ui/core';
import { Alert as MuiAlert, Rating } from '@material-ui/lab';
import axios from 'axios';
import moment from 'moment';
import PayComponent from './PayComponent';
import BlankComponent from './BlankComponent';
import PaymentComponent from './PaymentComponent';

function Alert(props) {
  return <MuiAlert elevation={7} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexWrap: 'wrap',
    width: theme.spacing(50),
  },
  search: {
    marginTop: '120px',
  },
  list: {
    width: 400,
    height: 600,
    overflow: 'auto',
    marginTop: '120px',
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
  requestDetail: {
    flexWrap: 'wrap',
    width: 700,
    height: 600,
    marginTop: '120px',
    marginLeft: theme.spacing(5),
    padding: theme.spacing(1),
    [theme.breakpoints.down('xs')]: {
      width: 400,
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
  dialog: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paymentForm: {
    flexWrap: 'wrap',
    width: 450,
    height: 280,
  },
}));

function PaymentPage(props) {
  const classes = useStyles();
  const [payments, setPayments] = useState([]);
  const [payKey, setPayKey] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [payAccepted, setAccept] = useState(false);
  const [payDeclined, setDecline] = useState(false);
  const [value, setValue] = React.useState(2.5);
  const [hover, setHover] = React.useState(-1);

  useEffect(() => {
    axios.get(`/request/accepted/${props.userID}`).then(({ data }) => {
      setPayments(data);
    });
  }, [props.userID]);

  const handleRequests = () => {
    let current = [];
    let past = [];
    current.push(
      <Typography variant="h6" align="left" className={classes.titleTop}>
        UNPAID REQUESTS:
      </Typography>
    );
    past.push(
      <>
        <Divider style={{ marginTop: '24px' }} />
        <Typography variant="h6" align="left" className={classes.title}>
          PAID REQUESTS:
        </Typography>
      </>
    );

    payments.forEach((booking, i) => {
      if (booking.paid === false) {
        current.push(<PayComponent booking={booking} payKey={i} onSubmit={selectJob} />);
      } else {
        past.push(<PayComponent booking={booking} payKey={i} onSubmit={selectJob} />);
      }
    });

    if (current.length === 1) current.push(<BlankComponent isPaid={false} />);
    if (past.length === 1) past.push(<BlankComponent isPaid={true} />);

    return current.concat(past);
  };

  const selectJob = (key) => {
    setPayKey(key);
  };

  const handlePayment = (isSuccess) => {
    if (isSuccess) {
      payments[payKey].paid = true;
      setAccept(true);
    } else {
      setDecline(true);
    }
    handleModalClose();
  };

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleMessageClose = (event, reason) => {
    if (reason === 'clickaway') {
      setAccept(false);
      setDecline(false);
      return;
    }
  };

  const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
  };

  const showDetail = () => {
    if (payKey !== null) {
      const profileImg =
        process.env.REACT_APP_S3_IMAGE_URL + payments[payKey].sitterProfile[0].profileImg;
      return (
        <>
          <Typography variant="h6" align="left" className={classes.titleTop}>
            REQUEST DETAIL:
          </Typography>
          <Grid container style={{ marginTop: '3%' }}>
            <Avatar aria-label="recipe" className={classes.avatar} alt="" src={profileImg} />
            <Typography variant="h1" align="left" className={classes.name}>
              {payments[payKey].sitterProfile[0].firstName}{' '}
              {payments[payKey].sitterProfile[0].lastName}
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
            <Typography variant="h5" className={classes.titleTop}>
              {moment(payments[payKey].start).format('D MMM YYYY, hh:mmA')} -{' '}
              {moment(payments[payKey].end).format('D MMM YYYY, hh:mmA')}
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
              ${payments[payKey].cost}
            </Typography>
          </Grid>
          <Typography
            variant="h6"
            align="left"
            className={classes.titleTop}
            style={{ marginTop: '4%' }}
          >
            RATE THIS SITTER:
          </Typography>
          <Grid container>
            <Rating
              name="hover-feedback"
              size="large"
              value={value}
              precision={0.5}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              onChangeActive={(event, newHover) => {
                setHover(newHover);
              }}
              disabled={payments[payKey].paid === true ? true : false}
              style={{ marginLeft: '1%' }}
            />
            {value !== null && (
              <Typography variant="h6" style={{ marginLeft: '1.5%' }}>
                {labels[hover !== -1 ? hover : value]}
              </Typography>
            )}
          </Grid>

          <div className={classes.buttons}>
            {payments[payKey].paid ? (
              <Button disabled variant="outlined" size="large">
                Request Paid
              </Button>
            ) : (
              <Button variant="outlined" size="large" color="secondary" onClick={handleModalOpen}>
                Proceed Payment
              </Button>
            )}
          </div>

          <Dialog
            className={classes.dialog}
            open={modalOpen}
            onClose={handleModalClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <div style={{ outline: 0 }}>
              <Fade in={modalOpen}>
                <Card className={classes.paymentForm} elevation={5} align="center">
                  <Grid>
                    <Typography
                      variant="h2"
                      align="center"
                      gutterBottom
                      style={{ marginTop: '25px', fontWeight: '800' }}
                    >
                      PAYMENT DETAIL
                    </Typography>
                  </Grid>
                  <Grid style={{ margin: '5%' }}>
                    <PaymentComponent requestInfo={payments[payKey]} onSubmit={handlePayment} />
                  </Grid>
                </Card>
              </Fade>
            </div>
          </Dialog>
        </>
      );
    } else
      return (
        <Typography variant="h6" align="left" className={classes.titleTop}>
          SELECT YOUR REQUEST TO PAY
        </Typography>
      );
  };

  return payments ? (
    <>
      <Grid container spacing={0} align="center" justify="center" style={{ marginTop: '1%' }}>
        <Grid maxwidth="md" className={classes.root}>
          <Card className={classes.list}>
            <CardContent className={classes.contents}>{handleRequests()}</CardContent>
          </Card>
        </Grid>
        <div>
          <Grid container spacing={0} align="center" justify="center">
            <Paper className={classes.requestDetail}>{showDetail()}</Paper>
          </Grid>
        </div>
      </Grid>
      <Snackbar open={payAccepted} autoHideDuration={1500} onClose={handleMessageClose}>
        <Alert onClose={handleMessageClose} severity="success">
          Thank you for your using our service!
        </Alert>
      </Snackbar>
      <Snackbar open={payDeclined} autoHideDuration={2000} onClose={handleMessageClose}>
        <Alert onClose={handleMessageClose} severity="error">
          Something went wrong.. :(
        </Alert>
      </Snackbar>
    </>
  ) : (
    <Typography component="h1" variant="h1" align="center" className={classes.search} gutterBottom>
      Loading...
    </Typography>
  );
}

export default PaymentPage;
