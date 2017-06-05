const express = require('express');
const body_parser = require('body-parser');
const app = express();

const port = process.env.PORT || 3000;

app.use(body_parser.json());
app.use(body_parser.urlencoded({
  extended: true,
}));

app.use('/', require('./routes')(express));

exports.server = app.listen(port, () => {
    console.log('The Server is running on', port);
});
