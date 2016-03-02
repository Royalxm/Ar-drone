var arDrone = require('ar-drone')
  ,  arDroneConstants = require('ar-drone/lib/constants')
  ;

// From the SDK.
var navdata_options = (
    navdata_option_mask(arDroneConstants.options.DEMO)
  | navdata_option_mask(arDroneConstants.options.VISION_DETECT)
  | navdata_option_mask(arDroneConstants.options.MAGNETO)
  | navdata_option_mask(arDroneConstants.options.WIFI)
);

// Connect and configure the drone
var client = new arDrone.createClient();
client.config('general:navdata_demo', true);
client.config('general:navdata_options', navdata_options);
client.config('video:video_channel', 1);
client.config('detect:detect_type', 12);

// Add a handler on navdata updates
client.on('navdata', function (d) {
    if (d.visionDetect.nbDetected > 0) {
        console.log("Detected: %j", d.visionDetect);
    }
});