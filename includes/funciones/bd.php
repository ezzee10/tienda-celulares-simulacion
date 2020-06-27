<?php

// credenciales de la BD
define('DB_USUARIO', 'root');
define('DB_PASSWORD', 'root');
define('DB_HOST', 'localhost');
define('DB_NOMBRE', 'tienda_celulares');

$conn = new mysqli(DB_HOST, DB_USUARIO, DB_PASSWORD, DB_NOMBRE);

//echo $conn->ping();

