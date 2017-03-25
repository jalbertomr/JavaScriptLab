// Destructuring Assigment

//The destructuring assignment syntax is a JavaScript expression that makes it possible to extract data from arrays or objects into //distinct variables.

var a, b, rest;        // si no se declaran se crean

[ a, b] = [ 10, 20 ];
console.log(a);  // 10
console.log(b);  // 20

[ a, b, ...rest ] = [10, 20, 30, 40, 50];
console.log(a);  // 10
console.log(b);  // 20
console.log(rest); // [30, 40, 50]

//>{a, b} = {a:10, b:20}
// Object {a: 10, b: 20}
//>{a, b} = {a:11, b:22}
// Object {a: 11, b: 22}
//>{a, b} = {c:11, b:22}
// Object {c: 11, b: 22}
({a, b} = {c:11, b:22})
// Object {c: 11, b: 22}
mo = ({a, b} = {c:11, b:22})
// Object {c: 11, b: 22}
mo.a
// undefined
mo.c
// 11
mo.f
// undefined
mo = {a, b} = {c:3311, b:3322}
//Object {c: 3311, b: 3322}
mo
//Object {c: 3311, b: 3322}

// Experimental not yet standarized
//{ a, b, ...rest } = { a: 777, b:888, c:999, d:111, e:444}  //unexpected token

// Description

var x = [ 1, 2, 3, 4, 5];
var [y,z] = x;
console.log( y ); // 1
console.log( z ); // 2
// this capability is similar to features present in languages sush as Perl and Phyton

// Array Destructuring
// Basic Array assigment

var foo = ['one', 'two', 'three'];

var [varOne, varTwo, varThree] = foo;

console.log(varOne);   //"one"
console.log(varTwo);   //"two"
console.log(varThree); //"three"

// Assignment separate from declaration
// A variable can be assigned its value via destructuring separate from the variable's declaration.

var a,b;

[a, b] = [1, 2];
console.log(a);  // 1
console.log(b);  // 2

[a, b] = [1, 2, 3, 4];
console.log(a);  // 1
console.log(b);  // 2


// Default values
// A variable can be assigned a default, in the case that the value pulled from the array is undefined.

var a, b;

[a = 5, b = 7] = [1];
console.log(a);  // 1
console.log(b);  // 7

// Swapping variables
// Two variables values can be swapped in one destructuring expression.

var a = 1, b = 6;

[a, b] = [b, a];
console.log(a);  // 6
console.log(b);  // 1

// Parsing an array returned from a function

function f(){
    return [1, 2];
}

var a, b;
[a, b] = f();
console.log(a); // 1
console.log(b); // 2

// Ignoring some returned values

function f() {
    return [1, 2, 3];
}

var [a, ,b] = f();
// [,,] = f();   // ignore all returned values
console.log(a);  // 1
console.log(b);  // 3

function f() {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
}

var [a,,,,,,,,,b] = f();
console.log(a);  // 1
console.log(b);  // 10

// Assigning the rest of an array to a variable

var [a, ...b] = [ 1, 2, 3 ];
console.log(a);  // 1
console.log(b);  // [ 2, 3 ]

// Pulling values from a regular expression match

var url = 'https://developer.mozilla.org/en-US/Web/JavaScript';

var parsedURL = /^(\w+)\:\/\/([^\/]+)\/(.*)$/.exec(url);

console.log(parsedURL);

var [, protocol, fullhost, fullpath, ] = parsedURL;

console.log(protocol);

// Object Destructuring ...
