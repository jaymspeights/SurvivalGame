'use strict';

let express = require('express');
let app = express();
let HS = 0;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/game.html');
});

app.get('/*', function(req, res){
  let score = Integer.parseInt(req.url);
  if (score > HS) {
    HS = score;
    res.sendStatus(200);
  }
  else res.sendStatus(500);
});

setInterval(function(){console.log(HS)}, 2000);

console.log('listening');
app.listen(80);
