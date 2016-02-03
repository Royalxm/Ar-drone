var arDrone = require('ar-drone'); 
var arDroneConstants = require('ar-drone/lib/constants');

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
		if(data.demo && data.rawMeasures)
		{
			console.log("Demo :");
			//console.log(data.demo);
		
			
				console.log(data.demo.velocity);
				console.log(data.rawMeasures.accelerometers.x);
		}
		else
		{
		
		}
				


	
	//console.log(data.time);	
	});
	