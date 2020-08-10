import React, { useState, useEffect } from 'react';
import {
  Typography,
  Grid,
  Divider,
  Avatar,
  makeStyles,
  TextField,
  Button,
} from '@material-ui/core';
import axios from 'axios';
import socketIOClient from 'socket.io-client';

const useStyles = makeStyles((theme) => ({
  sendMsg: {
    margin: theme.spacing(1),
    justifyContent: 'flex-end',
    width: '70%',
    display: 'flex',
  },
  receiveMsg: {
    margin: theme.spacing(1),
    justifyContent: 'flex-start',
    width: '70%',
    display: 'flex',
  },
  name: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(3),
  },
  avatar: {
    width: theme.spacing(8),
    height: theme.spacing(8),
    marginLeft: theme.spacing(2),
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  chatContainer: {
    bottom: 0,
  },
  msgBubble: {
    borderRadius: '10px',
    margin: '5px',
    padding: '10px',
    display: 'inline-block',
  },
  wrapper: {
    display: 'flex',
    height: 600,
    overflow: 'hidden',
    overflowY: 'scroll',
    flexDirection: 'column-reverse',
  },
}));

export default function Messages(props) {
  const classes = useStyles();
  const [conversation, setConversation] = useState([]);
  const [selectedUser, setSelectedUser] = useState();
  const [message, setMessage] = useState();
  const [conversationID, setCurrentConversationID] = useState();

  var socket = socketIOClient.connect(process.env.REACT_APP_SOCKET_IO_SERVER);

  const sendMessage = () => {
    const participant = {
      partner: props.selectedUserID,
      sender: props.currentUserID,
      content: message,
      conversation_id: conversationID,
    };
    if (message.length > 0) {
      axios.post('/message/add', participant).then(({ data }) => {
        let newMsg = data;
        if (newMsg) {
          Object.assign(participant, { newMsg: newMsg });
          socket.emit('newMessage', participant);
          if (JSON.stringify(newMsg).length > 0)
            setConversation((oldConversation) => [...oldConversation, newMsg]);
        }
      });
      setMessage('');
    }
  };
  useEffect(() => {
    socket.emit('newUser', props.currentUserID);
    const participant = { partner: props.selectedUserID, me: props.currentUserID };

    // To get Selected user name;
    axios.get(`/profile/${props.selectedUserID}`).then(({ data }) => {
      setSelectedUser(data);
    });

    if (participant.partner !== null && participant.me !== null) {
      // Check if previous conversation is exist with selected user
      axios
        .post('/conversation', participant)
        .then(({ data }) => {
          let conversationID = data;
          if (conversationID) {
            setCurrentConversationID(conversationID);
            axios.get(`/message/${conversationID}`).then(({ data }) => {
              setConversation(data);
            });
          }
        })
        .catch((error) => {
          // IF previous conversation is NOT exist
          if (error.response.statusText === 'Not Found') {
            setCurrentConversationID(null);
            setConversation([]);
          }
        });
    }
    // Receiver for New message
    socket.on('receivedMessage', function (data) {
      let newMsg = data;
      setConversation((oldConversation) => [...oldConversation, newMsg]);
    });
  }, [props]);

  return selectedUser && conversation ? (
    <>
      <Grid container style={{ height: '13%' }}>
        <Avatar
          aria-label="recipe"
          className={classes.avatar}
          alt=""
          src={process.env.REACT_APP_S3_IMAGE_URL + selectedUser.profileImg}
        />
        <Typography variant="h1" align="left" className={classes.name}>
          {selectedUser.firstName} {selectedUser.lastName}
        </Typography>
      </Grid>
      <Divider />
      {/* Chat Window */}

      <div className={classes.wrapper}>
        <div className={classes.chatContainer}>
          {conversation ? (
            conversation.map((msg) => {
              return (
                <>
                  <div
                    className={
                      msg.sender === props.currentUserID
                        ? `${classes.sendMsg}`
                        : `${classes.receiveMsg}`
                    }
                  >
                    <div
                      className={classes.msgBubble}
                      style={{
                        backgroundColor: msg.sender === props.currentUserID ? '#b9b9b9' : '#FFB6C1',
                      }}
                    >
                      <div>{msg.content}</div>
                    </div>
                  </div>
                </>
              );
            })
          ) : (
            <></>
          )}
        </div>
      </div>

      <Divider />
      {/* Message Input */}
      <Grid container style={{ height: '10%' }}>
        <Grid item xs={9}>
          <TextField
            id="standard-basic"
            placeholder={`Send to ${selectedUser.firstName} ${selectedUser.lastName}`}
            fullWidth
            value={message}
            style={{ padding: '3%' }}
            onChange={(e) => setMessage(e.target.value)}
          />
        </Grid>
        <Grid item xs={3}>
          <Button
            variant="contained"
            color="primary"
            style={{ width: '150px', height: '45px', marginTop: '5.5%' }}
            onClick={sendMessage}
          >
            SEND
          </Button>
        </Grid>
      </Grid>
    </>
  ) : (
    <Typography component="h1" variant="h1" align="center" className={classes.search} gutterBottom>
      Please select User to start chat
    </Typography>
  );
}
