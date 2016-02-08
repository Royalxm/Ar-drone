var speed = 0.1;
/** @module Vitesse */

module.exports = {

/** Initialise la valeurs de vitesse. Entre 0 (Min) 1 (Max). */

  iniz: function() {
	  speed = 0.1;
  },
/** Incremente la valeur speed de 0.1. Attention de pas depasser 1. */
  acceleration: function(){
	  speed = speed + 0.1;
	  return speed;
  },
/** decremente la valeur speed de 0.1. Attention de pas depasser 0. */
  ralentir: function(){
	  speed = speed - 0.1;
		return speed;
  },
/** Renvoie la valeur de speed. */
  vitesse: function(){
		return speed;
  }
};