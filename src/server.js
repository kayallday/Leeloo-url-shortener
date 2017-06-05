var express = require('express');
var body_parser = require('body-parser');
var app = express();

// app.use(body_parser.json());
// app.use(body_parser.urlencoded({
//     extended: true
// }));


var port = 3000;
// var port = process.env.PORT || 3000;

app.use(body_parser.json());

app.use('/api/v1', require('../src/routes/api.js')(express));

var server = app.listen(port, function () {
    console.log('The Server is running on', port);
});

module.exports = server;
