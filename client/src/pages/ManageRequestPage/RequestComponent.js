import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SettingsIcon from '@material-ui/icons/Settings';
import MuiAlert from '@material-ui/lab/Alert';
import moment from 'moment';
import {
  Avatar,
  Card,
  CardContent,
  Grid,
  TextField,
  Button,
  Snackbar,
  IconButton,
  Typography,
  Modal,
  Backdrop,
  Fade,
} from '@material-ui/core';
import axios from 'axios';

function Alert(props) {
  return <MuiAlert elevation={7} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: 360,
    height: 125,
    marginTop: theme.spacing(1),
  },
  header: {
    height: 50,
    padding: theme.spacing(1),
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
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  requestForm: {
    flexWrap: 'wrap',
    width: 345,
    height: 400,
  },
  datePicker: {
    marginRight: theme.spacing(1),
    width: 200,
    float: 'left',
  },
}));

export default function RequestComponent(props) {
  const classes = useStyles();
  const [accepted, setAccepted] = useState();
  const [declined, setDeclined] = useState();
  const [start, setStart] = useState();
  const [end, setEnd] = useState();
  const [modifiedStart, setModStart] = useState();
  const [modifiedEnd, setModEnd] = useState();
  const [modalOpen, setModalOpen] = useState(false);
  const [reqSuccess, setSuccess] = useState(false);
  const [reqError, setError] = useState(false);
  const [profileImg, setProfileImg] = useState(null);
  const cost = 14;

  useEffect(() => {
    setAccepted(props.booking.accepted);
    setDeclined(props.booking.declined);
    setStart(moment(props.booking.start).format('YYYY-MM-DDTHH:mm'));
    setEnd(moment(props.booking.end).format('YYYY-MM-DDTHH:mm'));
    setModStart(moment(props.booking.start).format('YYYY-MM-DDTHH:mm'));
    setModEnd(moment(props.booking.end).format('YYYY-MM-DDTHH:mm'));
    setProfileImg(process.env.REACT_APP_S3_IMAGE_URL + props.booking.sitterProfile[0].profileImg);
  }, [props]);

  const fullName =
    props.booking.sitterProfile[0].firstName + ' ' + props.booking.sitterProfile[0].lastName;
  const handleStatus = () => {
    if (accepted) return 'ACCEPTED';
    else if (declined) return 'DECLINED';
    else return 'PENDING';
  };

  const handleDate = () => {
    const _start = moment(start);
    const _end = moment(end);
    const endString = () => {
      if (_start.year() === _end.year()) {
        if (_start.month() === _end.month()) {
          if (_start.day() === _end.day()) return _end.format('hA');
          else return _end.format('D MMM, hA');
        } else return _end.format('D MMM, hA');
      } else return _end.format('D MMM YYYY, hA');
    };
    return _start.format('D MMM YYYY, hA-') + endString();
  };

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleMessageClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSuccess(false);
    setError(false);
  };

  const confirmChange = async () => {
    if (modifiedStart >= modifiedEnd) {
      setError(true);
      return;
    }
    const rawCost =
      moment.duration(moment(modifiedEnd).diff(moment(modifiedStart))).asHours() * cost;

    const request = {
      start: modifiedStart,
      end: modifiedEnd,
      cost: rawCost.toFixed(2),
    };

    await axios
      .put(`/request/${props.booking._id}`, request)
      .then((response) => {
        if (!response.data.error) {
          handleModalClose();
          setSuccess(true);
          setStart(modifiedStart);
          setEnd(modifiedEnd);
        }
      })
      .catch((error) => {
        console.log('error: ', error);
      });
  };

  return (
    <>
      <Card className={classes.root} variant="outlined">
        <CardContent className={classes.header}>
          <Typography variant="body" className={classes.date}>
            {handleDate()}
          </Typography>
          {!props.closed && (
            <IconButton
              aria-label="settings"
              className={classes.settings}
              onClick={handleModalOpen}
            >
              <SettingsIcon />
            </IconButton>
          )}
        </CardContent>
        <CardContent className={classes.contents}>
          <Avatar aria-label="recipe" className={classes.avatar} alt="T" src={profileImg} />
          <Typography variant="h6" className={classes.name} gutterBottom>
            {fullName}
          </Typography>
          <Typography variant="h6" className={classes.status} gutterBottom>
            {handleStatus()}
          </Typography>
        </CardContent>
      </Card>
      <Modal
        className={classes.modal}
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
            <Card className={classes.requestForm} elevation={5} align="center">
              <Grid>
                <Typography
                  variant="h2"
                  align="center"
                  gutterBottom
                  style={{ marginTop: '25px', fontWeight: '800' }}
                >
                  CHANGE YOUR BOOKING
                </Typography>
              </Grid>
              <Typography variant="h2" align="center" style={{ margin: '30px' }}>
                {fullName}
              </Typography>
              <Grid style={{ margin: '35px' }}>
                <Typography
                  variant="subtitle1"
                  align="left"
                  gutterBottom
                  style={{ fontWeight: '800' }}
                >
                  DROP IN
                </Typography>
                <TextField
                  id="datetime-local"
                  type="datetime-local"
                  defaultValue={start}
                  className={classes.datePicker}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={(e) => setModStart(e.target.value)}
                />
              </Grid>
              <Grid style={{ margin: '35px', marginTop: '65px' }}>
                <Typography
                  variant="subtitle1"
                  align="left"
                  gutterBottom
                  style={{ fontWeight: '800' }}
                >
                  DROP OFF
                </Typography>
                <TextField
                  id="datetime-local"
                  type="datetime-local"
                  defaultValue={end}
                  className={classes.datePicker}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={(e) => setModEnd(e.target.value)}
                />
              </Grid>
              <Button
                variant="contained"
                size="large"
                color="primary"
                style={{ marginTop: '45px' }}
                onClick={confirmChange}
              >
                CONFIRM CHANGE
              </Button>
            </Card>
          </Fade>
        </div>
      </Modal>
      <Snackbar open={reqSuccess} autoHideDuration={1500} onClose={handleMessageClose}>
        <Alert onClose={handleMessageClose} severity="success">
          Changed successfully!
        </Alert>
      </Snackbar>
      <Snackbar open={reqError} autoHideDuration={2000} onClose={handleMessageClose}>
        <Alert onClose={handleMessageClose} severity="error">
          Please check request dates and time.
        </Alert>
      </Snackbar>
    </>
  );
}
