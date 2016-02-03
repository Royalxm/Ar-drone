var keyb = require('.Module/keybord.js');
var speed = require('.Module/vitesse.js');
var arDrone = require('ar-drone');
var client  = arDrone.createClient();
var http    = require('http');



process.stdin.setEncoding('UTF-8');
process.stdin.setRawMode(true);


// PROTOTYPE :

String.prototype.trim = function(){
	return this.replace(/^\s+|\s+$/g,"");
};



speed.iniz();
console.log(speed.vitesse());

speed.acceleration();
console.log(speed.vitesse());

client.config('general:navdata_demo', 'FALSE');

process.stdin.on('readable', () => {
  var chunk = process.stdin.read();

 if (chunk !== null) {
   keyb.keybord(chunk);
  }
  client.stop();
client.on('navdata.rawMeasures', console.log);




});
