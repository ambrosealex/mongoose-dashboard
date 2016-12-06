// here we load the Shark model that we created on the server.js page
var mongoose = require('mongoose');
var Shark = mongoose.model('Shark');
var sharks = require('../controllers/sharks.js');

module.exports = function(app) {
  app.get('/', sharks.index)
  app.get('/sharks/new', sharks.add)
  app.get('/sharks/:id', sharks.showOne)
  app.get('/sharks/edit/:id', sharks.edit)
  app.post('/create', sharks.create)
  app.post('/sharks/:id', sharks.update)
  app.get('/sharks/destroy/:id', sharks.destroy)
 }
