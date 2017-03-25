// function*
/* The function* declaration (function keyword followed by an asterisk) defines a generator function, which returns a Generator object.

You can also define generator functions using the GeneratorFunction constructor and a function* expression.
Syntax
Edit

function* name([param[, param[, ... param]]]) {
   statements
}

name
    The function name.

param
    The name of an argument to be passed to the function. A function can have up to 255 arguments.

statements
    The statements comprising the body of the function.
*/

// Simple Example

function* idMaker() {
    var index = 0;
    while (index < 3)
        yield index++;
}

var gen = idMaker();

console.log( gen.next().value);  //0
console.log( gen.next().value);  //1
console.log( gen.next().value);  //2
console.log( gen.next().value);  //undefined

// Example with yield*

function* anotherGenerator(i) {
    yield i + 1;
    yield i + 2;
    yield i + 3;
}

function* generator(i) {
    yield i;
    yield* anotherGenerator(i);
    yield i + 10;
}

var gen = generator(10);

console.log( gen.next().value);  // 10
console.log( gen.next().value);  // 11
console.log( gen.next().value);  // 12
console.log( gen.next().value);  // 13
console.log( gen.next().value);  // 20
console.log( gen.next().value);  // undefined

// Passing Arguments into generators

function* logGenerator() {
    console.log( yield );
    console.log( yield );
    console.log( yield );
}

var gen = logGenerator();

// the first call of next executes from the start of the function
// until the first yield statement

gen.next();
gen.next('Sol');
gen.next('luna');
gen.next('tierra');

// Generators are not constructable

function* funGenConst() {};

var gen = new funGenConst;  //Uncaught TypeError: funGenConst is not a constructor
