//Conversión de tipos de datos

var respuesta = 42;

respuesta = "Gracias por todo el pescado...";

x = "La respuesta es " + 42;
y = 42 + " es la respuesta";

console.log("37" - 7);
console.log("37" + 7);

//Convertir Strings a numeros
//parseInt()  parseFloat()

var varStringInt = "324";
var varStringFloat = "3.1415";

console.log(typeof varStringInt);           //string
console.log(typeof parseInt(varStringInt) + varStringInt);  //number
console.log(typeof parseInt(varStringFloat) + parseInt(varStringFloat));     //number3
console.log(typeof parseFloat(varStringFloat) + parseFloat(varStringFloat)); //number3.1415

console.log("1.1" + "1.1");             //  1.11.1
console.log(+"1.1" + +"1.1");           //  2.2
console.log( (+"1.1") + (+"1.1") );     //  2.2


