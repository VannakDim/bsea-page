//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/",function(req,res){
  res.render("index");
});

app.get("/about",function(req,res){
  res.render("about");
});

app.get("/contact",function(req,res){
  res.render("contact");
});

app.get("/team",function(req,res){
  res.render("team");
});

app.get("/feature",function(req,res){
  res.render("feature");
});

app.get("/service",function(req,res){
  res.render("service");
});



app.listen(process.env.PORT || 3000, function() {
  console.log("Server started on port 3000");
});
