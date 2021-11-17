<!-- <!DOCTYPE html>
<html lang="en">

<head>

    <title>Conexión a BDD</title>

    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
   
</head>

<body> -->

<?php

    // require_once("pureba.php");

    $email = $_POST["email"];
    $password = $_POST["password"];
    $nombre = $_POST["nombre"];
    $apellido = $_POST["apellido"];
    $provincia = $_POST["provincia"];
    $pais = $_POST["pais"];
    $fechaNacimiento = $_POST["fechaNacimiento"];


    // $db = new DataBase();
    // $connection = $db->getConnection();
    

    print "<p>Su eMail es <strong>$email</strong>.</p>\n";
    print "\n";
    print "<p>Su clave es <strong>$password</strong>.</p>\n";
    print "\n";
    print "<p>Su nombre es <strong>$nombre</strong>.</p>\n";
    print "\n";
    print "<p>Su apellido es <strong>$apellido</strong>.</p>\n";
    print "\n";
    print "<p>Su provincia es <strong>$provincia</strong>.</p>\n";
    print "\n";
    print "<p>Su país es <strong>$pais</strong>.</p>\n";
    print "\n";
    print "<p>Su fecha de nacimiento es <strong>$fechaNacimiento</strong>.</p>\n";
    print "\n";

    //Incluimos los datos de conexión  y las funciones.
    include("datosDB.php"); // variable de conexión a la base de datos


    $consulta = "INSERT INTO clientes (email, password, nombre, apellido, provincia, pais, idLocalidad, fechaNacimiento) 
                    VALUES ('$email','$password','$nombre','$apellido','$provincia','$pais', 1, '$fechaNacimiento')";
    // echo $consulta;
    $resultado = mysqli_query($conector, $consulta);


    if ($resultado) {
        echo "Se ha creado un nuevo registro";
    } else {
        echo "Error: " . $consulta . "<br>" . mysqli_error($connection);
    }
  mysqli_close($conector);
?>