var http = require('http');
var arDrone = require('ar-drone');
var client  = arDrone.createClient();

function testz(client, opts) {
  var png = null;

  opts = opts || {};
  
  var server = http.createServer(function(req, res) {

    if (!png) {
      png = client.getPngStream();
      png.on('error', function (err) {
          console.error('png stream ERROR: ' + err);
      });
    }

    res.writeHead(200, { 'Content-Type': 'multipart/x-mixed-replace; boundary=--daboundary' });

    png.on('data', sendPng);

    function sendPng(buffer) {
      console.log(buffer.length);
      res.write('--daboundary\nContent-Type: image/png\nContent-length: ' + buffer.length + '\n\n');
      res.write(buffer);
    }
  });

  server.listen(opts.port || 8000);
}

testz(client,8000);