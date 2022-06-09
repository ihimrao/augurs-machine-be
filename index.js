const express = require('express');
const app = express();
const port = 3010;
const path = require('path');
const mongoose = require('mongoose');
var cors = require('cors');
require('dotenv').config();
app.use(express.static('static'));
const userModel = require('./models');
var corsOptions = {
  origin: '*',
  preflightContinue: false,
  optionsSuccessStatus: 200,
};
mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function () {
  console.log('Connected successfully');
});

app.get('/', (req, res) => {
  res.send('hello root route');
});

app.post('/login', cors(corsOptions), (req, res) => {
  console.log(req);
  res.send({ token: 'jhsbdjhbjsdhb' });
});
app.get('/signup', async (req, res) => {
  const user = new userModel(request.body);

  try {
    await user.save();
    response.send(user);
  } catch (error) {
    response.status(500).send(error);
  }
  res.send('signup');
});

app.listen(port, () => {
  console.log(` app listening at http://localhost:${port}`);
});
