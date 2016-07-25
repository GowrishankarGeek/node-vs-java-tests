/**
 * Module dependencies.
 */
var express = require('express');
var app = express();

app.get('/hello', function(req, res){
  res.send("result:[{app:"name", std:"hgfhgfhgfh"},{app:"name", std:"hgfhgfhgfh"},{app:"name", std:"hgfhgfhgfh"},{app:"name", std:"hgfhgfhgfh"}]");
});

app.listen(8081);
