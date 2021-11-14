// funcion para mostrar pop up, echa en JS con libreria JQuery.
$(document).ready(function () {             //Función que hace que se muestre la ventana emergente en la página de terminos y condiciones.
  function showPopup() {                    // le damos nombre a la función
    $(".popup").addClass("show");           //llamamos a la clase popup (que es la imagen que cubre todo la pagina de color gris transparente)
    $(".popup1").addClass("show");          //lamamos a la clase popup1 (que es la ventana modal que contiene a la función calculateAge, que es la que nos dice que si es o no mayor de edad)
  }
  $("#close").click(function () {           //funcion que hace que funcione el "close" (cruz) para cerrar la ventana emergente.
    $(".popup").removeClass("show");         //con el removeClass, hacemos desaparecer el bloqueo de la ventana modal una vez que se da válido el id"resultado" de la funcion de JS.
    $(".popup1").removeClass("show");       
  });
  
  setTimeout(showPopup, 2000);  // tiempo desde que se abre la página y aparece el popup.

});

// Problema pop up: una vez que se ingresa, el pop up se vuelve a abrir y solo desaparece si se cierra con el close. 
function calculateAge() {
  var d = document.getElementById("date").value;
  var inDate = new Date(d);
  var anio = inDate.getFullYear();
  var fec_actual = new Date();
  var fec_anio = fec_actual.getFullYear();
  var edad = fec_anio - anio;
  if (edad >= 18) {
    document.getElementById("resultado").innerHTML = " ";
  
   window.open("popup_terminos.html", "_self");
  } else {
    document.getElementById("resultado").innerHTML =
      "Para navegar en DevPlant tenes que ser mayor de 18 años";
  }
  
}

function validarFormulario() {
  var txtNombre = document.getElementById("Nombre").value;
  var txtApellido = document.getElementById("Apellido").value;
  var txtEmail = document.getElementById("Email").value;
  var txtConsulta = document.getElementById("Consulta").value;
  var error = document.getElementById("error");
  error.innerHTML = " ";

  //validamos nombre
  if (txtNombre == null || txtNombre.length == 0 || /^\s+$/.test(txtNombre)) {
    error.innerHTML = "Por favor introduzca su nombre";
    return false;
  }
  if (txtNombre.length <= 2) {
    error.innerHTML = "Nombre tiene q ser mas de 2 letras";
    return false;
  }
  //validamos apellido
  if (txtApellido == null || /^\s+$/.test(txtApellido)) {
    error.innerHTML = "Por favor introduzca su apellido";
    return false;
  }

  if (txtApellido.length <= 2) {
    error.innerHTML = "Apellido tiene q ser mas de 2 letras";
    return false;
  }

  //validamos email
  if (!/\S+@\S+\.\S+/.test(txtEmail)) {
    error.innerHTML = "Por favor introduzca un eMail válido";
    return false;
  }
  //validamos consulta
  if (
    txtConsulta == null ||
    txtConsulta.length == 0 ||
    /^\s+$/.test(txtConsulta)
  ) {
    error.innerHTML = "Por favor introduzca su mensaje";
    return false;
  }
  //salimos del bucle
  return true;
}

function alerta() {
  if (validarFormulario() == true) {
    //Alert al mandar la consulta!
    window.alert("Gracias por su consulta!");
  }

}
 

//funcion para redireccionar desde redireccion a index.html.
function myFunction() {
  //Alert al mandar la consulta!
  setTimeout(function () {
    location.href = "/index.html";
  }, 5000); //Redireccionar despues de 5 segundos!
 }

//evento para que las fotos de las plantas cambien cuando se pasa el cursos por encima

  //PLANTA1
    function cambiarImagen1(){
      const imagen=document.getElementById("planta1");
      imagen.src="img/planta1a.jpg"
    }
    function volverImagen1(){
      const imagen=document.getElementById("planta1")
      imagen.src="img/planta1.jpg"
    }
    
    //PLANTA2
    function cambiarImagen2(){
      const imagen=document.getElementById("planta2")
      imagen.src="img/planta2b.jpg"
    }
    function volverImagen2(){
      const imagen=document.getElementById("planta2")
      imagen.src="img/planta2.jpg"
    }
    
    //PLANTA3
    function cambiarImagen3(){
      const imagen=document.getElementById("planta3");
      imagen.src="img/planta3c.jpg";
    };
    function volverImagen3() {
      const imagen=document.getElementById("planta3");
      imagen.src="img/planta3.jpg";

      };


function captura(){
        var usuario= document.getElementById("usuario").value;
        var password = document.getElementById("password").value
        alert(usuario);
        alert (password);

      }