var twitt = document.getElementById('btn'),
	char = 140;
	

twitt.addEventListener('click', function(){
	//debemos tomar el texto ingresado en el textarea
	var msg = document.getElementById('message').value;

	//se limpia el textarea
	document.getElementById('message').value = '';

	//contenedor que esta en el html
	var twittRepo = document.getElementById('twittRepo');

	//creamos el div que contiene cada nuevo twitt
	var newTwitt = document.createElement('div');

	//validar que textarea tenga un msje
	if(msg.length == 0 || msg == null) {
		return false;
	}

	var textNewTwitt = document.createTextNode(msg);

	var textNewTwitt = document.createElement('p');
	twittRepo.appendChild(textNewTwitt);
	

})

