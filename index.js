const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

let submittedData = [];

app.post('/submit', (req, res) => {
  submittedData.push(req.body);
  res.json({ message: `Hello ${req.body.name}, form submitted!` });
});

app.get('/data', (req, res) => {
  res.json(submittedData);
  console.log('Data retrieved:', submittedData);
});

app.listen(5000, () => console.log('Backend running on port 5000'));
