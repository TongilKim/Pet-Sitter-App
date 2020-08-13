import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import { Box, Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import Moment from 'moment-timezone';
import InputMask from 'react-input-mask';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      width: theme.spacing(100),
      height: theme.spacing(130),
    },

    marginTop: '100px',
    marginLeft: '50px',
  },
  search: {
    marginTop: '120px',
  },
  paper: {
    [theme.breakpoints.down('sm')]: {
      height: theme.spacing(170),
    },
  },
  grid: {
    flexGrow: 1,
    padding: theme.spacing(5),
  },
  flexibleTitle: {
    align: 'right',
    [theme.breakpoints.down('xs')]: {
      align: 'left',
    },
  },
  label: {
    padding: theme.spacing(2),
  },
  box: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  saveBtn: {
    margin: theme.spacing(2),
    padding: theme.spacing(2),
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
  },
  button: {
    marginTop: '50px',
  },
  errMsg: {
    width: '100%',
  },
}));

function Edit(props) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [birthDate, setBirth] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [description, setDescription] = useState('');
  const [dataLoaded, setLoaded] = useState(false);
  const [messageOpen, setMessageOpen] = useState(false);
  const [phoneNumberErr, setPhoneNumberErr] = useState('');
  const [firstNameErr, setFirstNameErr] = useState('');
  const [lastNameErr, setLastNameErr] = useState('');
  useEffect(() => {
    axios.get(`/profile/ref/${props.userID}`).then(({ data }) => {
      setFirstName(data.firstName);
      setLastName(data.lastName);
      setEmail(data.email);
      setGender(data.gender);
      setBirth(Moment.utc(data.birthDate).format('YYYY-MM-DD'));
      setPhoneNumber(data.phoneNumber);
      setAddress(data.address);
      setDescription(data.description);
      setLoaded(true);
    });
  }, [props.userID]);

  const validate = () => {
    let firstNameErr = '';
    let lastNameErr = '';
    let phoneNumberErr = '';

    if (!firstName) {
      firstNameErr = 'First Name cannot be empty';
    }
    if (!lastName) {
      lastNameErr = 'Last Name connot be empty';
    }

    if (!phoneNumber) {
      phoneNumberErr = 'Phone number cannot empty';
    }

    if (firstNameErr || lastNameErr || phoneNumberErr) {
      setFirstNameErr(firstNameErr);
      setLastNameErr(lastNameErr);
      setPhoneNumberErr(phoneNumberErr);
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();

    if (isValid) {
      setFirstNameErr('');
      setLastNameErr('');
      setPhoneNumberErr('');
      const user = {
        userId: props.userID,
        firstName: firstName,
        lastName: lastName,
        gender: gender,
        birthDate: birthDate,
        phoneNumber: phoneNumber.replace(/ /g, ''),
        address: address,
        description: description,
      };

      axios
        .put(`/profile/${props.userID}`, user)
        .then((response) => {
          if (!response.data.error) {
            handleClick();
          }
        })
        .catch((error) => {
          console.log('error: ', error);
        });
    }
  };

  const handleClick = () => {
    setMessageOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setMessageOpen(false);
  };

  const classes = useStyles();

  return dataLoaded ? (
    <Fragment>
      <Container maxwidth="lg" className={classes.root}>
        <Paper elevation={3} className={classes.paper}>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3} className={classes.grid}>
              <Grid item xs={12}>
                <Typography variant="h1" align="center" gutterBottom>
                  Edit Profile
                </Typography>
              </Grid>

              <Grid container item xs={12} lg={9} xl={9}>
                <Grid item xs={6} md={3} lg={4} xl={4} className={classes.label}>
                  <Typography variant="h6" className={classes.flexibleTitle} gutterBottom>
                    FIRST NAME
                  </Typography>
                </Grid>
                <Grid item xs={6} md={5} lg={6} xl={8}>
                  <TextField
                    id="firstName"
                    placeholder="First Name"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    defaultValue={firstName}
                    type="text"
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </Grid>
                <div className={classes.errMsg}>
                  {firstNameErr.length > 0 ? <Alert severity="error">{firstNameErr}</Alert> : ''}
                </div>
              </Grid>

              <Grid container item xs={12} lg={9} xl={9}>
                <Grid item xs={6} md={3} lg={4} xl={4} className={classes.label}>
                  <Typography variant="h6" className={classes.flexibleTitle} gutterBottom>
                    LAST NAME
                  </Typography>
                </Grid>
                <Grid item xs={6} md={5} lg={6} xl={8}>
                  <TextField
                    id="lastName"
                    placeholder="Last Name"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    defaultValue={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </Grid>
                <div className={classes.errMsg}>
                  {lastNameErr.length > 0 ? <Alert severity="error">{lastNameErr}</Alert> : ''}
                </div>
              </Grid>

              <Grid container item xs={12} lg={9} xl={9}>
                <Grid item xs={6} md={3} lg={4} xl={4} className={classes.label}>
                  <Typography variant="h6" className={classes.flexibleTitle} gutterBottom>
                    GENDER
                  </Typography>
                </Grid>
                <Grid item xs={6} md={5} lg={6} xl={8}>
                  <FormControl variant="outlined" className={classes.formControl} fullWidth>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value={gender || 'Other'}
                      onChange={(e) => setGender(e.target.value)}
                    >
                      <MenuItem value="Male">Male</MenuItem>
                      <MenuItem value="Female">Female</MenuItem>
                      <MenuItem value="Other">Other</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>

              <Grid container item xs={12} lg={9} xl={9}>
                <Grid item xs={12} md={3} lg={4} xl={4} className={classes.label}>
                  <Typography variant="h6" gutterBottom className={classes.flexibleTitle}>
                    BIRTH DATE
                  </Typography>
                </Grid>
                <Grid item xs={12} md={5} lg={6} xl={8} className={classes.label}>
                  <TextField
                    id="date"
                    type="date"
                    style={{ marginTop: 0 }}
                    className={classes.textField}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    defaultValue={birthDate}
                    onChange={(e) => setBirth(e.target.value)}
                  />
                </Grid>
              </Grid>

              <Grid container item xs={12} lg={9} xl={9}>
                <Grid item xs={12} md={3} lg={4} xl={4} className={classes.label}>
                  <Typography variant="h6" className={classes.flexibleTitle} gutterBottom>
                    EMAIL ADDRESS
                  </Typography>
                </Grid>
                <Grid item xs={12} md={5} lg={6} xl={8}>
                  <TextField
                    style={{ margin: 0 }}
                    disabled
                    id="email"
                    fullWidth
                    margin="normal"
                    variant="filled"
                    value={email}
                  />
                </Grid>
              </Grid>

              <Grid container item xs={12} lg={9} xl={9}>
                <Grid item xs={12} md={3} lg={4} xl={4} className={classes.label}>
                  <Typography variant="h6" className={classes.flexibleTitle} gutterBottom>
                    PHONE NUMBER
                  </Typography>
                </Grid>
                <Grid item xs={12} md={5} lg={6} xl={6}>
                  <InputMask
                    mask="999 999 9999"
                    defaultValue={'000 000 0000'}
                    value={phoneNumber}
                    disabled={false}
                    maskChar=" "
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  >
                    {() => (
                      <TextField
                        style={{ margin: 0 }}
                        placeholder="Phone number"
                        fullWidth
                        margin="normal"
                        variant="outlined"
                      />
                    )}
                  </InputMask>
                  <div className={classes.errMsg}>
                    {phoneNumberErr.length > 0 ? (
                      <Alert severity="error">{phoneNumberErr}</Alert>
                    ) : (
                      ''
                    )}
                  </div>
                </Grid>
              </Grid>

              <Grid container item xs={12} lg={9} xl={9}>
                <Grid item xs={12} md={3} lg={4} xl={4} className={classes.label}>
                  <Typography variant="h6" className={classes.flexibleTitle} gutterBottom>
                    WHERE YOU LIVE
                  </Typography>
                </Grid>

                <Grid item xs={12} md={5} lg={6} xl={6}>
                  <TextField
                    id="address"
                    style={{ margin: 0 }}
                    placeholder="Address"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    defaultValue={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </Grid>
              </Grid>

              <Grid container item xs={12} lg={9} xl={9}>
                <Grid item xs={12} md={3} lg={4} xl={4} className={classes.label}>
                  <Typography variant="h6" className={classes.flexibleTitle} gutterBottom>
                    DESCRIBE YOUR SELF
                  </Typography>
                </Grid>

                <Grid item xs={12} md={5} lg={6} xl={8}>
                  <TextField
                    id="address"
                    style={{ margin: 0 }}
                    placeholder="About you"
                    fullWidth
                    multiline
                    rows={8}
                    margin="normal"
                    variant="outlined"
                    defaultValue={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Box className={classes.box}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.saveBtn}
                onClick={handleSubmit}
              >
                SAVE
              </Button>
            </Box>
          </form>
        </Paper>
      </Container>
      <Snackbar open={messageOpen} autoHideDuration={1500} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Saved successfully!
        </Alert>
      </Snackbar>
    </Fragment>
  ) : (
    <Typography component="h1" variant="h1" align="center" className={classes.search} gutterBottom>
      Loading...
    </Typography>
  );
}

export default Edit;
