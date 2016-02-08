var arDrone = require('ar-drone');
var client  = arDrone.createClient();


/** @module Valeur */

module.exports = {
	/** altitude two colours together. */
	altitude: function(){
	//	var al;
		client.on('navdata', function(navdata) {
			console.log(navdata.gps.latitude);
		});
	//	return al;
	}
};