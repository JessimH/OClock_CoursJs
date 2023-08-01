// USE THE CONNECTION TO DATABASE
const client = require('./connection.js')

// INSTALL AND IMPORT EXPRESS
const express = require('express');

// CREATE THE SERVER
const app = express();

// INSTALL AND IMPORT CORS
const cors = require('cors');

app.use(cors());

// INSTALL AND IMPORT BODY PARSER
const bodyParser = require("body-parser");

// LISTEN TO THE SERVER
app.listen(3000, () => {
  console.log("Sever is now listening at port 3000");
})
// USE BODY PARSER TO JSON
app.use(bodyParser.json());

// CONNECT CLIENT TO THE DATABASE
client.connect();

// NEW GET ROUTE TO GET ALL USERS
app.get('/users', (req, response) => {
  // GET ALL USERS FROM THE DATABASE
  client.query(`Select * from users`, (err, result) => {
    if (!err) {
      response.send(result.rows);
    } else {
      console.log(err);
    }
  });
  client.end;
})

// NEW GET ROUTE TO GET A USER BY ID
app.get('/users/:id', (req, response) => {
  // GET A USER BY ID FROM THE DATABASE
  client.query(`Select * from users where id=${req.params.id}`, (err, result) => {
    if (!err) {
      res.header("Access-Control-Allow-Origin", "*");
      response.send(result.rows);
    } else {
      console.log(err);
    }
  });
  client.end;
})

// NEW POST ROUTE TO ADD A USER
app.post('/users', (req, response) => {
  // GET THE USER FROM THE REQUEST BODY
  const user = req.body;

  // INSERT QUERY
  let insertQuery = `insert into users(name, adress) values('${user.name}', '${user.adress}')`

  // INSERT INTO  DATABASE
  client.query(insertQuery, (err, result) => {
    if (!err) {
      response.header("Access-Control-Allow-Origin", "*");
      response.send('Insertion was successful')
    }
    else { console.log(err.message) }
  })
  client.end;
})
