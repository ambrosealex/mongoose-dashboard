// require mongoose
var mongoose = require('mongoose');
// create the schema
var SharkSchema = new mongoose.Schema({
  name: String,
  type: String,
  age: Number
})
// register the schema as a model
var Shark = mongoose.model('Shark', SharkSchema);
