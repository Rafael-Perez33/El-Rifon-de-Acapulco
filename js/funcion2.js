$(document).ready(function(){
	
	
	$('.btn').click(function(){
		$(this).toggleClass('active');
		
	});

	$(document).ready(function(){
		var buttonRow = $('#lista-btn');
		for (var i = 1; i <= 1000; i++) {
			var button = $('<button class="btn btn-secondary"></button>').text(i);
			buttonRow.append(button);
		}
		$('.btn').click(function(){
			$(this).toggleClass('active');
		});
	
		$('#comprar').click(function(){
			var selectedButtons = $('.btn.active');
			if (selectedButtons.length > 0) {
				var buttonValues = [];
				selectedButtons.each(function(){
					buttonValues.push($(this).text());
				});
				console.log('Uniendo botones:', buttonValues);
	
				// Aquí puedes agregar código para abrir el formulario
				$('#formulario-modal').modal('show');
			} else {
				alert('Selecciona al menos un Boleto.');
			}
		});
	});
	
})  


function enviarFormulario() {
    // Obtenemos los valores de los campos del formulario
   
	var nombre = document.getElementById("nombre").value;
    var estado = document.getElementById("estado").value;

	var whatsapp = document.getElementById("whatsapp").value;
  
	if(nombre==='' || estado==='' || whatsapp=== ''|| whatsapp <0 & whatsapp >10 )
  {
    
  }
 
  else{
    // Creamos el mensaje que se enviará por defecto
    var mensaje 
	mensaje="EL RIFON DE ACAPULCO " + "Hola " + nombre + "de " + estado + " Tu número de telefono es " + whatsapp + " Tu numero de boleto es " +  selectedButtons ;
    // Redirigimos a la URL de WhatsApp con los parámetros necesarios
    window.location.href = "https://api.whatsapp.com/send?phone=+527442083547&text=" + encodeURIComponent(mensaje);
   buttonRow.disabled=true; 
  }
    
}




