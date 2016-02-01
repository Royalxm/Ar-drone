var arDrone = require('ar-drone');
var client  = arDrone.createClient();
var http    = require('http');


var speed = 0.1;
process.stdin.setEncoding('UTF-8');
process.stdin.setRawMode(true);


// PROTOTYPE :

String.prototype.trim = function(){
	return this.replace(/^\s+|\s+$/g,"");
};


function decttouch(chunk){
	chunk = chunk.trim();
switch (chunk){
			
		case "z":
		console.log("On avance");
		client.front(speed);
		//client.front(0);
		break;
		case "s":
		console.log("On recule");
		client.back(speed);
		break;
		case "d":
		console.log("On decale a droite");
		client.right(speed);
		break;
		case "q":	
		console.log("On decale a gauche");
		client.left(speed);
		break;

		case "e":
		console.log("On tourne a droite");		
		client.clockwise(speed);
		break;
		case "a":
		console.log("On tourne a gauche");
		client.counterClockwise(speed);
		break;

		case "m":
		console.log("On tourne a droite");
		client.clockwise(speed);
		break;
		case "k":
		console.log("On tourne a gauche");
		client.counterClockwise(speed);
		break; 

		case "t":
		console.log("On tourne a gauche");
		client.stop();
		break; 

		case "":
		console.log("On decole");
		client.takeoff();
		break;

		case "p":
		console.log("On atterit");
		client.land();
		//process.exit(1);
		break;
		case "l":
		console.log("On atterit");
		//client.land();
		process.exit(1);
		break;

		default:
		console.log("Acune commande reconue");
		break;


	}
}


// recupere les entre claviers

client.config('general:navdata_demo', 'FALSE');

process.stdin.on('readable', () => {
  var chunk = process.stdin.read();

 if (chunk !== null) {
   decttouch(chunk);

  }

var vartest;
//client.land();
//client.on('navdata.demo.flyState', console.log);
client.on('navdata.rawMeasures', console.log);



//console.log(vartest);
//test();


});





//var pngStream = client.getPngStream();
//pngStream.on('data', console.log);

//client.createRepl();

//client.takeoff();

//client.stop();

