import React, { useState } from 'react';
import history from '../history';
import {
  withStyles,
  InputLabel,
  Link,
  Typography,
  DialogTitle,
  DialogContentText,
  DialogContent,
  DialogActions,
  Dialog,
  TextField,
  Button,
  Snackbar,
} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import axios from 'axios';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = (theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
    width: 450,
  },
  title: {
    textAlign: 'center',
    fontWeight: '1000',
  },
  inputLabel: {
    marginTop: theme.spacing(3),
    fontWeight: '900',
    fontSize: '12px',
  },
  loginBtn: {
    marginRight: '17px',
    color: '#DF1B1B',
  },
});

function Login(props) {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailErr, setEmailErr] = useState('');
  const [passwordErr, setPasswordErr] = useState('');
  const [loginErr, setLoginErr] = useState(false);

  const onLoginSubmit = (event) => {
    const isValid = validate();
    if (isValid) {
      axios
        .post('users/login', {
          userEmail: email,
          password: password,
        })
        .then((response) => {
          if (response.status === 200) {
            sessionStorage.setItem('loginToken', response.data.accessToken);
            setEmail('');
            setPassword('');
            setEmailErr('');
            setPasswordErr('');
            history.push('/list');
            window.location.reload();
          }
        })
        .catch((error) => {
          setLoginErr(true);
        });
    }
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setLoginErr(false);
  };

  const validate = () => {
    let emailErr = '';
    let passwordErr = '';

    if (!email.includes('@')) {
      emailErr = 'Invalid email';
    }
    if (password.length < 6) {
      passwordErr = 'Password Can not be less than 6 length';
    }

    if (emailErr || passwordErr) {
      setEmailErr(emailErr);
      setPasswordErr(passwordErr);
      return false;
    }

    return true;
  };

  const { classes } = props;

  return (
    <form>
      <Button
        size="large"
        variant="outlined"
        color="primary"
        onClick={() => setOpen(!open)}
        className={classes.loginBtn}
      >
        LOGIN
      </Button>
      <Dialog
        // fullWidth={true}
        maxWidth="md"
        open={open}
        onClose={() => setOpen(!open)}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title" className={classes.title}>
          <Typography variant="h4">Login</Typography>
        </DialogTitle>
        <DialogContent>
          <form className={classes.form}>
            <DialogContent className={classes.textFieldContainer}>
              <InputLabel color="primary" required={true} className={classes.inputLabel}>
                EMAIL ADDRESS
              </InputLabel>
              <TextField
                autoFocus
                fullWidth
                margin="dense"
                id="email"
                placeholder="Your Email"
                type="email"
                variant="outlined"
                color="primary"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className={classes.errMsg}>
                {emailErr.length > 0 ? <Alert severity="error">{emailErr}</Alert> : ''}
              </div>
              <br />
              <InputLabel color="primary" className={classes.inputLabel}>
                PASSWORD
              </InputLabel>
              <TextField
                fullWidth
                margin="dense"
                id="email"
                placeholder="Your password"
                type="password"
                variant="outlined"
                color="primary"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className={classes.errMsg}>
                {passwordErr.length > 0 ? <Alert severity="error">{passwordErr}</Alert> : ''}
              </div>
            </DialogContent>
          </form>
        </DialogContent>
        <DialogActions className={classes.form}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            component={Link}
            to="/list"
            onClick={onLoginSubmit}
            style={{ marginTop: '20px' }}
          >
            Login
          </Button>
          <DialogContentText className={classes.inputLabel}>
            Not a member?{' '}
            <Link href="#" color="primary">
              Sign Up
            </Link>
          </DialogContentText>
        </DialogActions>
      </Dialog>

      <Snackbar open={loginErr} autoHideDuration={2000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity="error">
          Incorrect Email or Password!
        </Alert>
      </Snackbar>
    </form>
  );
}

export default withStyles(useStyles)(Login);
