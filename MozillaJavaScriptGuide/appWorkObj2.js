// Working with objects
// Creando nuevos objetos

/* inicializadores de objeto
var objeto = { propiedad_1:   valor_1,   // propiedad_# puede ser un identificador...
            2:            valor_2,   // o un numero...
            // ...,
            "propiedad n": valor_n }; // o una cadena
*/
cond = false;
if (cond) var x = { saludo: "Hola!" };

var miAuto = { marca: "Dodge", modelo: "Astra", motor: { cilindros: 4, tamanio: 3.1} };

// Usando Funcion constructora

function Auto( marca, modelo, cilindros, tamanio){
    this.marca = marca;
    this.modelo = modelo;
    this.motor = new Object();
    this.motor.cilindros = cilindros;
    this.motor.tamanio = tamanio;
}

var otroAuto = new Auto( "Porche", "carrera", 4, 3.0);

console.log ( miAuto);
console.log( otroAuto);

var kenscar = new Auto("Nissan", "300ZX", 6, 2.0);
var vpgcar = new Auto("Mazda", "Miata", 4, 1.7);

function Person(nombre, edad, sexo){
    this.nombre = nombre;
    this.edad = edad;
    this.sexo = sexo;
}

var fer = new Person("Fernando Duclock", 38, 'M');
var alvaro = new Person("Alvaro Caram", 36, 'M');

function Piloto( persona, auto){
    this.persona = new Person();
    this.persona = persona;
    this.auto = new Auto();
    this.auto = auto;
}

var piloto1 = new Piloto(fer, kenscar);
var piloto2 = new Piloto(alvaro, vpgcar);

console.log( piloto1);
console.log( piloto2);

/*Pilotoauto: Automarca: "Nissan"modelo: "300ZX"motor: Object__proto__: Objectpersona: Personedad: 38nombre: "Fernando Duclock"sexo: "M"__proto__: Object__proto__: Object
app.js:53 ....*/

// vease Object.create

//Definición de las propiedades de un tipo de objeto

Piloto.prototype.formula = null;
piloto1.formula = "formula 1";

/*Definiendo los métodos

nombreDelObjeto.nombreDelMetodo = nombre_de_la_funcion;

var miObjeto = {
  miMetodo: function(parametros) {
    // ...hacer algo
  }
};
*/

function showAuto(){
    var result = "Auto:[marca: " + this.marca + " modelo: " + "motor:["+ this.motor.cilindros +"-"+ this.motor.tamanio+"]]";
    document.write(result);
}

// override al Objeto Auto, y definiendo metodo
Auto.prototype.showAuto = showAuto;

piloto1.auto.showAuto();

// override al objeto Persona
function showPersona(){
    var result ="Persona:[nombre: " + this.nombre + "edad: "+ this.edad + "sexo: " + this.sexo +"]";
    document.write(result);
}

Person.prototype.showPersona = showPersona;

fer.showPersona();

function showPiloto(){
    var result = "formula: " + this.formula +"\n";
    document.write("<b>Piloto</b>");
    this.persona.showPersona(); document.write("</br>");
    this.auto.showAuto();       document.write("</br>");
    document.write(result);     document.write("</br>");
}

Piloto.prototype.showPiloto = showPiloto;

piloto1.showPiloto();

// Definiendo setters and getters
/*js> var o = {a: 7, get b() {return this.a + 1;}, set c(x) {this.a = x / 2}};
[object Object]
js> o.a;
7
js> o.b;
8
js> o.c = 50;
js> o.a;
25
*/
/*
>o
Object a: 15
b: (...)
get b: b()
set c: c(x)
 __proto__: Object
*/

