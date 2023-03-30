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

  $('#enviar-formulario').click(function() {
    // Obtenemos los valores de los campos del formulario
    var nombre = $('#nombre').val();
    var estado = $('#estado').val();
    var whatsapp = $('#whatsapp').val();

    // Validamos los campos del formulario
    if (nombre === '' || estado === '' || whatsapp === '' || whatsapp < 0 || whatsapp > 10) {
      alert('Por favor completa todos los campos del formulario correctamente');
      return;
    }

    // Creamos el mensaje que se enviará por defecto
    var mensaje = "EL RIFON DE ACAPULCO " + "Hola " + nombre + " de " + estado + " Tu número de telefono es " + whatsapp + " Tu numero de boleto es " + buttonValues.join(', ');
    // Redirigimos a la URL de WhatsApp con los parámetros necesarios
    window.location.href = "https://whatsapp.com/send?phone=+527442083547&text=" + encodeURIComponent(mensaje);

    // Deshabilitamos los botones seleccionados
    selectedButtons.prop('disabled', true);

    // Guardamos la selección en localStorage
    var seleccion = [];
    $('.btn').each(function() {
      seleccion.push($(this).hasClass('active'));
    });
    localStorage.setItem('seleccion', JSON.stringify(seleccion));
  });

  // Cargamos la selección guardada en localStorage
  var seleccion = localStorage.getItem('seleccion');
  if (seleccion) {
    seleccion = JSON.parse(seleccion);
    $('.btn').each(function(i) {
      if (seleccion[i]) {
        $(this).addClass('active');
      }
    });
  }
});
