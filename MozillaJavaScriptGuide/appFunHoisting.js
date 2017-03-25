//Function hoisting

/* Declaración de la función */

foo(); // "bar"

function foo() {
  console.log("bar");
}


/* Expresión de la función */

baz(); // TypeError: baz no es una función

var baz = function() {
  console.log("bar2");
};
