<?php

function obtenerProducto(){
    include 'bd.php';

    try{
        return $conn->query("SELECT id_producto, nombre_producto, precio_producto, color_producto, foto_producto, cont_caja, marca_producto FROM producto");
    }catch(Exception $e){
        echo "Error al realizar la consultar" . $e->getMessage() . "<br>";
        return false;
    }
}

?>