//var arDrone = require('ar-drone');
//var client  = arDrone.createClient();
var speed = require('./vitesse.js');
/** @module Keybord */
module.exports = {
	/** Ce Module permet de recuperer les entrez clavier de l'utilisateur. Il permet le controle manuelle du drone.  */
  keybord:function (chunk,client){
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
		client.clockwise(speed.rotvitesse());
		break;
		case "a":
		console.log("On tourne a gauche");
		client.counterClockwise(speed.rotvitesse());
		break;

		case "v":
		console.log("On tourne a gauche");
		client.counterClockwise(0.1);
		break;

		case "m":
		console.log("On tourne a droite");
		client.clockwise(speed.rotvitesse());
		break;
		case "k":
		console.log("On tourne a gauche");
		client.counterClockwise(speed.rotvitesse());
		break; 

		case "t":
		console.log("Stop");
		client.stop();
		break; 
		case "u":
		console.log("Up");
		client.up(speed.vitesse());
		
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



