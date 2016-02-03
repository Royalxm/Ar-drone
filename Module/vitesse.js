var speed = 0.1;

module.exports = {

  iniz: function() {
	  speed = 0.1;
  },
  acceleration: function(){
	  speed = speed + 0.1;
	  return speed;
  },
  ralentir: function(){
	  speed = speed - 0.1;
		return speed;
  },
  vitesse: function(){
		return speed;
  }
};