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
			if (selectedButtons.length > 1) {
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
    var mensaje ="EL RIFON DE ACAPULCO " + "Hola " + nombre + "de " + estado + " Tu número de telefono es " + whatsapp ;
  
    // Redirigimos a la URL de WhatsApp con los parámetros necesarios
    window.location.href = "https://api.whatsapp.com/send?phone=+527442083547&text=" + encodeURIComponent(mensaje);
   buttonRow.disabled=true; 
  }
    
}
// Guardar los botones seleccionados
var botones_seleccionados = [];  // Inicializar la lista
$(".btn").each(function() {
  if ($(this).hasClass("active")) {
    botones_seleccionados.push($(this).text());  // Agregar el valor del botón a la lista
    $(this).prop("disabled", true);  // Desactivar el botón
  }
});
localStorage.setItem("selectedButtons", JSON.stringify(botones_seleccionados));

// Recuperar los botones seleccionados
var botones_guardados = localStorage.getItem("selectedButtons");
if (botones_guardados) {
  botones_seleccionados = JSON.parse(botones_guardados);
  for (var i = 0; i < botones_seleccionados.length; i++) {
    $(".btn").filter(function() {
      return $(this).text() === botones_seleccionados[i];
    }).addClass("active").prop("disabled", true);  // Marcar el botón como seleccionado y desactivarlo
  }
}


