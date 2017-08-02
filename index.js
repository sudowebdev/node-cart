const express = require('express');
const app = express();

app.get('/', function(req, res) {
  res.send('Hello World');
});

app.listen(2345, function() {
  console.log('Listening at localhost:2345');
})
