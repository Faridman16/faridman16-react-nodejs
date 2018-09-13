var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var profile = new Schema({
    nama:{
        first_name:String,
        last_name:String,
    },
    alamat:String,
    img_profile:String,
});

module.exports = mongoose.model('Profle', profile);