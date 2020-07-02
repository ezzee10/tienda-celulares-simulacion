<?php
    include 'includes/layout/header.php';
    include 'includes/funciones/funciones.php';
?>

  <div class="container">
    <div class="center">
       <h2>Escoja el modelo que desea comprar</h2>
</div>
 
    <main class="contenido center">
      

      <?php 
    
      $productos = obtenerProducto();?>

      <div class="productos">
      <?php foreach($productos as $producto) { ?>
            <div class="producto">
                <img src="<?php echo $producto['foto_mediana']?>">
                <p class="nombre"> <?php echo $producto["nombre_producto"] ?> </p>
                <p class="marca"> <?php echo $producto["marca_producto"] ?> </p>
                <p class="precio"> $<?php echo $producto["precio_producto"] ?> </p>
                <button 
                        type="button"
                        class="boton" 
                        onclick="agregarAlCarrito(<?php echo $producto["precio_producto"] ?>, 
                        '<?php echo $producto["nombre_producto"] ?>',
                        '<?php echo $producto["foto_pequeña"] ?>'
                        )">Comprar
                </button> 
            </div>
           <?php } ?>     
      </div>

      <div class="carrito">
      
      </div> 
    </main>
  </div>

  <?php
    include 'includes/layout/footer.php';
  ?>


    