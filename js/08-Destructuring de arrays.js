// destructuring en arreglos
const numeros = [10, 20, 30, 40, 50];
// console.table(numeros);

// extrayendo valores
const [primero, segundo, tercero] = numeros;
console.log(primero);
console.log(tercero);

// si requiero solo un valor
const [ , , , cuarto] = numeros;
console.log(cuarto);


// si requiero 2 valores y lo demas que lo mantenga en un arreglo
const numeros2 = [70, 80, 90, 100, 110, 120];
const [numero1, numero2, ...restante] = numeros2;
console.log(numero1, numero2);
console.log(restante);



