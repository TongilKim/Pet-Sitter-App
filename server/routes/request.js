const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const Request = require('../models/requestModel');
const User = require('../models/userModel');
const Profile = require('../models/profileModel');
const { request } = require('express');
const client = require('socket.io').listen(4000).sockets;
var async = require('async');

// Connect to Socket.io
client.on('connection', function (socket) {
  sendStatus = function (s) {
    socket.emit('status', s);
  };
  let requestArry = [];
  socket.on('updateRequests', function (requests) {
    async.each(
      requests,
      function (request, callback) {
        Profile.findOne({ userID: request.user_id }, (err, user) => {
          Request.findOne({ user_id: user.userID }, (err, req) => {
            let userObj = {
              requestID: request._id,
              firstName: user.firstName,
              profileImg: user.profileImg,
              requestedDate: req.start,
              readStatus: request.readBySitter,
            };
            requestArry.push(userObj);
            callback(null);
          });
        });
      },
      function (err) {
        client.to(socket.id).emit('requestsFromOwner', requestArry);
      }
    );
  });
  socket.on('updateConfirms', function (requests) {
    async.each(
      requests,
      function (request, callback) {
        Profile.findOne({ userID: request.user_id }, (err, user) => {
          Request.findOne({ user_id: user.userID }, (err, req) => {
            let userObj = {
              requestID: request._id,
              firstName: user.firstName,
              profileImg: user.profileImg,
              requestedDate: req.start,
              readStatus: request.readByOwner,
              acceptedStatus: request.accepted,
              declinedStatus: request.declined,
            };
            requestArry.push(userObj);
            callback(null);
          });
        });
      },
      function (err) {
        client.to(socket.id).emit('confirmsFromSitter', requestArry);
      }
    );
  }); // socket on 'updateConfirms' end

  socket.on('addRequestNotify', function (request) {
    Profile.findOne({ userID: request.data.user_id }, (err, user) => {
      if (user) {
        Request.findOne({ user_id: user.userID }, (err, req) => {
          let userObj = {
            requestID: request.data._id,
            firstName: user.firstName,
            profileImg: user.profileImg,
            requestedDate: req.start,
          };
          requestArry.push(userObj);
          socket.broadcast.emit('requestsFromOwner', requestArry);
        });
      }
    });
  });

  socket.on('addConfirmNotify', function (request) {
    Profile.findOne({ userID: request.data.user_id }, (err, user) => {
      if (user) {
        Request.findOne({ user_id: user.userID }, (err, req) => {
          let userObj = {
            requestID: request.data._id,
            firstName: user.firstName,
            profileImg: user.profileImg,
            requestedDate: req.start,
          };
          requestArry.push(userObj);
          socket.broadcast.emit('confirmsFromSitter', requestArry);
        });
      }
    });
  });
});

// Display requests for Sitter
router.get('/getSitterRequest/:id', (req, res) => {
  Request.find({ sitter_id: req.params.id }, (err, request) => {
    if (err) {
      res.status(404).send('Request not found!');
    } else {
      res.status(200).send(request);
    }
  });
});

// Display requests for owner that accepted or denied from sitter
router.get('/getConfirmedRequest/:id', (req, res) => {
  Request.find({ user_id: req.params.id }, (err, requests) => {
    if (err) {
      res.status(404).send('Request not found!');
    } else {
      res.status(200).send(requests);
    }
  });
});
const ObjectId = mongoose.Types.ObjectId;

// Add a new request
router.post('/add', (req, res) => {
  const request = new Request(req.body);
  request.save((err, data) => {
    if (err) {
      return res.status(400);
    } else {
      return res.status(200).send(data);
    }
  });
});

// Display all requests by UserID
router.get('/:id', (req, res) => {
  Request.aggregate(
    [
      { $match: { user_id: ObjectId(req.params.id) } },
      { $sort: { start: 1, end: 1 } },
      {
        $lookup: {
          from: 'profiles',
          localField: 'sitter_id',
          foreignField: '_id',
          as: 'sitterProfile',
        },
      },
    ],
    (err, request) => {
      if (err) {
        res.status(404).send('Requests not found!');
      } else {
        res.status(200).send(request);
      }
    }
  );
});

// Display accepted requests by UserID
router.get('/accepted/:id', (req, res) => {
  Request.aggregate(
    [
      { $match: { user_id: ObjectId(req.params.id), accepted: true } },
      { $sort: { start: 1, end: 1 } },
      {
        $lookup: {
          from: 'profiles',
          localField: 'sitter_id',
          foreignField: '_id',
          as: 'sitterProfile',
        },
      },
    ],
    (err, request) => {
      if (err) {
        res.status(404).send('Requests not found!');
      } else {
        res.status(200).send(request);
        // res.json(request);
      }
    }
  );
});

//Display a specific request by requestID
router.get('/ref/:id', (req, res) => {
  Request.findOne({ _id: req.params.id }, (err, request) => {
    if (err) {
      res.status(404).send('Request not found!');
    } else {
      res.status(200).send(request);
    }
  });
});

// Update a readBysitter status if sitter read owner's request notification.
router.put('/readOwnerRequest/:id', (req, res) => {
  Request.findOne({ _id: req.params.id }, (err, request) => {
    if (err) {
      res.status(404).send('Request not found!');
    } else {
      request.readBySitter = true;
      request.save(function (err, request) {
        if (err) {
        } else {
          res.status(200).send(request);
        }
      });
    }
  });
});
// Update a readByOwner status if owner read sitter's confirm notification.
router.put('/readSitterConfirm/:id', (req, res) => {
  console.log('owner read the confirmation');
  Request.findOne({ _id: req.params.id }, (err, request) => {
    if (err) {
      res.status(404).send('Request not found!');
    } else {
      request.readByOwner = true;
      request.save(function (err, request) {
        if (err) {
        } else {
          res.status(200).send(request);
        }
      });
    }
  });
});

// Update a specific request
router.put('/:id', async (req, res) => {
  await Request.findOne({ _id: req.params.id }, (err, foundRequest) => {
    if (err) {
      res.status(500).send();
    } else {
      if (!foundRequest) {
        res.status(404).send();
      } else {
        const { start, end, cost } = req.body;
        foundRequest.start = start;
        foundRequest.end = end;
        foundRequest.cost = cost;
        foundRequest.save(function (err, savedRequest) {
          if (err) {
          } else {
            res.status(200).send(savedRequest);
          }
        });
      }
    }
  });
});

module.exports = router;
