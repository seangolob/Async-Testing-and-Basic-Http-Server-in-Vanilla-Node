'use strict';

var http = require('http');

var server = http.createServer(function(req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  });

  if(req.url == '/time') {
    var currentdate = new Date();
    var datetime = 'Last Sync: ' + currentdate.getDay()+ '/'+currentdate.getMonth() + '/' + currentdate.getFullYear() + ' @ ' + currentdate.getHours() + ':' + currentdate.getMinutes() + ':' + currentdate.getSeconds() + '\n';
    res.write(datetime);
  }

  var url = req.url;
  var urlArray = url.split('/');

  if(urlArray[1] == 'greet') {
    res.write('Greetings ' + urlArray[2] + '!\n');
  }

  res.end();
});

server.listen(3000);

