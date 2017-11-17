var express = require('express'), 
  app = express(),
  port = process.env.PORT || 8080,
  Listing = require('./api/models/listingModel'),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://admin:password@ds259855.mlab.com:59855/sharmal', {
  useMongoClient: true,
  /* other options */
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var routes = require('./api/routes/listingRoute');
routes(app);

app.listen(port);

console.log('sharmal api RESTful API server started on: ' + port);