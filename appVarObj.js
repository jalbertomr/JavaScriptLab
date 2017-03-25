var greet = 'Hello';
var greet = 'Hola!';
var person = {};   //creates an Object
var person2 = {};
person2.nombre = 'Beto';
person2.appellido = "Martinez";

var person3 = new Object();
person3.nombre = 'Juan';
person3.apellido = 'Perez';

var person4 = {
    nombre: 'Marisol', apellido: 'Perez',
    direccion: {
        calle: 'esperanza 11',
        colonia: 'Buenaventura',
        Estado: 'D.F.'
    }
};

var english = {};
var greetings = {};
var spanish = {};

var contenedor = {
    subcontenedor: {
        elemento1: 'valor1',
        elemento2: 'valor2'
    }
};

english.greet = 'Hello';
spanish.greet = 'Hola';
english.greetings = greetings;
spanish.greetings = {};

var french = {
    greetings: { greet: "Boun Jour"}
};

english.greetings.greet = 'hello';


console.log(english);
console.log(french);
console.log(contenedor);
console.log(person);
console.log(person2);
console.log(person3);
console.log(person4);
