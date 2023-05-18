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


// Forma declarativa
let resultado;
resultado = {...carrito, producto, producto2};
// resultado = {...resultado, producto2};

// Agregar valores al principio del arreglo
resultado ={producto3,...resultado};

console.table(resultado);
console.log(resultado);