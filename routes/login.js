var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.post('/login', function(req, res, next){
    console.log(req.body);
    User.findOne({$and:[{'username':req.body.username},{'password':req.body.password}]}, (err, user)=>{
        if(err){res.send(err)}
        console.log(user);
        res.json({user});
    });
});



module.exports = router;