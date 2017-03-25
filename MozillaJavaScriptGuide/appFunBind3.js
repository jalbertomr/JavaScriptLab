// Function.prototype.bind()

// Array.prototype.slice

console.log(new Date().toDateString());

arguments = ['uno','dos','tres'];

var slice = Array.prototype.slice;

var datos = slice.call(arguments);

console.log(datos);    //["uno", "dos", "tres"]
console.log( Array.prototype.slice.call(arguments) );  //["uno", "dos", "tres"]
//
var unboundSlice = Array.prototype.slice;
var slice = Function.prototype.call.bind(unboundSlice);

var datos = slice(arguments);

console.log(datos);     //["uno", "dos", "tres"]
