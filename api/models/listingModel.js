'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ListingSchema = new Schema({
  description: {
    type: String,
    required: 'Description is required'
  },
  price: {
    type: Number,
    default: 0
  },
  created_date: {
    type: Date,
    default: Date.now
  },
  updated_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    default: 'pending'
  }
});

module.exports = mongoose.model('Listings', ListingSchema);