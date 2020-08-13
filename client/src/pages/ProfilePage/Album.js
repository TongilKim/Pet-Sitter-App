import React, { Fragment, useState, useEffect } from 'react';
import MuiAlert from '@material-ui/lab/Alert';
import axios from 'axios';
import { makeStyles, Paper, Typography, Box, Snackbar, Button, Container } from '@material-ui/core';
import { DropzoneArea } from 'material-ui-dropzone';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function Album(props) {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        width: theme.spacing(100),
        height: theme.spacing(80),
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
    },
  }));

  const [onSuccesful, setOnSuccesful] = useState(false);
  const [uploadErr, setUploadErr] = useState(false);
  const [sitter, setSitter] = useState(null);
  const [files, setFiles] = useState([]);

  useEffect(() => {
    axios
      .get(`/profile/ref/${props.userID}`)
      .then((res) => {
        setSitter(res.data);
      })
      .catch((error) => {
        console.log('error: ', error);
      });
  }, [props.userID]);

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOnSuccesful(false);
    setUploadErr(false);
  };
  const handleChangeUpload = (img) => {
    setFiles(img);
  };
  const uploadFile = (e) => {
    if (files.length === 0) {
      setUploadErr(true);
    } else {
      const formData = new FormData();

      for (let i = 0; i < files.length; i++) {
        formData.append('images', files[i]);
      }
      // Insert & update formData into database
      axios
        .put(`/profile/uploadAlbum/${sitter.userID}`, formData)
        .then((res) => {
          if (!res.data.error) {
            setOnSuccesful(true);
            setFiles([]);
          }
        })
        .catch((error) => {
          console.log('error: ', error);
        });
    }
  };
  const classes = useStyles();
  return sitter ? (
    <Fragment>
      <Container maxWidth="lg" className={classes.root}>
        <Paper elevation={3}>
          <Box className={classes.box}>
            <Typography variant="h1" align="center" gutterBottom>
              About Photo Album
            </Typography>
            <DropzoneArea
              acceptedFiles={['image/*']}
              onChange={handleChangeUpload}
              showFileNames
              dropzoneText="Choose Images that you want to use"
              showAlerts={false}
              filesLimit={4}
            />
            <Button
              variant="contained"
              color="primary"
              className={classes.uploadBtn}
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
          Please upload image at least one
        </Alert>
      </Snackbar>
    </Fragment>
  ) : (
    <Typography component="h1" variant="h1" align="center" className={classes.search} gutterBottom>
      Loading...
    </Typography>
  );
}
