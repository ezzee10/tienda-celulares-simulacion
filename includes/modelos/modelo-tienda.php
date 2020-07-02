<?php 

        require_once('../funciones/bd.php');

        $id = intval($_GET['id']);

        try{
            $stmt = $conn->query("SELECT id_producto, nombre_producto, precio_producto, foto_producto FROM producto WHERE id_producto = $id");

        foreach($stmt as $campo){

            $respuesta = array(
                'id' => $campo['id_producto'],
                'nombre' => $campo['nombre_producto'],
                'precio' => $campo['precio_producto'],
                'foto' => $campo['foto_producto']
            );
        }
            $stmt->close();
            $conn->close();
        }catch(Exception $e){
            $respuesta = array(
               'error' => $e->getMessage()
          );
        }
        echo json_encode($respuesta);