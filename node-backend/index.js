var express = require('express');

var app = express();

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.get('/addUser', function (req, res) {
});

app.listen(6000, function () {
    console.log('Example app listening on port 3000!');
});
