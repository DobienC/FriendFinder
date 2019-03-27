var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


var routes = require("");