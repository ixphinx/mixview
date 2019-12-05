const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname + '/views'));
app.set('view engine', 'ejs');


const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://admin:<password>@database-aizqn.gcp.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const jugadores = client.db("league").collection("jugadores");
  const equipos = client.db("league").collection("equipos");
  console.log('Base de datos Conectada');
  // perform actions on the collection object
  client.close();
});


app.use(require('./routes/index.js'));

app.use(express.static(path.join(__dirname + '/public')));

app.listen(app.get('port'), ()=>{
    console.log('Servidor conectado en puerto: ' + app.get('port'));
});