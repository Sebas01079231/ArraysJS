# ARRAYS
    -estructura de datos que permite almacenar un conjunto de elementos del mismo tipo en una sola variable. mientras que un objeto es una variable que agrupa la info. de un Elemento, un arreglo puede tener multiples Elementos que sean iguales. NO SON IGUALES array y objeto.

    -Un arreglo se compone de una serie de elementos que están almacenados en posiciones consecutivas de memoria. Cada elemento se identifica por su índice, que es un número entero que indica la posición del elemento en el arreglo.

    -Los arreglos son útiles cuando se necesita trabajar con un conjunto de datos homogéneos(con caracteristicas comunes) y se requiere acceder a ellos de manera secuencial o aleatoria. Por ejemplo, se puede utilizar un arreglo para almacenar los puntajes de los jugadores en un juego, las notas de los estudiantes en un examen, o los elementos de una lista de compras.

    -Los arreglos se crean con CORCHETES [];

    Practicamente es una variable que puede contener multiples elementos (relacionados), de todo tipo: numeros, strings, booleans, nulls, objetos, Hasta se puede un arreglo dentro de un arreglo.


# Acceder a los valores del arreglo
    siempre se accede al arreglo especificando su posicion en el indice.

        const numeros = [10, 20, 30, 40, 50, [1, 2, 3]];

        console.log(numeros);
        console.table(numeros);

        // acceder al arreglo. se accede por medio de las posiciones del indice

        console.log(numeros[2]);
        console.log(numeros[0]);
        console.log(numeros[20]);//undefined, no hay 20

        // accediendo a un arreglo dentro de un arreglo
        console.log(numeros[5][1]);

# Recorrer valores del arreglo

    Usando un bucle for:

    Puedes recorrer un arreglo usando un bucle for, que es una estructura de control que te permite repetir un bloque de código varias veces. En cada iteración del bucle, puedes acceder a un elemento del arreglo utilizando su índice.

    const miArreglo = [1, 2, 3, 4, 5];

    for (let i = 0; i < miArreglo.length; i++) {

        console.log(miArreglo[i]);

    }

    -Se usa el tipo da variable let ya que este permite la reasignacion del valor de la variable

    -miArreglo.length: cuenta la cantidad de valores que hay, Este si EMPIEZA DESDE '1'

    console.log(miArreglo[i]); : me va imprimiendo el valor del arreglo de acuerdo con el numero del iterador, correspondiendo al posicionamiento en el indice.


# diferencia entre las formas imperativas y declarativas

    imperativa -> modifica el objeto actual. 
    declarativa -> no modifica el objeto actual, declara lo que se desea lograr.

    La principal diferencia entre las formas imperativas y declarativas es la forma en que se enfocan en describir cómo se debe realizar una tarea.

    En la programación imperativa, se enfatiza el proceso de ejecución de una tarea. Se especifican los pasos concretos que se deben realizar para alcanzar el objetivo deseado. El énfasis está en la implementación de una solución específica y se espera que el programador defina explícitamente todos los detalles del proceso.

    Por otro lado, la programación declarativa se enfoca en describir lo que se desea lograr, en lugar de cómo lograrlo. En esta forma de programación, se especifica el resultado deseado, pero no se describe cómo alcanzarlo. El lenguaje de programación se encarga de determinar la mejor manera de lograr el resultado deseado.

    En resumen, la diferencia entre ambas radica en el enfoque. La programación imperativa se centra en cómo realizar una tarea, mientras que la programación declarativa se enfoca en qué se quiere lograr. La programación declarativa se considera más simple y fácil de leer, mientras que la programación imperativa ofrece un mayor control y flexibilidad.

# Push | Pop | unshift | shift | splice

    Push: añade un elemento al final del arreglo.    
        
    unshift: agrega uno o más elementos al principio de un arreglo

    Pop: elimina el último elemento de un arreglo.

    shift: elimina el primer elemento del arreglo

    splice: agrega o elimina elementos de un arreglo en una posición específica. para elmiminar elementos se toman 2 valores: 
    1. posicion en el indice  
    2. numero de elemento a eliminar (empezando desde la posicion que se indico con valor 1)
    
        //push
        carrito.push(producto);
        
        //unshift
        carrito.unshift(producto3);

        //pop
        carrito.pop();

        //shift
        carrito.shift();

        //splice
        carrito.splice(1, 1);


# Añadiendo al final y al inicio nuevos elementos al array con forma imperativa 

    Este enfoque es muy util ya que te permite añadir elementos sin necesidad de saber su posicion.

        const carrito = []; //declarando un arreglo

        // definiendo algunas variables
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

        //Agregando variables al final del arreglo
        carrito.push(producto);
        carrito.push(producto2);


        // agregar al inicio del arreglo
        carrito.unshift(producto3);

        console.table(carrito);
        console.log(carrito);


# Forma Declarativa De Añadir Elementos al array (principio y final)

    const carrito = [];

    // definiendo algunas variables
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


# Destructuring en Arrays 
    permite extraer valores de un arreglo y asignarlos a variables individuales. Se utiliza para simplificar el proceso de extracción de valores de un arreglo y evitar la necesidad de acceder a ellos mediante índices.

    La sintaxis básica de la destructuración de arreglos en JavaScript es la siguiente:
        sea: const numeros = [10, 20, 30, 40, 50];
        
        let [variable1, variable2, variable3] = arreglo;

    En este caso, las variables "variable1, variable2 y variable3" se asignarán a los primer, segundo y tercer elemento del arreglo (10, 20, 30), respectivamente.

    es posible omitir valores en el arreglo utilizando la sintaxis de "comodín" (, ,) para indicar que no se va a utilizar ese valor:

        let [ , , , variable4] = arreglo;

    También es posible utilizar la sintaxis de "rest" para extraer todos los valores restantes en un arreglo y asignarlos a una variable:

        
        let [variable1, variable2, ...resto] = arreglo;

        la variable resto contendrá todos los valores restantes en el arreglo después de que se hayan asignado los valores a variable1 y variable2. [30, 40, 50];


# metodo  para iterar un arreglo.  "forEach"
    'forEach': por medio de una funcion se le asigna un iterador a cada elemento del arreglo ('producto' seria el nombre de ese iterador de cada elemento), de manera que ahora nos referimos al elemento que queremos por medio de su iterador que es producto, ya no por medio de carrito -que es el arreglo que hacia de iterador en el bucle for-.

    Esta forma de iterar un arreglo es mejor ya que es mas especifica 

    recibe como parámetro una función de callback que se ejecutará para cada elemento del arreglo. La función de callback puede recibir hasta tres parámetros:

        -elemento: es el valor del elemento actual del arreglo.
        -indice: es el índice del elemento actual en el arreglo.
        -arreglo: es el arreglo sobre el cual se está iterando.

    ejemplo de uso: 

            const personas = [
                { nombre: "Ana", edad: 25 },
                { nombre: "Juan", edad: 32 },
                { nombre: "María", edad: 18 },
            ];

        personas.forEach((persona, indice) => {

            console.log(`Hola Mi nombre es ${persona.nombre} y tengo ${persona.Edad}, soy la persona numero ${indice+ 1} en el indice del arreglo `);

        });

        ${indice + 1} estamos sumando 1 al índice para que el número que se imprima sea el número de la persona en la lista en lugar de su índice en el arreglo.
        Recuerda que los índices de los arreglos en JavaScript empiezan en 0.


# Metodo para iterar un arreglo. "map"

    Tiene la misma sintaxis de forEach, a diferencia es que te crea un arreglo nuevo

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
        console.log(nuevoArray2); //output: undefined
