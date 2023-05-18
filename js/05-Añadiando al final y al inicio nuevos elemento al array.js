const carrito = [];

// definiendo algunos objetos
const producto = {
    producto: 'Monitor 32 "',
    precio: 400,
}
const producto2 = {
    producto: 'iphone',
    precio: 1000,
}
const producto3 = {
    producto: 'teclado',
    precio: 50,
}

//Agregar al final del arreglo
carrito.push(producto);
carrito.push(producto2);


// agregar al inicio del arreglo
carrito.unshift(producto3);

console.table(carrito);
console.log(carrito);