$(document).ready(function () {
    //Seleccionando elementos del DOM
    var $first_name = $('#first_name');
    var $last_name = $('#last_name');
    var $email = $('#email');
    var $btn_next = $('#singup');
    var $checkbox = $('#checkbox');

    var validateFname = false;
    var validateLname = false;
    var validateEmail = false;
    var validateChecked = false;
    // Aqui indicar que se puede implementar la función como variable
    function activeButton() {
        if (validateFname && validateLname && validateEmail && validateChecked) {

            $btn_next.attr('disabled', false);
            $btn_next.css('background-color', '#e40088');
        }
    }

    function desactiveButton() {
        $btn_next.attr('disabled', 'disabled');
        $btn_next.css('background-color', '#616060');
    }
    //Validar First Name
    $first_name.on('keyup', function (event) {
        if ($first_name.val()) {
            validateFname = true;
            activeButton();
        } else {
            desactiveButton();
        }

    });
    //Validar Last Name
    $last_name.on('keyup', function (event) {
        if ($last_name.val()) {
            validateLname = true;
            activeButton();
        } else {
            desactiveButton();
        }
    }); 

    //Validación de Email
    $email.on('input', function (event) {
        // console.log(event.target.value);
        var REGEXEMAIL = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
        console.log(REGEXEMAIL.test($(this).val()));
        console.log($(this).val());
        if (REGEXEMAIL.test($(this).val())) {
            validateEmail = true;
            activeButton();
        } else {
            desactiveButton();
        }
    });

    //Validación de Checkbox
    $checkbox.on('click', function (event) {
        if (event.target.checked) {
            //   alert('entre');
            validateChecked = true;
            activeButton();
        } else {
            desactiveButton();
        }
    });
    $btn_next.on('click', function (event) {
        event.preventDefault();
        localStorage.email = $email.val();
        window.location.href = 'close.html';
        swal("¡Bien!", "Has hecho clic en el botón :)", "success");

    });
});