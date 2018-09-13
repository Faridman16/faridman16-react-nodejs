var express = require('express');
var router = express.Router();
var User = require('../models/user');
var Profile = require('../models/profile');

/* GET users listing. */
router.get('/user', function(req, res, next) {
  User.find((err,user)=>{
    if (err) return handleError(err);
    
    user.forEach((user)=>{
      Profile.findOne({'_id':user.id_profile},(err,profile)=>{
        if (err) return handleError(err);
        console.log(profile);
        res.json({
          id:profile._id,
          nama:profile.nama.first_name +' ' +profile.nama.last_name,
          username:user.username,
          password:user.password,
        });
      });
    })
  });
});

router.get('add', (req, res, next)=>{
  
});

module.exports = router;
