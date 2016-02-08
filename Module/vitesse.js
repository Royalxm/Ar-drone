var speed = 0.1;
/** @module Vitesse */

module.exports = {

/** iniz two colours together. */

  iniz: function() {
	  speed = 0.1;
  },
/** acceleration two colours together. */
  acceleration: function(){
	  speed = speed + 0.1;
	  return speed;
  },
/** ralentir two colours together. */
  ralentir: function(){
	  speed = speed - 0.1;
		return speed;
  },
/** vitesse two colours together. */
  vitesse: function(){
		return speed;
  }
};