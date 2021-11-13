/*funcion para mostrar pop up  */
$(document).ready(function () {
  function showPopup() {
    $(".popup").addClass("show");
    $(".popup1").addClass("show");
  }
  $("#close").click(function () {
    $(".popup").removeClass("show");
    $(".popup1").removeClass("show");
  });
  setTimeout(showPopup, 2000);
});

/*funcion calculo de fechas hay 2 problemas, 1, se abre automaticamente la pagina de inicio y se lee el cartel de bienvenida, 2 una vez que se ingresa, el pop up se vuelve a abrir */

function calculateAge() {
  var d = document.getElementById("date").value;
  var inDate = new Date(d);
  var anio = inDate.getFullYear();
  var fec_actual = new Date();
  var fec_anio = fec_actual.getFullYear();
  var edad = fec_anio - anio;
  if (edad >= 18) {
    document.getElementById("resultado").innerHTML = " Bienvenido";

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
      const imagen=document.getElementById("planta1")
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
      const imagen=document.getElementById("planta3")
      imagen.src="img/planta3c.jpg"
    }
    function volverImagen3(){
      const imagen=document.getElementById("planta3")
      imagen.src="img/planta3.jpg"
    }