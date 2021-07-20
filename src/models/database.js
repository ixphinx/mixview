const mongoose = require('mongoose');
const {Schema} = mongoose;

const Data = new Schema({
    
    /* Data */
    type: String,
    videoid: String,
    videourl: String,


});

module.exports= mongoose.model('Data', Data);
