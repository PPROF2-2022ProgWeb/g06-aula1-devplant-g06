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

  //validamos apellido
  if (
    txtApellido == null ||
    txtApellido.length == 0 ||
    /^\s+$/.test(txtApellido)
  ) {
    error.innerHTML = "Por favor introduzca su apellido";
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
  if (validarFormulario() == true) {                 //Alert al mandar la consulta!
    window.alert("Gracias por su consulta");
  }
}


function myFunction() {
  setTimeout(function(){ location.href = "/index.html" }, 5000);  //Redireccionar despues de 5 segundos!
}