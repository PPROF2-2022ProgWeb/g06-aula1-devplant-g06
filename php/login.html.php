<!DOCTYPE html>
<html lang="en">

<head>

    <title>Conexión a BDD</title>

    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
   
</head>

<body>

<?php
// el nombre del archivo debe el ser el mismo del  form  
$nombre = $_POST["nombre"];
$apellido = $_POST["apellido"];
$fechaNacimiento = $_POST["fecha_nacimiento"];
$email = $_POST["mail"];
$provincia = $_POST["provincia"];
$pais = $_POST["pais"];
$password = $_POST["password"];


// con print mostramos el mensaje para validar si son correctos
print "<p>Su nombre es <strong>$nombre</strong>.</p>\n";
print "\n";
print "<p>Su apellido es <strong>$apellido</strong>.</p>\n";
print "\n";
print "<p>Su fecha de nacimiento es <strong>$fechaNacimiento</strong>.</p>\n";
print "\n";
print "<p>Su eMail es <strong>$email</strong>.</p>\n";
print "\n";
print "<p>Su provincia es <strong>$provincia</strong>.</p>\n";
print "\n";
print "<p>Su país es <strong>$pais</strong>.</p>\n";
print "\n";
print "<p>Su clave es <strong>$password</strong>.</p>\n";
print "\n";
//Incluimos los datos de conexión y las funciones.

include("datosDB.php"); // variable de conexión a la base de datos
$con = misqli_connect($host,$usuario,$clave,$basededatos)or die ("no se puede conectar al servidor de la base de datos");
if (!$con){
    die("conexión fallida: ". mysqli_connect_error());
}

$db = mysqli_select_db($con,$basededatos) or die ( "no se ha podido conectar a la base de datos";)
$consulta = "INSERT INTO usuarios ( nombre, apellido, fechaNacimiento, email,provincia, pais, password) VALUES ('$nombre','$apellido',
'$fechaNacimiento','$email', '$provincia', '$pais', '$password')";
// usamos estas variables

if(mysqli_query ($con, $consulta)){
    echo "<p>Se agregó el registro correctamente</p> ";
} else {
    echo "<p>No se agregó nuevo registro</p>";
    echo "Error:" . $consulta . "<br>" . mysqli_error($scon);
}
mysqli_close($con);
?>