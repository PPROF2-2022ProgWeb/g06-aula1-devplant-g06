<?php// apertura de php

$host = "localhost";// servidor remoto
$usuario = "root";// usuario que asignemos a BD
$clave = "root";// clave que inventamos
$basededatos = "dev_devplant";// Nombre de la base de datos

$conn = new mysqli($host,$usuario,$clave,$basededatos); // variables + consulta.
mysqli_query($conn , "SET character_set_result=utf8");//para que los datos se lean en utf8.

if ($conn ->connect_error){ // preguntamos si la relacion tuvo error.
         die( "Database Error : " . $conn ->connect_error); // si hay error revisar datos de variables.

}

?>