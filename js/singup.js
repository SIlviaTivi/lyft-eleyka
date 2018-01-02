$(document).ready(function () {
  //Seleccionando elementos del DOM
  var $telf = $('#inputTelf');
  var $btn_next = $('#singup');
  //Validar Números
  $telf.on('input', function () {
    this.value = this.value.replace(/[^0-9]/g, '');
  });
  // Validar cantidad de caracteres
  $telf.keyup(function () {
    var value = $(this).val();
    if (value.length === 10) {
      $btn_next.attr('disabled', false);
      $btn_next.css('background-color', '#e40088');
    } else {
      $btn_next.attr('disabled', 'disabled');
      $btn_next.css('background-color', '#616060');
    }
  });
  $btn_next.on('click', function (event) {
    event.preventDefault();
    //Generar codigo aleatorio
    var $code = Math.ceil(Math.random() * 1000);
    alert('Tu código: LAB-' + $code);
    //Almacenamos el codigo generado en localStorage    
    localStorage.code = $code;
    //Redireccionando a la página siguiente
    window.location.href = 'singup2.html';

  });
});