//Literales

/*Los literales se utilizan para representar valores en JavaScript. Estos son valores fijos, no variables, que literalmente proporciona en su script. Esta sección describe los siguientes tipos de literales:

    Literales Array
    Literales Boolean
    Literales  de punto Flotante
    Literales Enteros
    Literales  Tipo Objeto
    Literales String
*/

var cafes = ["Tostado Frances", "Colombiano", "Kona"];  //var cafes = ["Tostado Frances", "Colombiano", "Kona"];
var peces = ["Leon", , "Angel"];                //["Leon", undefined × 1, "Angel"]
var miLista = ['casa', , 'escuela', ];          //["casa", undefined × 1, "escuela"]
miLista1 = ['casa', , , ,,, 'escuela', ];  //["casa", undefined × 5, "escuela"]
miLista2 = [ , 'casa', , 'escuela'];        //[undefined × 1, "casa", undefined × 1, "escuela"]
miLista3 = ['casa', , 'escuela', , ];       //["casa", undefined × 1, "escuela", undefined × 1]

//Literales Tipo Objeto

var Ventas = "Toyota";

function tiposCarro( nombre ){
    if (nombre == "Honda"){
        return nombre
    } else {
        return "Lo sentimos, no vendemos " + nombre + "." ;
    }
}

var carro = { miCarro: "Saturn",
             getCarro: tiposCarro("Honda"),
             especial: Ventas
            };

console.log(carro.miCarro);   //Saturn
console.log(carro.getCarro);  //Honda
console.log(carro.especial);  //Toyota

var auto = {
    algunosAutos: {
        a: "Saab",
        b: "Jeep"
    },
    7 : "Mazda"
}

console.log(auto.algunosAutos.b);  //jeep
//console.log(auto.7);                //Uncaught SyntaxError: missing ) after argument list
console.log(auto[7]);               //Mazda

var propiedadesDeNombreInusual = {
    "": "Un String Vacio",
    "!": "Bang!"
}

//console.log(propiedadesDeNombreInusual."");   //Syntax Error
console.log(propiedadesDeNombreInusual [""]);   //Un String Vacio
//console.log(propiedadesDeNombreInusual.!);      //Uncaught SyntaxError: Unexpected token !
console.log(propiedadesDeNombreInusual["!"]);    //Bang!

var foo = {a: "alpha", 2: "two"};
console.log(foo.a);    // alpha
console.log(foo[2]);   // two
//console.log(foo.2);  // Error: missing ) after argument list
//console.log(foo[a]); // Error: a is not defined
console.log(foo["a"]); // alpha
console.log(foo["2"]); // two

/*Character 	Meaning
\b 	Retroceso
\f 	Avance de Página
\n 	Nueva Línea
\r 	Retorno de Línea
\t 	Tabulador
\v 	Tabulador Vertical
\' 	Apóstrofe o comilla sencilla
\" 	Comilla doble
\\ 	Carácter Backslash
\XXX 	Los caracteres con la codificación Latin-1 especificada por tres dígitos octales XXX entre 0 y 377. Por ejemplo, \251 es la secuencia octal para el símbolo copyright.
\xXX 	Los caracteres con la codificación Latin-1 especificada por dos dígitos hexadecimales XX entre 00 y FF. Por ejemplo, \xA9 es la secuencia hexadecimal para el símbolo copyright.
\uXXXX 	Los caracteres Unicode especificados por la secuencia de cuatro dígitos Hexadecimales  XXXX. Por ejemplo, \u00A9 es la secuencia Unicode para el símbolo copyright . Ver Secuencias de escape Unicode .
*/

var quote = "El lee \"La cremación de Sam McGee\" de R.W. Service.";
console.log(quote);

var str = "this string \
is broken \
across multiple\
lines."
console.log(str);   // this string is broken across multiplelines.

var poem =
"Roses are red,\n\
Violets are blue.\n\
I'm schizophrenic,\n\
And so am I."

console.log(poem);
