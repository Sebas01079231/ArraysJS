const numeros = [10, 20, 30, 40, 50, [1, 2, 3]];

console.log(numeros);
console.table(numeros);

// acceder al arreglo. se accede por medio de las posiciones del indice
console.log(numeros[2]);
console.log(numeros[0]);
console.log(numeros[20]);

// accediendo a un arreglo dentro de un arreglo
console.log(numeros[5][1]);