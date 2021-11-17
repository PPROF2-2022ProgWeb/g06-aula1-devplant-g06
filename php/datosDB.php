<<<<<<< HEAD
<?php
define('SERVER', 'localhost');
define('USER', 'root');
define('PASS', '');
define('DB', 'der_devplant');
$conector = mysqli_connect(SERVER, USER, PASS, DB);

?> 
=======
<?php // apertura de php

$host = "localhost" ; // servidor remoto
$usuario = "root" ; // usuario que asignemos una BD
$clave = "root" ; // clave que inventamos
$basededatos = "der_devplant" ; // Nombre de la base de datos

$conn = new mysqli ( $host , $usuario , $clave , $basededatos ); // variables + consulta.
mysqli_query ( $conn , "SET character_set_result = utf8" ); // para que los datos se lean en utf8.

if ( $conn -> connect_error ) { // preguntamos si la relación tuvo un error.
         die ( "Error de base de datos:" . $conn -> connect_error ); // si hay error revisar datos de variables.

}

?>
>>>>>>> a3d76be0d1be08283f9918ecccedaf7cbdbfa251
