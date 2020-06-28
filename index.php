<?php
    include 'includes/layout/header.php';
    include 'includes/funciones/funciones.php';
?>



  <div class="container">
    <main class="contenido">
      <h2>Escoja el modelo que desea comprar</h2>

      <?php 
    
        $productos = obtenerProducto(); 
        
        ?>

        <div class="productos">
      <?php foreach($productos as $producto) { ?>
            <div class="producto">
                <img src="<?php echo $producto['foto_producto']?>">
                <p> <?php echo $producto["nombre_producto"] ?> </p>
                <p> <?php echo $producto["marca_producto"] ?> </p>
                <p> <?php echo $producto["precio_producto"] ?> </p>
                <button>Comprar</button>
            </div>
           <?php } ?>
      </div>
    </main>
  </div>

   <?php
    $conn->close();
    ?>

<?php
    include 'includes/layout/footer.php';
?>
    
