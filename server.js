// ------------------------------------------------- //
// Evan MacHale - N00150552
// 22.02.19
// Express + MongoDB
// ------------------------------------------------- //
// https://expressjs.com/en/guide/database-integration.html#mongodb
// https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/
// https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/#create-database-directory
// https://expressjs.com/en/guide/routing.html
// ------------------------------------------------- //

const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const app = express();
const port = 3000;

const url = 'mongodb+srv://larryzodiac:1234@fourth-year-tawax.mongodb.net/admin';
const localhost = 'mongodb://localhost:27017/localhost-database';

app.get('/', (req, res) => res.send('Hello World!')); // localhost:3000
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// ------------------------------------------------- //

/*
  22.02.19
  Installed Express + MongoDB :
    npm i express mongodb
  Installed MongoDB on Windows + MongoDB Compass :
    -> see links above
  Created directory + started mongoDB database on Windows :
    mkdir data/db
    "C:\Program Files\MongoDB\Server\4.0\bin\mongod.exe" --dbpath="c:\...path...\data\db"
  Opened Compass -> create new database, collection + document
  Installed Nodemon + run server:
    npm i -g nodemon
    nodemon server.js
*/

/*
  22.02.19 (Same day)
  Created new cluster on MongoDB Atlas + collection/document
  MongoDB Compass can connect to Atlas using URI connection string
  // mongodb+srv://larryzodiac:1234@fourth-year-tawax.mongodb.net/admin
*/

/*
  db.collection.insertOne({name:'joe'});
  db.collection.find();
  // find the record that matches 'joe' + set the record age to 7
  db.collection.updateOne({name:'joe'}, {$set: {age:7}});
  db.collection.deleteOne({name:'joe'});
*/

// ------------------------------------------------- //

/*
  Create
*/
app.post('/api/users/create', (req, res) => {
  // MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
  //   if (err) throw err
  //   const db = client.db('generative-jewellery');
  //   db.collection('users').find().toArray((err, result) => {
  //     if (err) throw err
  //     res.send(result);
  //   });
  // })
});

// ------------------------------------------------- //

/*
  Read
*/
app.get('/api/users/', (req, res) => {
  MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
    if (err) throw err
    const db = client.db('generative-jewellery');
    db.collection('users').find().toArray((err, result) => {
      if (err) throw err
      res.send(result);
    });
  })
});

// Route parametres example
app.get('/api/users/:userId/', function (req, res) {
  res.send(req.params);
})

// ------------------------------------------------- //

/*
  Update
*/
app.put('/api/users/update', function (req, res) {
  res.send('Got a PUT request at /user');
})

// ------------------------------------------------- //

/*
  Delete
*/
app.delete('/api/users/update', function (req, res) {
  res.send('Got a DELETE request at /user');
})
