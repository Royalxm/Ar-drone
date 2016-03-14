var arDrone = require('ar-drone');
var arDroneConstants = require('ar-drone/lib/constants');
var client  =  arDrone.createClient();
var keyb = require('./Module/keybord.js');
var speed = require('./Module/vitesse.js');
//var valeur = require('./Module/valeur.js');

var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var fs = require('fs'); // required for file serving


app.use("/", express.static(__dirname + "/Public"));

var  battery = 0;


process.stdin.setEncoding('UTF-8');
process.stdin.setRawMode(true);


// PROTOTYPE :

String.prototype.trim = function(){
	return this.replace(/^\s+|\s+$/g,"");
};

//valeur.altitude();


/**
 * Renvoie le mask binaire correspondant à l'option envoyer en paramettre.
 * @function
 */

function navdataOptionMask(c) {
  return 1 << c;
}

http.listen(8080, function(){
  console.log('Server is listening on *:8080');
});



var navdataOptions = (
    navdataOptionMask(arDroneConstants.options.DEMO)
  | navdataOptionMask(arDroneConstants.options.VISION_DETECT)
  | navdataOptionMask(arDroneConstants.options.MAGNETO)
  | navdataOptionMask(arDroneConstants.options.WIFI)
  |  navdataOptionMask(arDroneConstants.options.RAW_MEASURES)
  | navdataOptionMask(arDroneConstants.options.ALTITUDE)
);

// Connect and configure the drone
client.config('general:navdata_demo', false);
client.config('general:navdata_options', navdataOptions);
client.config('video:video_channel', 0);
client.config('detect:detect_type', 2);

//client.takeoff();
//client.counterClockwise(0.5);
	client.on('navdata',function(data){
		if(data.rawMeasures)
		{
			//console.log("je suis passer :");
			//console.log(data.demo);
		
			
		
				//console.log(data.rawMeasures.gyroscopes110);
			//	console.log("ALTITUDE : "+data.demo.altitude);
			//	console.log("baterie : " +data.demo.batteryPercentage);
			//	console.log("Vision : " +data.visionDetect.nbDetected);
			//	console.log("Visisssson : " +data.rawMeasures.gyroscopes110.x);
			  
			battery = data.demo.batteryPercentage;
			
			
io.on('connection', function(socket){

  
  
	socket.emit('battery',battery);
	
	
	

	
	
    // it's possible to embed binary data
    // within arbitrarily-complex objects

  
	socket.on('message', function (message) {

        console.log('Un client me parle ! Il me dit : ' + message);

    }); 
	
		
});
		}
		else
			console.log("nop");


		
		
	
	
	
	//console.log(data.time);	
	});
	
		
speed.iniz();
console.log(speed.vitesse());




//console.log(navdata.demo);

process.stdin.on('readable', () => {
	
	
 var chunk = process.stdin.read();

 if (chunk !== null) {
   keyb.keybord(chunk,client);
  }
  


 
 });
 
 

   
