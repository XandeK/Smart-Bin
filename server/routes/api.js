const express = require('express');
const router = express.Router();
var ObjectId = require('mongodb').ObjectID;
const MongoClient = require('mongodb').MongoClient;
// declare axios for making http requests
const axios = require('axios');
var db;
const bcrypt = require('bcryptjs');
const BCRYPT_SALT_ROUNDS = 12;

MongoClient.connect('mongodb://user:password1@ds149414.mlab.com:49414/smartbin_db', { useNewUrlParser: true }, (err, database) => {
    if (err) return console.log(err)
    db = database.db('smartbin_db');
});


// authenticate user for login
router.get('/authuser/:username/:password', (req, res2) => {

    var username = req.params.username;
    var password = req.params.password;

    db.collection('account').findOne({ "username": username }, { password: 1, _id: 0 }, function (err, result) {
        if (err) { console.log("INSIDE DB.COLLECTION: " + err) };
        if (result == null) res2.send
            ([{ "auth": false }]);
        else {
            if (password == result.password) {
                res2.send([{ "auth": true, "role":result.role }]);
            }
            else {
                res2.send([{ "auth": false }]);
            }
        }
    });
})

//register
router.get('/register/:username/:password', (req, res) => {
    bcrypt.hash(req.params.password, BCRYPT_SALT_ROUNDS, function (err, hash) {
        db.collection('account').save({ "username": req.params.username, "password": hash}, (err, result) => {
        });
    });
});


module.exports = router;