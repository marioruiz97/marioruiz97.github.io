//Definir el alto del background del header al tamaño del viewport
      var vHeight = $(window).height(),
      cover = $('.cover');

      cover.css({"height":vHeight,"width":'100%'});


      //Obtener el año actual con JQuery
      var anio = (new Date).getFullYear();
 
      $(document).ready(function() {
      $(".fecha").text( anio );
      });


//Código para el botón de volver arriba
$(document).ready(function(){

	$('.back-top').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 500);
	});

	//aparecer botón en scroll
	$(window).scroll(function(){
		if ( $(this).scrollTop() > 0 ){
			$('.back-top').slideDown(500);
		}
		else{
			$('.back-top').slideUp(500);
		}
	});
});


// Cargar el modal al iniciar la página
$('#miModal').modal({
	show: true
}); 



/*
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
*/