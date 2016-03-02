/*

  Vole autonome v 1

  Le drone avance tout droit, lorsqu'une collision est détécter
  le drone tourne à droite et continue tout droit !

  La collision est manuelle, i.e j'appuie sur une touche pour que le
  drone "repere" la colision.
 
 03/02/2016

*/

var events = require('events');
var arDrone = require('ar-drone');
var client  = arDrone.createClient();
var http    = require('http');

var colision = false;
var droneVol = true;
var speed = 0.01;
var spin = 0.5;

var eventEmitter = new events.EventEmitter();

var flyteState = "Au sol";
process.stdin.setEncoding('UTF-8');
process.stdin.setRawMode(true);

// PROTOTYPE :

String.prototype.trim = function(){
	return this.replace(/^\s+|\s+$/g,"");
};


var colisionEvent = function colisionEvent() {
   console.log('colisionEvent executed.');
   gereColision();
}

var colisionEventStop  = function colisionEventStop() {
   console.log('ColisionEventStop executed.');
   aucuneColission();
}


eventEmitter.addListener('ColisionEventStop', colisionEventStop);
eventEmitter.addListener('ColisionEvent', colisionEvent);

function gereColision () {

  	client.stop();
  	console.log("Colission - Le drone s'arrete");

	client.clockwise(spin);
	console.log("Colission - Le drone tourne tant que aucune colision");
	flyteState = "Tourne en recherche de non colision";

}


function aucuneColission () {

	console.log("Le drone arete de de tourne");
	client.clockwise(0);
	console.log("Le drone avance");
	flyteState = "Avance";
  	client.front(speed);

  

}

function decttouch(chunk){
	chunk = chunk.trim();
switch (chunk){
			
		case "z":
		console.log("On avance");
		client.front(speed);
		eventEmitter.emit('ColisionEventStop');
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
		client.clockwise(spin);
		break;
		case "a":
		console.log("On tourne a gauche");
		client.counterClockwise(spin);
		break;

		case "m":
		console.log("On tourne a droite");
		client.clockwise(spin);
		break;
		case "k":
		console.log("On tourne a gauche");
		client.counterClockwise(spin);
		break; 

		case "t":
		console.log("On stop");
		client.stop();
		break; 

		case "":
		console.log("On decole");

		droneVol = true;
		flyteState = "Decolage";
		client.takeoff();
		//eventEmitter.emit('ColisionEventStop');
		break;

		case "p":
		console.log("On atterit");
		client.land();
		flyteState = "Au sol";
		//process.exit(1);
		break;
		case "l":
		console.log("On atterit");
		//client.land();
		flyteState = "Au sol";
		process.exit(1);
		break;

		case "w":
		console.log("Calibrage");

		client.ftrim()
		break;
		
		case "c":
		colision = !colision;
		if (colision){
			console.log("Colission -  Collision detecter");
			eventEmitter.emit('ColisionEvent');
		}
		else {
			console.log("Colission -  Le champs est libre");
			eventEmitter.emit('ColisionEventStop');
		}

		break;

		default:
		console.log("Acune commande reconue");
		//client.stop();
		break;


	}
}



process.stdin.on('readable', () => {

   var chunk = process.stdin.read();

  if (chunk !== null) {
    decttouch(chunk);
   }

});



function wait10sec(){
    setTimeout(function(){
 		printStateDrone(wait10sec);
    }, 1000);
}

function printStateDrone(callback){
   
       
   console.log("Le drone est " + flyteState);
  
	callback();

}
printStateDrone(wait10sec);
