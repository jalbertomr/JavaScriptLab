// Operadores Especiales
/*
    Conditional operator
    Comma operator
    delete
    in
    instanceof
    new
    this
    typeof
    void
*/

//Conditional operator
var edades = [4, 15, 18, 20];

for( edad of edades){
  status = edad <= 18 ? 'menor' : 'mayor';
    console.log(status);
}

// Comma Operator
const MAX = 9;

var matrix = new Array(MAX);
for( i = 0 ; i <= MAX; i++){
    matrix[i] = new Array(MAX);
    for( j = 0; j <= MAX; j++){
        matrix[i][j] = i.toString() + ", " + j.toString();
    }
}

console.log(matrix);

for( var i = 0, j = 9; i <= 9; i++, j--) { // Comma Operator
    document.writeln("matrix[" + i +"][" + j + "]= " + matrix[i][j] );
}

// delete Operator
/* delete objectName;
   delete objectName.property;
   delete objectName[index];
   delete property; // esta forma es posible solo con una declaración with
*/

//declaring objects to delete
x = 43;
var y = 44;
myObj = new Number();
myObj.h = 4;            // create property h

//delete operations

console.log( delete varnoexiste);   //return true
console.log( delete x);          // returns true (puede eliminar si se declaro implicitamente)
console.log( delete y);          // returns false (no puede eliminar si se declaro con var)
console.log( delete Math.PI);    // returns false (no puede eliminar propiedas predefinidas)
console.log( delete myObj.h);    // returns true (puede eliminar propiedades definidas por el usuario)
console.log( delete myObj);      // returns true (puede eliminar si se ha declarado implicito)

// delete elemento de Array

var trees = new Array("redwood", "bay", "cedar", "oak", "maple");       console.log(trees);

delete trees[3];            console.log(trees);

if (3 in trees){
    // este bloque no se ejecutara
}

trees[3] = undefined;       console.log(trees);

if (3 in trees){
    //este bloque si se ejecutara
    console.log("trees[3] = undefined; if ( 3 in trees)...");
}

/* in Operador

El operador in devuelve true si la propiedad especificada está en el objeto especificado. La sintaxis es:

propNameOrNumber in objectName

Donde propNameOrNumber es una cadena o expresión numérica que representa un nombre de propiedad o índice de matriz y objectName es el nombre de un objeto.
*/

trees = new Array("redwood", "bay", "cedar", "oak", "maple");       console.log(trees);

console.log( 0 in trees );          //return true
console.log( 3 in trees );          //return true
console.log( 6 in trees );          //return false
console.log( "bay" in trees );      //return false , se debe especificar la llava o propiedad, no el valor o contenido
console.log( "length" in trees );   //return true, length es una propiedad de Array trees

// in Predefined Objects

console.log( "PI" in Math );        //true

var myString = new String("coral");
console.log( "length" in myString); //true

// in Custom Objects

var mycar = { make: "Honda", model: "Accord", year: 1998 };
console.log( "make" in mycar);      //true
console.log( "model" in mycar);     //true

// new Operador
/*
Utilice el operador new para crear una instancia de un tipo propio o de uno de los tipos de objetos predefinidos: Array, Boolean, Date, Function, Image, Number, Object, Option, RegExp o String. En el servidor, también puede usarlo para DbPool, Lock, File o SendMail. La semántica es la siguiente:

var nombreDeObjeto = new tipoDeObjeto([param1, param2, ..., paramN]);
*/

// this Operador
// this["nameProperty"]
// this.nameProperty

console.log( mycar["make"] );
console.log( mycar.make);

function validate(obj, lowval, hival){
    if (obj.value < lowval || obj.value > hival ){
        alert('valor invalido!');
    }
}

// operator typeof
//  typeof operand
//  typeof (operand)

var myFun = new Function("5 + 2");
var shape = "round";
var size = 1;
var today = new Date();

// variables
console.log( typeof myFun);     // function
console.log( typeof shape);     // string
console.log( typeof size);      // number
console.log( typeof today);     // object

// true and null
console.log( typeof true);      // boolean
console.log( typeof null);      //  object

// number, string
console.log( typeof 62);              // number
console.log( typeof "algo de texto"); // string

// property values
console.log( typeof document.lastModified);  //string
console.log( typeof window.length);         //number
console.log( typeof Math.LN2);              //number

// methods and functions
console.log( typeof blur);              //function
console.log( typeof eval);              //function
console.log( typeof parseInt);          //function
console.log( typeof shape.split);       //function

// predefined objects
console.log( typeof Date);
console.log( typeof Function);
console.log( typeof Math);
console.log( typeof Option);
console.log( typeof String);

// void Operator
// void expresion
// void (expresion)

//<a href="javascript:void(0)">Click here to do nothing</a>

//<a href="javascript:void(document.form.submit())"/>
//click para enviar</a>
