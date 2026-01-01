const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/submit', (req, res) => {
  res.json({ message: `Hello ${req.body.name}, form submitted!` });
});

app.listen(5000, () => console.log('Backend running on port 5000'));
