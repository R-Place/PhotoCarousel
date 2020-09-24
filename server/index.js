const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')
const db = require('../database/index.js')
const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.post('/api/addresses', (req, res) => {
  db.save(req.body, (err, data) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send();
    }
  });
});

app.get('/api/addresses', (req, res) => {
  db.retrieve((err, data) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})