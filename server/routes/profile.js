const multer = require('multer');
const AWS = require('aws-sdk');
const { v4: uuid } = require('uuid');

const express = require('express');
const router = express.Router();
const Profile = require('../models/profileModel');
const User = require('../models/userModel');

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ID,
  secretAccessKey: process.env.AWS_SECRET,
});
const storage = multer.memoryStorage({
  destination: function (req, file, callback) {
    callback(null, '');
  },
});

// ADD profile photo
const upload = multer({ storage }).single('image');
router.post('/uploadPhoto/:id', upload, (req, res) => {
  let uploadedImg = req.file.originalname.split('.');
  let fileType = uploadedImg[uploadedImg.length - 1];

  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: `${uuid()}.${fileType}`,
    Body: req.file.buffer,
    ACL: 'public-read',
  };

  s3.upload(params, (error, data) => {
    if (error) {
      res.status(400).send(error);
    } else {
      // Adding the Image url stored in S3 into the database
      Profile.findOne({ userID: req.params.id }, (err, foundProfile) => {
        foundProfile.profileImg = data.key;

        foundProfile.save(function (err) {
          if (err) {
            console.log(err);
          }
        });
      });
      res.status(200).send(data);
    }
  });
});

// UPDATE Album Images
const uploadAlbum = multer({ storage }).array('images');
router.put('/uploadAlbum/:id', uploadAlbum, (req, res) => {
  const files = req.files;

  if (!files) {
    res.status(400).send('uploaded file is empty');
  } else {
    files.forEach((file) => {
      let uploadedImg = file.originalname.split('.');
      let fileType = uploadedImg[uploadedImg.length - 1];

      const params = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: `${uuid()}.${fileType}`,
        Body: file.buffer,
        ACL: 'public-read',
      };

      s3.upload(params, (error, data) => {
        if (error) {
          res.status(400).send(error);
        } else {
          // Adding the Image url stored in S3 into the database
          Profile.updateOne(
            { userID: req.params.id },
            { $push: { albumImgs: { $each: [data.key], $slice: -4 } } },
            function (error, success) {
              if (error) {
                res.status(400).send(error);
              }
            }
          );
        }
      });
    }); // end forEach loop
    res.status(200).send('Album Images Edited!');
  }
});

// POST a new profile
router.post('/add', (req, res) => {
  if (err) {
    res.status(400).json(errMsg);
  } else {
    const profile = new Profile(newProfile);

    profile.save((err) => {
      if (err) {
        res.status(400);
      } else {
        res.status(200).send('Profile created!');
      }
    });
  }
});

// GET all the profiles except User for list page
router.get('/list/:id', (req, res) => {
  Profile.find({ userID: { $ne: req.params.id } }, (err, foundProfile) => {
    if (err) {
      res.status(404).send('No profiles were found!');
    } else {
      res.status(200).send(foundProfile);
    }
  });
});

// GET a profile by id
router.get('/:id', (req, res) => {
  Profile.findOne({ userID: req.params.id }, (err, foundProfile) => {
    if (err) {
      res.status(404).send('Profile not found!');
    } else {
      res.status(200).send(foundProfile);
    }
  });
});

// GET a profile by userID
router.get('/ref/:id', (req, res) => {
  Profile.findOne({ userID: req.params.id }, (err, foundProfile) => {
    if (err) {
      res.status(404).send('Profile not found!');
    } else {
      res.status(200).send(foundProfile);
    }
  });
});

// PUT a specific profile
router.put('/:id', (req, res) => {
  Profile.findOne({ userID: req.params.id }, (err, foundProfile) => {
    if (err) {
      res.status(500).send();
    } else {
      if (!foundProfile) {
        res.status(404).send();
      } else {
        // update the profile database.
        const {
          firstName,
          lastName,
          gender,
          birthDate,
          phoneNumber,
          address,
          description,
        } = req.body;
        foundProfile.firstName = firstName;
        foundProfile.lastName = lastName;
        foundProfile.gender = gender;
        foundProfile.birthDate = birthDate;
        foundProfile.phoneNumber = phoneNumber;
        foundProfile.address = address;
        foundProfile.description = description;

        foundProfile.save(function (err, savedProfile) {
          if (err) {
            console.log(err);
          } else {
            // update the user database as well if any related updates available
            User.findOne({ _id: req.params.id }, (err, user) => {
              // (user.userEmail = email),
              user.firstName = firstName;
              user.lastName = lastName;

              user.save(function (err) {
                if (err) {
                  console.log(err);
                }
              });
            });

            res.json(savedProfile);
          }
        });
      }
    }
  });
});
module.exports = router;
