
function sumasIguales( arreglo ) {

    var iguales = false;
    var SumaPares = 0;
    var SumaNones = 0;

    for (var i = 0; i < arreglo.length; i++){
        if (arreglo[i] % 2 == 0) {
            SumaPares += arreglo[i];
        } else {
            SumaNones += arreglo[i];
        }
    }
    if (SumaPares == SumaNones) {
        iguales = true;
    }
    return iguales;
}

console.log(sumasIguales([10, 5, 5]));
console.log(sumasIguales([2, 1, 1, -1, 3, 4, 10]));
console.log(sumasIguales([-4, 10, -6]));
console.log(sumasIguales([1, 2, 3, 4, 1, 1]));
