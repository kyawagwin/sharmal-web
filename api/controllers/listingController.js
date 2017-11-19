'use strict';

var mongoose = require('mongoose'),
  Listing = mongoose.model('Listings');

exports.getAll = function(req, res) {
  Listing.find({}, function(err, listings) {
    if(err) {
      res.send(err);
    }
    
    res.json({"listings" : listings});
  });
};

exports.create = function(req, res) {
  var newListing = new Listing(req.body);
  newListing.save(function(err, listing) {
    if(err) {
      res.send(err);
    }

    res.json(listing);
  });
};

exports.get = function(req, res) {
  Listing.findById(req.params.id, function(err, listing) {
    if(err) {
      res.send(err);    
    }

    res.json(listing);
  });
};

exports.update = function(req, res) {
  Listing.findByIdAndUpdate({_id: req.params.id}, req.body, function(err, listing) {
    if(err) {
      res.send(err);
    }

    res.json({message: 'Listing successfully updated.'});
  });
};

exports.delete = function(req, res) {
  Listing.remove({_id: req.params.id}, function(err, listing) {
    if(err) {
      res.send(err);      
    }

    res.json({message: 'Listing successfully deleted.'});
  });
};

// dummy data generation
exports.generate = function(req, res) {
  var i = 0;
  var listings = [];
  var newListing;
  var arrStatus = ['pending', 'approved', 'rejected'];
  for(var i = 1; i <= 100; i++) {
    newListing = new Listing({
      description: "Hello world " + i,
      price: i * 100,
      status: arrStatus[i % 3]
    });

    listings.push(newListing);

    if (i == 100) {
      Listing.collection.insert(listings, function(err, listings) {
        if(err) {
          res.send(err);
        }

        res.json({message: 'Listing dummy data generated successfully.'});
      });

      res.json({message: 'Listing dummy data generated.'});
    }
  }
};