
var arreglo = [4,5,2,4,5,9,9,4,4];


function contiene(arreglo, detectar, minimas) {
    var contador = 0;
    for ( var i = 0; i < arreglo.length; i++) {
       if (arreglo[i] == detectar)
          contador++;
       if (contador >= minimas)
          return true;
    }
    return false;
}

console.log(contiene( arreglo, 4, 5));
console.log(contiene( arreglo, 4, 4));
console.log(contiene( arreglo, 4, 3));
console.log(contiene( arreglo, 4, 2));
