const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');

//config
app.set('port', process.env.PORT || 3000);

//database

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://admin:huevon33@database-aizqn.gcp.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

    


//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());



//routes
app.use('/api', require('../src/routes/index'));


//server
app.listen(app.get('port'), ()=>{
    console.log('Servidor 33legaue-webmain en puerto ', app.get('port'));
})