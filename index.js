const express = require('express');
const app = express();
const port = 3010;
const path = require('path');
const mongoose = require('mongoose');
var cors = require('cors');

app.use(express.static('static'));
app.options('*', cors());
app.use(cors({ origin: 'https://react-wqgn3t.stackblitz.io' }));

// db.connect('mongodb://localhost:27017/databasename', function (err) {
//   if (err) {
//     console.log('Unable to connect to Mongo.');
//     process.exit(1);
//   } else {
//     app.listen(3000, function () {
//       console.log('Listening on port 3000...');
//     });
//   }
// });

app.get('/', (req, res) => {
  res.send('hello root route');
});
app.post('/login', (req, res) => {
  console.log(req);
  res.send({ token: 'jhsbdjhbjsdhb' });
});
app.get('/signup', (req, res) => {
  res.send('signup');
});

app.listen(port, () => {
  console.log(` app listening at http://localhost:${port}`);
});
