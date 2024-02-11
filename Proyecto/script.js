
let carrito = [];

function agregarAlCarrito(producto) {
  carrito.push(producto);
  alert(`Producto "${producto}" agregado al carrito.`);
}

function mostrarCarrito() {
  if (carrito.length === 0) {
    alert("El carrito está vacío.");
  } else {
    const confirmacion = confirm("¿Desea realizar la compra?");
    if (confirmacion) {
      alert("¡Compra realizada con éxito!");
      carrito = []; 
    }
  }
}
