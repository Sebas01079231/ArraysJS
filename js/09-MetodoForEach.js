const carrito = [
    {nombre: 'Monitor 20"', precio:500 },
    {nombre: 'televisor', precio:100 },
    {nombre: 'celular', precio:200 },
    {nombre: 'Ryzen', precio:300 },
    {nombre: 'Intel', precio:400 },
    {nombre: 'Teclado', precio:700, gomas: 'libre' },
];



// for( let i = 0; i < carrito.length; i++){
//     console.log( `Nombre: ${carrito[i].nombre} - precio: $${carrito[i].precio}`);
// }


/* metodo de arreglo para iterar. 'forEach'*/
carrito.forEach( function(producto) {
   console.log( `Nombre: ${producto.nombre} - precio: $${producto.precio}`);
} );

const personas = [
    {nombre: 'Gustavo', Edad: 49},
    {nombre: 'Luz', Edad: 50},
    {nombre: 'Roy', Edad: 27},
    {nombre: 'Sebas', Edad: 21},
    {nombre: 'Regina', Edad: 12},
];

personas.forEach(function (persona, indice) {
    console.log(`Hola Mi nombre es ${persona.nombre} y tengo ${persona.Edad}, soy la persona numero ${indice + 1} `);
});