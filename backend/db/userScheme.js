const mongoose = require('mongoose');
const UserSchema= mongoose.Schema({
    name:String,
    age:Number,
    city:String
});

  module.exports= mongoose.model('regsterusers', UserSchema)