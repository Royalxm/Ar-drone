var arDrone = require('ar-drone');
var client  = arDrone.createClient();


client.on('navdata.demo.altitudeMeters', console.log);

//var pngStream = client.getPngStream();
//pngStream.on('data', console.log);

//client.createRepl();

//client.takeoff();

//client.stop();

