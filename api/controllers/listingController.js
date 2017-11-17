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