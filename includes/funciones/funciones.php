<?php

function obtenerProducto(){
    include 'bd.php';

    try{
        return $conn->query("SELECT id_producto, nombre_producto, precio_producto, foto_producto FROM producto");
    }catch(Exception $e){
        echo "Error al realizar la consulta" . $e->getMessage() . "<br>";
        return false;
    }
}


?>