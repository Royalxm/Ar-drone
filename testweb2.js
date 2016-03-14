var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var fs = require('fs'); // required for file serving

var arDrone = require('ar-drone');
var arDroneConstants = require('ar-drone/lib/constants');
var client  =  arDrone.createClient();


var pngStream = client.getPngStream();

var lastPng;
pngStream
  .on('error', console.log)
  .on('data', function(pngBuffer) {
    lastPng = pngBuffer;
  });


app.use("/", express.static(__dirname + "/Public"));


  
io.on('connection', function(socket){

  
    console.log('Un client est connecté !');
	socket.emit('battery','90');
	
	
	

	
	
    // it's possible to embed binary data
    // within arbitrarily-complex objects

  socket.emit('image', { image: true, buffer: pngStream.toString('base64') });
    console.log('image file is initialized');
 
	
	socket.on('message', function (message) {

        console.log('Un client me parle ! Il me dit : ' + message);

    }); 
	
		
});



http.listen(8080, function(){
  console.log('Server is listening on *:8080');
});