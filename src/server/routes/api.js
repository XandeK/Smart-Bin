const express = require('express');
const router = express.Router();
var ObjectId = require('mongodb').ObjectID;
const MongoClient = require('mongodb').MongoClient;
// declare axios for making http requests
const axios = require('axios');
var db;
MongoClient.connect('mongodb://delonix:delonix123@ds119795.mlab.com:19795/delonix', { useNewUrlParser: true }, (err, database) => {
if (err) return console.log(err)
db = database.db('delonix');
});

// xande functions

// create new loyalty product
router.post('/createProduct/:productImage/:productName/:productCost/:productDesc', (req, res) => {
    db.collection('loyaltyproducts').insertOne({productImage: req.params.productImage, productName: req.params.productName, productCost: req.params.productCost, productDesc: req.params.productDesc}, (err, result) => {
        if (err) 
        return console.log(err);
        // else
        // return res.send('1');
    });
});

// get all loyalty products for redeemption
router.get('/getAllProducts', function (req, res) {
    db.collection('loyaltyproducts').find({}).toArray((err, results) => { res.send(results) });
});
// search by name of product
router.get('/findByName/:productName', function (req, res) {
    db.collection('loyaltyproducts').find({ "productName": req.params.productName }).toArray((err, results) => { res.send(results) });
});

// NOT WORKING register for admin account
// router.get('/regAdmin/:name/:email/:password/:contact/:role', (req, res) => {
//     bcrypt.hash(req.params.password, BCRYPT_SALT_ROUNDS, function (err, hash) {
//         db.collection('admin').insertOne({ "name": req.params.name, "email": req.params.email, "password": hash, "contact": req.params.contact, "role": req.params.role }, (err, result) => {
//         });

//     });
// })

// create new room rate 
router.post('/newRoomRate/:roomName/:roomType/:roomRate', (req, res) => {
    db.collection('roomrate').insertOne({roomName: req.params.roomName, roomType: req.params.roomType, roomRate: req.params.roomRate}, (err, result) => {
        if (err) 
        return console.log(err);
        // else
        // return res.send('1');
    });
});
// get all room rate to display
router.get('/getAllRoomRate', function (req, res) {
    db.collection('roomrate').find({}).toArray((err, results) => { res.send(results) });
});

// delete room rate
router.route('/deleteRoom/:roomName').delete(function (req, res) {
    db.collection('roomrate').deleteOne({ "roomName": (req.params.roomName) });
    //res.redirect("http://localhost:3000/login");
});

// authenticate user for login
router.get('/authuser/:email/:mobilenumber', (req, res2) => {

    var email = req.params.email;
    var mobilenumber = req.params.mobilenumber;

    db.collection('staffrecord').findOne({ "email": email }, { mobilenumber: 1, _id: 0 }, function (err, result) {
        if (err) { console.log("INSIDE DB.COLLECTION: " + err) };
        if (result == null) res2.send
        ([{ "auth": false }]);
        else {
            if(mobilenumber == result.mobilenumber){
                res2.send([{ "auth": true }])
                ;}
                else{
                    res2.send([{ "auth": false }]);
                }
            


            
        }
    });
})

//update loyalty product
router.route('/updateProduct/:_id/:productImage/:productName/:productCost/:productDesc').put(function(req, res) {
    db.collection('loyaltyproducts').updateOne
    ({"_id": ObjectId(req.params._id)}, { $set: {"productImage": req.params.productImage, "productName": req.params.productName,"productCost": req.params.productCost, "productDesc": req.params.productDesc} });
    });

// wang bin functions

// create new staff 
router.post('/newstaff/:staffname/:staffaddress/:permitstatus/:mobilenumber/:email/:gender/:bankdetail/:special', (req, res) => {
db.collection('staffrecord').insertOne({

    staffname: req.params.staffname, 
    staffaddress: req.params.staffaddress,
    permitstatus: req.params.permitstatus, 
    mobilenumber: req.params.mobilenumber, 
    email: req.params.email,
    gender: req.params.gender, 
    bankdetail: req.params.bankdetail, 
    special: req.params.special
}, (err, result) => {
    if (err) 
    return console.log(err);
    // else
    // return res.send('1');
});
});

// get all staff records
router.get('/getstaffrecord', function(req, res){
    db.collection('staffrecord').find().toArray( (err, results) =>
   {res.send(results)});
   });





// new room report
router.post('/newroomreport/:date/:roomtype/:guestnumber', (req, res) => {
    db.collection('roomreport').insertOne({
    
        date: req.params.date, 
        roomtype: req.params.roomtype,
        guestnumber: req.params.guestnumber, 
        
    }, (err, result) => {
        if (err) 
        return console.log(err);
        // else
        // return res.send('1');
    });
    });
    
    // get all room report
    router.get('/getroomreport', function(req, res){
        db.collection('roomreport').find().toArray( (err, results) =>
       {res.send(results)});
       });




// new housekeeping report
router.post('/newhousekeepingreport/:date/:jobtype/:staffnumber', (req, res) => {
    db.collection('housekeepingreport').insertOne({
    
        date: req.params.date, 
        jobtype: req.params.jobtype,
        staffnumber: req.params.staffnumber, 
        
    }, (err, result) => {
        if (err) 
        return console.log(err);
        // else
        // return res.send('1');
    });
    });
    
    // get all housekeeping records
    router.get('/gethousekeepingreport', function(req, res){
        db.collection('housekeepingreport').find().toArray( (err, results) =>
       {res.send(results)});
       });



       // new dirty room
       router.post('/newdirtyroom/:roomnumber', (req, res) => {
        db.collection('dirtyroom').insertOne({
    
            roomnumber: req.params.roomnumber, 
       
            
        }, (err, result) => {
            if (err) 
            return console.log(err);
            // else
            // return res.send('1');
        });
        });
    
        // get all dirty room
            router.get('/getdirtyroom', function(req, res){
            db.collection('dirtyroom').find().toArray( (err, results) =>
        {res.send(results)});
        });

       
    module.exports = router;