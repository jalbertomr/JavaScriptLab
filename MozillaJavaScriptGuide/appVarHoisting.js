//Variable hoisting

/**
 * Ejemplo 1
 */
//var x;     se interpreta asi
console.log(x === undefined); // true
var x = 3;

/**
 * Ejemplo 2
 */
// devolverá un valor undefined
var myvar = "my value";

(function() {
  //var myvar;   se interpreta asi
  console.log(myvar); // undefined
  var myvar = "local value";
})();
