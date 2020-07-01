<?php

function obtenerProducto(){
    include 'bd.php';

    try{
        return $conn->query("SELECT id_producto, nombre_producto, precio_producto, color_producto, foto_mediana, cont_caja, marca_producto, foto_pequeña FROM producto");
    }catch(Exception $e){
        echo "Error al realizar la consulta" . $e->getMessage() . "<br>";
        return false;
    }
}

function obtenerPrecioPorId($id){
    include 'bd.php';

    try{
        return $conn->query("SELECT precio_producto FROM producto WHERE id_producto = $id");
    }catch(Exception $e){
        echo "Error al realizar la consulta" . $e->getMessage() . "<br>";
        return false;
    }
}

?>