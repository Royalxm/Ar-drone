var arDrone = require('ar-drone');
var client  = arDrone.createClient();


/** @module Valeur */

module.exports = {
	/** renvoie les valeurs de vol. */
	altitude: function(){
	//	var al;
		client.on('navdata', function(navdata) {
			console.log(navdata.gps.latitude);
		});
	//	return al;
	}
};