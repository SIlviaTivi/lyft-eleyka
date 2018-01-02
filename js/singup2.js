$(document).ready(function () {
  //seleccionamos elementos del DOM
  var $input_code = $('#code');
  var $btn_next = $('#singup');
  var $btn_resend = $('#resend');

  //Asociar el evento al elemento seleccionado
  $input_code.on('input', function () {
    if ($(this).val() === localStorage.code) {
      $btn_next.attr('disabled', false);
      $btn_next.css('background-color', '#e40088');

    } else {
      $btn_next.attr('disabled', 'disabled');
      $btn_next.css('background-color', '#616060');
    }
  });

  $btn_resend.on('click', function (event) {
    event.preventDefault();
    //Generar codigo aleatorio
    var $code = Math.ceil(Math.random() * 1000);
    alert('Tu código: LAB-' + $code);

    //Almacenamos el codigo generado en localStorage    
    localStorage.code = $code;
    //Redireccionando a la página siguiente

    window.location.href = 'singup2.html';

  });
  //Rediccionar a la siguiente página cuando cumpla con el código generado
  $btn_next.on('click', function () {
    window.location.href = 'singup3.html';

  });
});