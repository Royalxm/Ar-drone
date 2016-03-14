

  var socket = io();

     socket.on('battery', function(message) {
      document.getElementById("demo").innerHTML = message + "%";
    }) 
	