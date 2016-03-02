var cv = require('opencv');
var arDrone = require('ar-drone');
var arDroneConstants = require('ar-drone/lib/constants');
var client  =  arDrone.createClient();
try {


var video = arDrone.createClient().getVideoStream();
  var COLOR = [0, 255, 0]; // default red
  var camera = new cv.VideoCapture(0);
  camera.setWidth(320);
  camera.setHeight(240);
  var window = new cv.NamedWindow('Video', 0);
  var camFps = 10;
  var trim = 1000 / camFps;
  
  setInterval(function() {
    camera.read(function(err, im) {
      if (err) throw err;
      console.log(im.size())
    
      window.blockingWaitKey(0, 50);
    im.detectObject('node_modules/opencv/data/haarcascade_frontalface_alt2.xml', {}, function(err, faces) {
    if (err) throw err;

    for (var i = 0; i < faces.length; i++) {
      face = faces[i];
      im.rectangle([face.x, face.y], [face.width, face.height], COLOR, 2);
    }

   // im.save('face-detection-rectangle.png');
    window.show(im);
   // console.log('Image saved to ./tmp/face-detection-rectangle.png');
  });

    });
  }, trim);
  
} catch (e){
  console.log("Couldn't start camera:", e)
}





/*





var pngStream = client.getPngStream();
var frameCounter = 0;
var period = 5000; // Save a frame every 5000 ms.
var lastFrameTime = 0;
 setInterval(function() {
pngStream
  .on('error', console.log)
  .on('data', function(pngBuffer) {
    var now = (new Date()).getTime();
    if (now - lastFrameTime > period) {
       frameCounter++;
      lastFrameTime = now;
      console.log('Saving frame');





      fs.writeFile('frame.png', pngBuffer, function(err) {
        if (err) {
          console.log('Error saving PNG: ' + err);
        }        
      });

 setInterval(function() {
  cv.readImage('frame.png', function(err, im) {
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
 }, 1000);

    }
  });
 }, 1000);

*/