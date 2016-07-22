function size(){

	var caja, padre;

	caja= document.getElementsByClassName('curso');
	padre=caja.parentElement;

	var ancho = getWidth(padre);
	ancho = ancho * .9;
	var alto = ancho * .75;

	setStyles(ancho, alto);


	var uno, dos;
	uno = getWidth(caja);
	dos = getHeight(caja);
	console.log(uno + " " + dos);
}

function getWidth(elemento) {
	return elemento.clientWidth;
}

function getHeight(elemento){
	return elemento.clientWidth;
}

function setStyles(ancho, alto){
	var elemento = document.getElementsByClassName('curso');

	elemento.style.Width = ancho;
	elemento.style.Height = alto;
}