//jshint esversion:6

const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const _ = require("lodash");
const path = require("path");
mongoose.connect("mongodb+srv://chaudharybhoomika12:9jABscWt33vGJPye@cluster0.fww59p0.mongodb.net/?retryWrites=true&w=majority", {useNewUrlParser: true
});

app.use(bodyParser.urlencoded({
  extended: true
}));

app.set('view engine', 'ejs');
app.use(express.static(__dirname));

const customerSchema = {
  name: String,
  number: Number,
  email: String,
  password: String,
  data: String
};
var displayName
const Customer = mongoose.model('Customer', customerSchema);
var displayName = "Sign Up/Sign In";
var message = "";

app.get("/",function(req,res)
{
  res.render("home")
});
app.get("/signup", function(req, res) {
  res.render("signup");
});
app.get("/contact", function(req, res) {
  res.render("contact");
});
app.get("/blog", function(req, res) {
  res.render("blog");
});
app.get("/about", function(req, res) {
  res.render("about");
});
app.post("/signup", function(req, res) {
  const customerInfo = new Customer({
    name: req.body.name,
    number: req.body.number,
    email: req.body.email,
    password: req.body.password
  });
  Customer.findOne({
    email: req.body.email
  }, function(err, foundCustomer) {
    if (!err) {
      if (foundCustomer == null) {
         customerInfo.save();
         message = "You Signed Up...";
      } else {
        message = " email already exists in our record... ";
      }
    }
    res.render("message",{message:message});
  });
});
app.post("/signin", function(req, res) {
  Customer.findOne({
    email: req.body.email1
  }, function(err, foundCustomer) {
    if (!err) {
      if (foundCustomer.name != {} && foundCustomer.password === req.body.password1) {
        displayName = foundCustomer.name;
        console.log(displayName)
      }
    }
    
    res.redirect("http://192.168.173.217/");
  });
});

app.post("/message", function(req, res) {
  res.redirect("/");
});







app.listen(process.env.PORT || 3002, function() {
  console.log("Server is running at 3000");
});
