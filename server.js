var express = require("express");
var app = express();
var mongojs = require("mongojs");
var db = mongojs("phonelist", ["phonelist"]);
var bodyParser = require("body-parser");

app.use(express.static(__dirname + "/view"));
app.use(bodyParser.json());

app.get('/phonelist', function(req, res) {
  console.log("I received a GET request");

  db.phonelist.find(function(err, docs) {
    console.log(docs);
    res.json(docs);
  });
});

app.post("/phonelist", function(req, res) {
  console.log(req.body);
  db.phonelist.insert(req.body, function(err, doc) {
    res.json(doc);
  });
});

app.delete("/phonelist/:id", function(req, res) {
  var id = req.params.id;
  console.log(id);
  db.phonelist.remove({_id: mongojs.ObjectId(id)}, function(err, doc) {
    res.json(doc);
  });
})

app.get('/phonelist/:id', function(req, res) {
  var id = req.params.id;
  console.log(id);
  db.phonelist.findOne({_id: mongojs.ObjectId(id)}, function(err, doc) {
    res.json(doc);
  });
});

app.put('/phonelist/:id', function (req, res) {
  var id = req.params.id;
  console.log(req.body.name);
  db.phonelist.findAndModify({
    query: {_id: mongojs.ObjectId(id)},
    update: {$set: {name: req.body.name, email: req.body.email, number: req.body.number}},
    new: true}, function (err, doc) {
      res.json(doc);
    }
  );
});

app.listen(5000);
console.log("Server running on port 5000");

