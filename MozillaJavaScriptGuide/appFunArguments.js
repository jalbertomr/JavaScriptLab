document.write('in index.html');

function myConcatArgs( separador ){
    var result = "",
        i;
    for (i = 1; i < arguments.length; i++) {
        result += arguments[i] + separador;
    }
    return result;
};

myConcatArgs(', ','red','orange','blue');

myConcatArgs("; ", "elephant", "giraffe", "lion", "cheetah");

myConcatArgs(". ", "sage", "basil", "oregano", "pepper", "parsley");

// parametros por defecto
function multiply(a, b){
    b = typeof b !== 'undefined' ? b : 1;
    return a * b;
}

console.log(multiply(5));   // 5

function multiplydefault(a, b = 1) {
    return a * b;
}

console.log(multiplydefault( 5));  // 5

// parametros rest

function multiplyRest( init, ...args){
    return args.map(arg => init * arg);
}

var arr = multiplyRest( 2, 1, 2 ,3, 4);
console.log(arr);

//funciones Flecha

var elementos = ["hidrogeno", "helio", "litio", "berilio"];

var elementosLenght = elementos.map(function(s){ return s.length });

var elementosLenghtArrow = elementos.map(s => s.length);

console.log(elementos);
console.log(elementosLenght);
console.log(elementosLenghtArrow);

