var mongoose = require('mongoose');
var Shark = mongoose.model('Shark');
module.exports = {
  index: function(req, res) {
    var context = {};
    Shark.find({}, function(err, sharks) {
        if(err) {
          console.log('something went wrong');
      }
      else {
            console.log("SHARKS HERE", sharks);
            if(sharks){
                context = {
                    sharks : sharks
                };
            }
      };
      res.render('index', context);
    });
  },
  add: function(req, res) {
    res.render("add");
  },
  create: function(req, res) {
    var shark = new Shark({name: req.body.name, type: req.body.type, age: req.body.age});
    shark.save(function(err) {
        if(err){
            console.log("something went wrong");
        } else {
            res.redirect('/');
        };
    });
  },
  edit: function(req, res) {
    var shark_id = req.params.id;
    Shark.find({_id : shark_id}, function(err,shark){
        if(err){
            console.log("something went wrong: ", err);
        } else {
            console.log("EDIT SHARK", shark);
            res.render('edit', {shark:shark})
        }
    })
  },
  update: function(req,res) {
      var shark_id = req.params.id;
      Shark.update({_id: shark_id}, {name: req.body.name, type: req.body.type, age: req.body.age}, function(err){
          if(err){
              console.log("something went wrong: ", err);
          }else{
              res.redirect('/')
          }
      })
  },
  destroy: function(req,res) {
      var shark_id = req.params.id;
      Shark.remove({_id: shark_id}, function(err){
          if(err){
              console.log("something went wrong: ", err);
          }else{
              res.redirect('/')
          }
      })
  },
  showOne: function(req,res) {
      var shark_id = req.params.id;
      Shark.find({_id : shark_id}, function(err,shark){
          if(err){
              console.log("something went wrong");
          } else {
              console.log("ONE SHARK", shark);
              res.render('shark', {shark:shark})
          }
      })
  }
}
