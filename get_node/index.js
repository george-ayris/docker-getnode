var express = require('express'),
    http = require('http'),
    redis = require('redis');

var app = express();

var client = redis.createClient(6379, 'redis');

app.get('/getnode', function(req, res, next) {
  client.get('counter', function(err, counter) {
    if(err) return next(err);
    res.send('This page has been viewed ' + counter + ' times!\n');
  });
});

app.post('/getnode', function(req, res, next) {
    res.send('No post function here!\n');
});

http.createServer(app).listen(process.env.PORT || 8080, function() {
  console.log('Listening on port ' + (process.env.PORT || 8080));
});
