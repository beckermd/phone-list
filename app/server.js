var express = require("express");
var app = express();
var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/test');


//var User = mongoose.model("User", {phoneNumber: String});

var userSchema = mongoose.Schema({
  phoneNumber: String
});

var User = mongoose.model('User', userSchema);

var user = new User({phoneNumber: "(777) 777-7777"});
user.save(function(err, data) {
  if(err) {
    console.log(err);
  } else {
    console.log(data);
  }
})

app.use(express.static(__dirname + "/view"));

app.listen(5000);
console.log("Listening on port 5000....");