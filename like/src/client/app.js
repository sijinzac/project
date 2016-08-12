var express = require('express');
var app = express();
app.use(express.static('/home/sijin/Project/like/src/client'));
app.use(express.static('/home/sijin/old/Hotel'));



app.get('/', function (req, res) {
  res.send('index.html');
});
app.post('/', function (req, res) {
  res.send('Got a POST request');
});
app.get('/uae', function (req, res) {
  res.sendFile('/home/sijin/old/Hotel/us.jpg');
});

app.get('/express', function (req, res) {
  res.redirect('https://expressjs.com/');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
