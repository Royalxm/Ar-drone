var arDrone = require('ar-drone');
var arDroneConstants = require('ar-drone/lib/constants');

var keyb = require('./Module/keybord.js');
var speed = require('./Module/vitesse.js');
//var valeur = require('./Module/valeur.js');



process.stdin.setEncoding('UTF-8');
process.stdin.setRawMode(true);


// PROTOTYPE :

String.prototype.trim = function(){
	return this.replace(/^\s+|\s+$/g,"");
};

//valeur.altitude();


/**
 * Represents a navdataOptionMask.
 * @constructor
 */

function navdataOptionMask(c) {
  return 1 << c;
}

var navdataOptions = (
    navdataOptionMask(arDroneConstants.options.DEMO)
  | navdataOptionMask(arDroneConstants.options.VISION_DETECT)
  | navdataOptionMask(arDroneConstants.options.MAGNETO)
  | navdataOptionMask(arDroneConstants.options.WIFI)
  |  navdataOptionMask(arDroneConstants.options.RAW_MEASURES)
);

// Connect and configure the drone
var client = new arDrone.createClient();
client.config('general:navdata_demo', true);
client.config('general:navdata_options', navdataOptions);


	client.on('navdata',function(data){
		if(data.demo && data.wifi)
		{
			console.log("Demo :");
			//console.log(data.demo);
		
			
				console.log(data.demo.velocity);
				console.log(data.wifi.linkQuality);
		}
	
	
	//console.log(data.time);	
	});
	
		
speed.iniz();
console.log(speed.vitesse());



//console.log(navdata.demo);

process.stdin.on('readable', () => {
	
	
 var chunk = process.stdin.read();

 if (chunk !== null) {
   keyb.keybord(chunk);
  }
  
  client.stop();

 
 });
 


   
