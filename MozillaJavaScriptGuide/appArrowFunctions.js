// Arrow Functions
/*
An arrow function expression has a shorter syntax than a function expression and does not bind its own this, arguments, super, or new.target. These function expressions are best suited for non-method functions, and they cannot be used as constructors.

Syntax
  ( param1, param2, ... paramN ) => { statements }
  ( param1, param2, ... paramN ) => expression
  // equivalent to: ( param1, param2, ...paramN ) => { return expression; }

  // Parentheses are optional when  there's only one parameter:
  (single param) => { statements }
   single param  => { statements }

   // A function with no params  requires parentheses:
   () => { statement }
   () => expression;  //equivalent to: () => { return expression; }

Advanced Syntax

// Parentheses the body to return an object literal expression:
param => ( { foo: bar })

// Rest parameters and default parameters are supported

  ( param1, param2, ...rest) => { statements }
  ( param1 = defaultValue1, param2, ..., paramN = defaultValueN ) => { statements }

// Destructuring within the parameter list is also supported

  var f = ( [a, b] = [ 1, 2], { x: c } = { x: a + b} ) => { a + b + c}
  f();  // 6

new version
  let f = ( [a, b] = [1, 2], { x: c } = { x: a + b } ) =>  a + b + c ;
  f();  // 6


*/

let f = ( [a, b] = [1, 2], { x: c } = { x: a + b } ) =>  a + b + c ;
console.log(f());