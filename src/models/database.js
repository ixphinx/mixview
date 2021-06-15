const mongoose = require('mongoose');
const {Schema} = mongoose;

const Data = new Schema({
    
    /* Data */
    name: String,
    lastname: String,
    mail: String,
    phone: String,
    country: String,
    city: String,
    video: String,
    news: String,
    newsid: string,
    newsbody: String,


});

module.exports= mongoose.model('Data', Data);
