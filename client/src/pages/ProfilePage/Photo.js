import React, { Fragment, useState, useEffect } from 'react';

import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Box, Grid, Snackbar } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import axios from 'axios';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      width: theme.spacing(100),
      height: theme.spacing(80),
    },
    [theme.breakpoints.down('md')]: {
      width: theme.spacing(80),
    },
    [theme.breakpoints.down('sm')]: {
      width: theme.spacing(60),
    },
    [theme.breakpoints.down('xs')]: {
      width: theme.spacing(20),
      marginLeft: '0px',
    },
    marginTop: '100px',
    marginLeft: '50px',
  },
  search: {
    marginTop: '120px',
  },
  box: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(5),
  },
  uploadBtn: {
    margin: theme.spacing(2),
    padding: theme.spacing(2),
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      marginLeft: '0',
    },
  },
  deleteBtn: {
    color: theme.palette.text.secondary,
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  saveBtn: {
    margin: theme.spacing(2),
    padding: theme.spacing(2),
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
  },
  photo: {
    margin: theme.spacing(5),
    width: theme.spacing(25),
    height: theme.spacing(25),
  },
}));

function Photo(props) {
  const [fileName, setFileName] = useState('');
  const [file, setFile] = useState('');
  const [onSuccesful, setOnSuccesful] = useState(false);
  const [uploadErr, setUploadErr] = useState(false);
  const [sitter, setSitter] = useState(null);
  const [dataLoaded, setLoaded] = useState(false);
  const [imgUrl, setImgUrl] = useState(null);

  useEffect(() => {
    axios
      .get(`/profile/ref/${props.userID}`)
      .then((res) => {
        setSitter(res.data);
        if (res.data.profileImg !== undefined)
          setImgUrl(`${process.env.REACT_APP_S3_IMAGE_URL + res.data.profileImg}`);
        setLoaded(true);
      })
      .catch((error) => {
        console.log('error: ', error);
      });
  }, [props.userID]);

  const uploadFile = (e) => {
    const formData = new FormData();
    formData.append('image', file);
    if (file.length === 0) {
      setUploadErr(true);
    } else {
      axios
        .post(`/profile/uploadPhoto/${sitter.userID}`, formData)
        .then((res) => {
          if (!res.data.error) {
            console.log();
            setImgUrl(res.data.Location);
            setFile('');
            setFileName('');
            setOnSuccesful(true);
            props.updateProfileImg();
          }
        })
        .catch((error) => {
          console.log('error: ', error);
        });
    }
  };

  const handleDeleteFile = (e) => {
    setFile('');
    setFileName('');
  };
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.value);
  };
  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOnSuccesful(false);
    setUploadErr(false);
  };

  const classes = useStyles();

  return dataLoaded ? (
    <Fragment>
      <Container maxWidth="lg" className={classes.root}>
        <Paper elevation={3}>
          <Box className={classes.box}>
            <Typography variant="h1" align="center" gutterBottom>
              Profile Photo
            </Typography>
            <Avatar alt="Remy Sharp" src={imgUrl} className={classes.photo} />
            <Typography variant="h6" color="textSecondary">
              Be sure to use a photo that clearly shows your face
            </Typography>
            <Grid>
              <input
                style={{ display: 'none' }}
                accept="image/*"
                id="raised-button-file"
                type="file"
                file={file}
                value={fileName}
                onChange={handleFileChange}
              />
              <label htmlFor="raised-button-file">
                <Button
                  variant="outlined"
                  color="primary"
                  component="span"
                  name="file"
                  className={classes.uploadBtn}
                >
                  {fileName === '' ? 'SELECT Image' : fileName}
                </Button>
              </label>
              <Button
                color="default"
                className={classes.deleteBtn}
                startIcon={<DeleteIcon />}
                onClick={handleDeleteFile}
              />
            </Grid>
            <Button
              variant="contained"
              color="primary"
              className={classes.saveBtn}
              onClick={uploadFile}
            >
              UPDATE
            </Button>
          </Box>
        </Paper>
      </Container>

      <Snackbar open={onSuccesful} autoHideDuration={3000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity="success">
          Profile photo updated successfully!
        </Alert>
      </Snackbar>
      <Snackbar open={uploadErr} autoHideDuration={3000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity="error">
          Please upload image to update
        </Alert>
      </Snackbar>
    </Fragment>
  ) : (
    <Typography component="h1" variant="h1" align="center" className={classes.search} gutterBottom>
      Loading...
    </Typography>
  );
}

export default Photo;
