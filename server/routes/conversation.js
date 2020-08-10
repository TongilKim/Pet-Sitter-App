const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const Conversation = require('../models/conversationModel');
const Message = require('../models/messageModel');

router.post('/', (req, res) => {
  Conversation.findOne(
    { participants: { $all: [req.body.partner, req.body.me] } },
    (err, conversation) => {
      if (err) {
        res.status(404).send('Error found!');
      } else {
        if (conversation !== null) {
          res.status(200).send(conversation._id);
        } else {
          res.status(404).send('No conversation were found!');
        }
      }
    }
  );
});

module.exports = router;
