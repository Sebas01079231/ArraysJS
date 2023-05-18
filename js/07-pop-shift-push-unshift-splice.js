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
const producto4 = {
    producto: 'Ryzen',
    precio: 50,
}
const producto5 = {
    producto: 'Intel',
    precio: 50,
}
const producto6 = {
    producto: 'Motherboard',
    precio: 50,
}

//Agregar al final del arreglo
carrito.push(producto);
carrito.push(producto2);
carrito.push(producto4);
carrito.push(producto5);
carrito.push(producto6);


// agregar al inicio del arreglo
carrito.unshift(producto3);
console.table(carrito);

// eliminar ultimo elemento del arreglo
carrito.pop();
console.table(carrito);


// eliminar del inicio del arreglo
carrito.shift();
console.table(carrito);

// eliminar elementos por su posicion con splice
carrito.splice(2, 1);
console.table(carrito);

// agregar con splice
carrito.splice(2, 0, producto3);
console.table(carrito);



