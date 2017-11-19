'use strict';

module.exports = function(app) {
  var listing = require('../controllers/listingController');

  app.route('/api/listings').get(listing.getAll).post(listing.create);

  app.route('/api/listings/generate').get(listing.generate);

  app.route('/api/listings/:id').get(listing.get).put(listing.update).delete(listing.delete);
}