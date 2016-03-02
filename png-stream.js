// Run this to receive a png image stream from your drone.

var arDrone = require('ar-drone');
var http    = require('http');
var cv = require('opencv');

var client  =  arDrone.createClient();
console.log('Connecting png stream ...');

var pngStream = arDrone.createClient().getPngStream();

var lastPng;
pngStream
  .on('error', console.log)
  .on('data', function(pngBuffer) {
    lastPng = pngBuffer;
  });

var server = http.createServer(function(req, res) {
  if (!lastPng) {
    res.writeHead(503);
    res.end('Did not receive any png data yet.');
    return;
  }

  res.writeHead(200, {'Content-Type': 'image/png'});
  res.end(lastPng);


  cv.readImage(lastPng, function(err, im) {
  if (err) throw err;
  if (im.width() < 1 || im.height() < 1) throw new Error('Image has no size');

  im.detectObject('node_modules/opencv/data/haarcascade_frontalface_alt2.xml', {}, function(err, faces) {
    if (err) throw err;

    for (var i = 0; i < faces.length; i++) {
      face = faces[i];
      im.rectangle([face.x, face.y], [face.width, face.height], COLOR, 2);
    }

    im.save('face-detection-rectangle.png');
    console.log('Image saved to ./tmp/face-detection-rectangle.png');
  });

});
});

server.listen(8080, function() {
  console.log('Serving latest png on port 8080 ...');
});

