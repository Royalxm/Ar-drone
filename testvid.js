var cv = require('opencv');
var arDrone = require('ar-drone');
var arDroneConstants = require('ar-drone/lib/constants');
var client  =  arDrone.createClient();
var fs = require('fs');
var keyb = require('./Module/keybord.js');
var speed = require('./Module/vitesse.js');


var pngStream = client.getPngStream();
var frameCounter = 0;
var period = 500; // Save a frame every 5000 ms.
var lastFrameTime = 0;
  var COLOR = [0, 255, 0]; // default red

  speed.iniz();
console.log(speed.vitesse());

process.stdin.setEncoding('UTF-8');
process.stdin.setRawMode(true);


String.prototype.trim = function(){
	return this.replace(/^\s+|\s+$/g,"");
};
//console.log(navdata.demo);

process.stdin.on('readable', () => {
	
var boole = 0;
	
 var chunk = process.stdin.read();

 if (chunk !== null) {
   keyb.keybord(chunk,client);
  }
  


 
 });

pngStream
.on('error', console.log)
.on('data', function(pngBuffer) {
	var now = (new Date()).getTime();
	if (now - lastFrameTime > period) {
		frameCounter++;
		boole = 0;
		lastFrameTime = now;
		console.log('Saving frame');
		fs.writeFile('frame.png', pngBuffer, function(err) {
			if (err) {
				console.log('Error saving PNG: ' + err);
			}
			else
			{
				cv.readImage('frame.png', function(err, im) {
					if (err) throw err;
					if (im.width() < 1 || im.height() < 1) throw new Error('Image has no size');

					im.detectObject('./node_modules/opencv-wind/data/haarcascade_frontalface_alt.xml', {}, function(err, faces) {
						if (err) throw err;

						for (var i = 0; i < faces.length; i++) {
							face = faces[i];
							im.rectangle([face.x, face.y], [face.width, face.height], COLOR, 2);
							im.save('face-detection-rectangle.png');
							console.log('Image saved to ./tmp/face-detection-rectangle.png');
							boole = 1;
							//client.front(speed.vitesse());
						}

							if(boole == 1)
							{
								client.front(speed.vitesse());
									boole = 0;
							}
							else
							{
								client.stop();
								
							}

					});

				});
				
			}
		});
	}
});