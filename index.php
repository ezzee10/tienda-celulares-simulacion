<?php
    include 'includes/layout/header.php';
    include 'includes/funciones/funciones.php';
?>



  <div class="container">
    <main class="contenido">
      <h2>Escoja el modelo que desea comprar</h2>
    </main>

    <?php 
    
        $productos = obtenerProducto();
        //echo var_dump($productos);
        if($productos ->num_rows){
            foreach($productos as $producto){
              echo '<pre>';
              var_dump($producto);
              echo '</pre>';
            }
        }

    ?>



  </div>

<?php
    include 'includes/layout/footer.php';
?>
    
