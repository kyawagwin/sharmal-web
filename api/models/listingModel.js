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
  status: {
    type: String,
    default: 'pending'
  }
}, {timestamps: true});

module.exports = mongoose.model('Listings', ListingSchema);