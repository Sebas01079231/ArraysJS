const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'julio'];

console.table(meses);


// cuanto mide el arreglo
console.log(meses.length); //empieza a contar desde '1'


// for(IniciaDelIterador; CuantasVecesSeEjecutaraElBucle; incremento;)
// se ocupa let ya que este tipo de variable permite que se reasigne la variable i
for( let i = 0; i < meses.length; i++){
    console.log( meses[i] );
}
