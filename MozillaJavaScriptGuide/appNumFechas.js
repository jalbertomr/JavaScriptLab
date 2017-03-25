// Numeros y Fechas

12345678
42

// caution when using leading zeros

0888  //parsed as decimal
0777  //parsed as octal

// numeros binarios

var FLT_SIGNBIT = 0b10000000000000000000000000000000; // 2147483648
var FLT_EXPONENT= 0b01111111000000000000000000000000;
var FLT_MANTISA = 0B00000000000001111111111111111111;

// numeros octales

var n = 0755
var m = 0644
var nooctal = 0778;

// numeros Hexadecimales

0xFFFFFFFFFFFFFFFFFF
0x123456789ABCDEF
0XA

// Objecto Number

var biggestNum = Number.MAX_VALUE;
var smallestNum = Number.MIN_VALUE;
var infiniteNum = Number.POSITIVE_INFINITY;
var negInfNum   = Number.NEGATIVE_INFINITY;
var notANumber = Number.NaN

/*
Propiedades de número Property 	Description
Number.MAX_VALUE 	El número más grande representable
Number.MIN_VALUE 	El número más pequeño representable
Number.NaN 	"No es un número" valor especial
Number.NEGATIVE_INFINITY 	Valor infinito negativo Especial; regresó el desbordamiento
Number.POSITIVE_INFINITY 	Valor infinito positivo Especial; regresó el desbordamiento
Number.EPSILON 	Diferencia entre uno y el valor más pequeño mayor que uno que se puede representar como una Number.
Number.MIN_SAFE_INTEGER 	Número entero de seguridad mínima en JavaScript.
Number.MAX_SAFE_INTEGER 	Entero máximas seguras en JavaScript.
*/

/*Métodos de Número Method 	Description
Number.parseFloat() 	Analiza un argumento de cadena y devuelve un número de punto flotante.
Igual que lo global parseFloat() funcion.
Number.parseInt() 	Analiza un argumento de cadena y devuelve un número entero de la raíz o base especificada.
Igual que lo globalparseInt() funcion.
Number.isFinite() 	Determina si el valor pasado es un número finito.
Number.isInteger() 	Determina si el valor pasado es un entero.
Number.isNaN() 	Determina si el valor pasado es NaN. Versión más robusta de lo global originales isNaN().
Number.isSafeInteger() 	Determina si el valor proporcionado es un número que es un número entero seguro.
*/
/*
Métodos de Number.prototype Method 	Description
toExponential() 	Devuelve una cadena que representa el número en notación exponencial.
toFixed() 	Devuelve una cadena que representa el número en notación de coma fija.
toPrecision() 	Devuelve una cadena que representa el número con una precisión especificada en notación de coma fija.
*/
// Objecto Math

Math.PI
Math.sin(1.56)

/*
Métodos de  Math Method 	Description
abs() 	Valor Abasoluto
sin(), cos(), tan() 	Funciones trigonométricas estándar; argumento en radianes
asin(), acos(), atan(), atan2() 	Funciones trigonométricas inversas; devolver valores en radianes
sinh(), cosh(), tanh() 	Funciones trigonométricas hiperbólicas; devolver valores en radianes.
asinh(), acosh(), atanh() 	Funciones trigonométricas hiperbólicas inversas; devolver valores en radianes.

pow(), exp(), expm1(), log10(), log1p(), log2()
	Funciones exponenciales y logarítmicas.
floor(), ceil() 	Devoluciones mayor / menor entero inferior / superior o igual al argumento
min(), max() 	Devuelve la lista de menor o mayor (respectivamente) de números separados por comas de los argumentos
random() 	Devuelve un número aleatorio entre 0 y 1.
round(), fround(), trunc(), 	Completan y funciones de truncamiento.
sqrt(), cbrt(), hypot() 	Raíz cuadrada, raíz cúbica, Raíz cuadrada de la suma de los argumentos cuadrados.
sign() 	El signo de un número, que indica si el número es positivo, negativo o cero.
clz32(),
imul() 	Número de líder cero bits en la representación binaria de 32 bits.
El resultado de la multiplicación de 32 bits C-como de los dos argumentos.
*/
// Objeto Date
/*La gama Fecha objeto es -100000000 día a 100.000.000 día relativos a 01 de enero 1970 UTC.

Para crear un objeto Date:

var dateObjectName = new Date([parameters]);
*/
var today = new Date();
var xmas = new Date("December 25, 1995 13:30:44");  //Mon Dec 25 1995 13:30:44 GMT-0600 (Hora estándar central (México))
var xmas2 = new Date("December 25, 1995");          //Mon Dec 25 1995 00:00:00 GMT-0600 (Hora estándar central (México))
var xmas95 = new Date(95,13,24);                    //Sat Feb 24 1996 00:00:00 GMT-0600 (Hora estándar central (México))

console.log(xmas2.getFullYear());  //1995
console.log(xmas2.getMonth());      //11

var today = new Date();
var endYear = new Date(2017, 11, 31, 23, 59, 59, 999); // Set day and month
endYear.setFullYear(today.getFullYear()); // Set year to this year
var msPerDay = 24 * 60 * 60 * 1000; // Number of milliseconds per day
var daysLeft = (endYear.getTime() - today.getTime()) / msPerDay;
var daysLeft = Math.round(daysLeft); //returns days left in the year


