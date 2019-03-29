var express = require("express");

var router = express.Router();
var friends = require("../data/friends.js");

// Get data from friends
router.get("/api/friends",function(req, res){
    res.json({ friends: friends});
});

// Post data into friends
router.post("/api/friends", function(req, res){

});

module.exports = router;