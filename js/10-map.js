const carrito = [
    {nombre: 'Monitor 20"', precio:500 },
    {nombre: 'televisor', precio:100 },
    {nombre: 'celular', precio:200 },
    {nombre: 'Ryzen', precio:300 },
    {nombre: 'Intel', precio:400 },
    {nombre: 'Teclado', precio:700 },
]

// .map
const nuevoArray = carrito.map( function(producto) {
    return `Nombre: ${producto.nombre} - precio: $${producto.precio}`;
} )

const nuevoArray2 = carrito.forEach( function(producto) {
    return `Nombre: ${producto.nombre} - precio: $${producto.precio}`;
} )

// la diferencia es que .map te crea un nuevo arreglo
console.log(nuevoArray);
console.log(nuevoArray2);  //undefined