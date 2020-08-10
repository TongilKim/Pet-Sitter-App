const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const Conversation = require('../models/conversationModel');
const Message = require('../models/messageModel');
const { request } = require('express');
const ObjectId = mongoose.Types.ObjectId;

router.post('/conversation/add', (req, res) => {
  const conversation = new Conversation(req.body);
  conversation.save((err) => {
    if (err) {
      return res.status(400);
    } else {
      return res.status(200).send('Conversation created!');
    }
  });
});

router.post('/add', (req, res) => {
  Conversation.findOne(
    { participants: { $all: [req.body.partner, req.body.sender] } },
    (err, conversation) => {
      if (err) {
        res.status(404).send('Error found!');
      } else {
        if (conversation !== null) {
          const message = new Message(req.body);
          message.save((err, newMsg) => {
            if (err) {
              return res.status(400);
            }
            return res.status(200).send(newMsg);
          });
        } else {
          console.log('current conversation is not available');
          const newConversation = new Conversation({
            participants: [req.body.partner, req.body.sender],
          });
          newConversation.save(function (err, c) {
            if (err) {
              console.log(err);
            } else {
              const message = new Message({
                sender: req.body.sender,
                content: req.body.content,
                conversation_id: c._id,
              });
              message.save((err, newMsg) => {
                if (err) {
                  return res.status(400);
                } else {
                  return res.status(200).send(newMsg);
                }
              });
            }
          });
        }
      }
    }
  );
});

router.get('/:id', (req, res) => {
  Message.find({ conversation_id: req.params.id }, (err, messages) => {
    if (err) {
      res.status(404).send('No messages were found!');
    } else {
      res.status(200).send(messages);
    }
  });
});

module.exports = router;
