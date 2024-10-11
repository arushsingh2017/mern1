const mongoose = require('mongoose');
  const tabSch= mongoose.Schema({
    name:String,
    link:String,
    content:String
  });
//   module.exports= mongoose.model('regsterusers', UserSchema)
  module.exports= mongoose.model('tabdata', tabSch)

  