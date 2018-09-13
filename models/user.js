var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var user = new Schema({
    username:String,
    password:String,
    id_profile:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Profile',
    }
});


module.exports = mongoose.model('User', user);