const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path');
const db = require('./dbConnection.js');
const model = require('./model/index.js');

app.use(express.static(path.join(__dirname, '../client/dist/')));

app.get('/api/reviews/', (req, res) => {
  model.reviews.getAll().then(result => {
    res.json(result);
  });
});

app.get('/api/reviews/:locationId', (req, res) => {
  let locationId = req.params.locationId;
  model.reviews.getOne(locationId).then(result => {
    res.json(result);
  });
});

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
