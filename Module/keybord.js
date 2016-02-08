var arDrone = require('ar-drone');
var client  = arDrone.createClient();
var speed = require('./vitesse.js');
/** @module Keybord */
module.exports = {
	/** keybord two colours together. */
  keybord:function (chunk){
	chunk = chunk.trim();
switch (chunk){
			
		case "z":
		console.log("On avance");
		console.log(speed.vitesse());
		client.front(speed.vitesse());
		//client.front(0);
		break;
		case "s":
		console.log("On recule");
		client.back(speed.vitesse());
		break;
		case "d":
		console.log("On decale a droite");
		client.right(speed.vitesse());
		break;
		case "q":	
		console.log("On decale a gauche");
		client.left(speed.vitesse());
		break;

		case "e":
		console.log("On tourne a droite");		
		client.clockwise(speed.vitesse());
		break;
		case "a":
		console.log("On tourne a gauche");
		client.counterClockwise(speed.vitesse());
		break;

		case "m":
		console.log("On tourne a droite");
		client.clockwise(speed.vitesse());
		break;
		case "k":
		console.log("On tourne a gauche");
		client.counterClockwise(speed.vitesse());
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

};



