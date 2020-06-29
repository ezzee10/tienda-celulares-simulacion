<?php

function obtenerProducto(){
    include 'bd.php';

    try{
        return $conn->query("SELECT id_producto, nombre_producto, precio_producto, color_producto, foto_producto, cont_caja, marca_producto FROM producto");
    }catch(Exception $e){
        echo "Error al realizar la consulta" . $e->getMessage() . "<br>";
        return false;
    }
}

function obtenerDatos(){
    include 'bd.php';

    try{
        return $conn->query("SELECT nombre_producto, precio_producto, foto_producto, marca_producto FROM producto");
    }catch(Exception $e){
         echo "Error al realizar la consulta" . $e->getMessage() . "<br>";
        return false;
    }
}

?>