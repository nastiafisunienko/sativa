$(window).on("load", function(){
    $("#back").fadeOut("slow", function(){
        $("#wrapper").fadeIn("slow")
    })
})

$(document) .ready(function(){


         //burger plugin
         $.fatNav();

    


    let boxContactar = document.querySelector("#contacta-con-nosotros");
    let h2contactar = document.querySelector("#contacta-con-nosotros h2");

    document.addEventListener("mousemove", function(e){
        let mouseX = e.clientX;
        let mouseY = e.clientY;
        let pos = boxContactar.getBoundingClientRect();
        let puntoMouseX = pos.left + pos.width / 2;
        let puntoMouseY = pos.top + pos.height / 2;
        const offsetMouseX = (mouseX - puntoMouseX) / 70;
        const offsetMouseY = (mouseY - puntoMouseY) / 70;
        h2contactar.style.textShadow = `${offsetMouseX}px ${offsetMouseY}px 5px #74be1e`;

    })  


     //FORM

    
     var patternMail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
     let patternPhone = /(\+34|0034|34)?[ -]*(6|7)[ -]*([0-9][ -]*){8}/;
 
         //NOMBRE
 
         $("#nombre").focus(function(){
             $(this).attr("placeholder", '');
             
             if ($(this).val() === '') {
                 $("#error-nombre").text("* El campo no debe estar vacio").addClass("color");
             } else {
                 $("#error-nombre").text("");
             }
         })
 
         $("#nombre").focusout(function(){
             $("#nombre").attr("placeholder", "Juan");
         })
 
         $("#nombre").keyup(function(){
     
             if($(this).val().length <= 2) {
                 $("#error-nombre").text("* El valor debe ser mas de 2 caracteres").addClass("color");
             } else {
                 $("#error-nombre").text("");
             }
 
         })
 
 
         //APELLIDO 
         $("#apellido").focus(function(){
             $(this).attr("placeholder", '');
             
             if ($(this).val() === '') {
                 $("#error-apellido").text("* El campo no debe estar vacio").addClass("color");
             } else {
                 $("#error-apellido").text("");
             }
         })
 
         $("#apellido").focusout(function(){
             $(this).attr("placeholder", "Carlos");
         })
 
         $("#apellido").keyup(function(){
     
             if($(this).val().length <= 2) {
                 $("#error-apellido").text("* El valor debe ser mas de 2 caracteres").addClass("color");
             } else {
                 $("#error-apellido").text("");
             }
 
         })
 
         //EMAIL 
 
         $("#email").focus(function(){
 
             $(this).attr("placeholder", '');
             if ($(this).val() === '') {
                 $("#error-email").text("* El campo no debe estar vacio").addClass("color");
             } else {
                 $("#error-email").text("");
             }
         }).focusout(function(){
             $(this).attr("placeholder", "juancarlos@gmail.com");
         });
 
         $("#email").on("input", function(e){
            
             if (!patternMail.test($("#email").val())) {
                 $("#error-email").text("* Por favor, introduzca el e-mail correcto").addClass("color");
             } else {
                 $("#error-email").text("")
             }
         })
 
 
         //PHONE NUMBER
 
         $("#movil").focus(function(){
             $(this).attr("placeholder", "");
 
             if ($(this).val() === '') {
                 $("#error-movil").text("* El campo no debe estar vacio").addClass("color");
             } else {
                 $("#error-movil").text("");
             }
         }).focusout(function(){
             $(this).attr("placeholder", "+ 34 777 777 777")
         })
 
         $("#movil").on("input", function(){
             if(!patternPhone.test($("#movil").val())) {
                 $("#error-movil").text("* Por favor, introduzca el numero correcto").addClass("color");
             } else {
                 $("#error-movil").text("");
             }
         })
 
         //TEXTAREA
 
         $("#textarea").focus(function(){
             $(this).attr("placeholder", "");
 
             if ($(this).val() === '') {
                 $("#error-textarea").text("* El campo no debe estar vacio").addClass("color");
             } else {
                 $("#error-textarea").text("");
             }
         }).focusout(function(){
             $(this).attr("placeholder", "Tu mensaje")
         })
 
         $("#textarea").keyup("textarea", function(){
             if($(this).val().length <= 10) {
                 $("#error-textarea").text("* El valor debe ser mas de 10 caracteres").addClass("color");
             } else {
                 $("#error-textarea").text("");
             }
         })
 
         //CHECKBOX
 
        
 
 
 
 
         //VALIDACION ANTES DE ENVIAR
 
         $("#form").submit(function(){
             let valid = true;
             //NOMBRE
 
             if($("#nombre").val() === "") {
                 $("#error-nombre").text("* El campo no debe estar vacio").addClass("color");
                 valid = false;
                 
             } else {
                 $("#error-nombre").text("");
             }
 
             if ($("#nombre").val().length <= 2) {
                 $("#error-nombre").text("* El valor debe ser mas de 2 caracteres").addClass("color");
                 valid = false;
             }
 
             //APELLIDO
 
             if($("#apellido").val() === "") {
                 $("#error-apellido").text("* El campo no debe estar vacio").addClass("color");
                 valid = false;
                 
             } else {
                 $("#error-apellido").text("");
             }
 
             if ($("#apellido").val().length <= 2) {
                 $("#error-apellido").text("* El valor debe ser mas de 2 caracteres").addClass("color");
                 valid = false;
             }
 
             //MAIL
 
             if (!patternMail.test($("#email").val()) || $("#email").val().length === 0) {
                 $("#error-email").text("* Por favor, introduzca la direccion correcta").addClass("color");
                 valid = false;
             } else {
                 $("#error-email").text("");
             }
 
             //MOVIL
             if(!patternPhone.test($("#movil").val()) || $("#movil").val().length === 0) {
                 $("#error-movil").text("* Por favor, introduzca el numero de telefono correcto").addClass("color");
                 valid = false;
             } else {
                 $("#error-movil").text("");
             }
 
             //TEXTAREA
             if ($("#textarea").val().length <= 10) {
                 $("#error-textarea").text("* Por favor, introduzca mas de 10 caracteres").addClass("color");
                 valid = false;
             } else {
                 $("#error-textarea").text("");
             }
 
             //CHECKBOX
 
             //CAPTCHA
 
             if ($("#human").is(":checked")) {
                 $("#captcha-error").text("")
 
             } else {
                 $("#captcha-error").text("* Por favor, seleccione el campo").addClass("color");
                 valid = false;
                 
             }
 
             //POLITICA DE PRIVACIDAD
             if ($("#privacidad").is(":checked")) {
                 $("#privacidad-error").text("");
             } else {
                 $("#privacidad-error").text("* Por favor, seleccione el campo").addClass("color");
                 valid = false;
             }
 
 
             return valid;
         })
 
})