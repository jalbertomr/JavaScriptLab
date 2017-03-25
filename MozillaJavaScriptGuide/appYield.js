// Yield
/* Syntax

 yield* [[expression]];

expression
    The expression which returns an iterable object.
*/

// Delegating to another generator

function* g1() {
    yield 2;
    yield 3;
    yield 4;
}

function* g2() {
    yield 1;
    yield* g1();
    yield 5;
}

var iterator = g2();

console.log(iterator.next());  //Object {value: 1, done: false}
console.log(iterator.next());  //Object {value: 2, done: false}
console.log(iterator.next());  //Object {value: 3, done: false}
console.log(iterator.next());  //Object {value: 4, done: false}
console.log(iterator.next());  //Object {value: 5, done: false}
console.log(iterator.next());  //Object {value: undefined, done: true}

// Other iterable objects e.g. arrays, string, or arguments objects

function* g3() {
    yield* [1,2];
    yield* '34';
    yield* Array.from(arguments);
}

var iterator = g3(5, 6);

console.log(iterator.next());   //Object {value: 1, done: false}
console.log(iterator.next());   //Object {value: 2, done: false}
console.log(iterator.next());   //Object {value: "3", done: false}
console.log(iterator.next());   //Object {value: "4", done: false}
console.log(iterator.next());   //Object {value: 5, done: false}
console.log(iterator.next());   //Object {value: 6, done: false}

// The value of yield* expression itself
// yield* is an expression, not a statement, so it evaluates to a value

function* g4() {
    yield* [1, 2, 3];
    return 'foo';
}

function* g5() {
    result = yield* g4();
}

var iterator = g5();

console.log(iterator.next());  //Object {value: 1, done: false}
console.log(iterator.next());  //Object {value: 2, done: false}
console.log(iterator.next());  //Object {value: 3, done: false}
console.log(iterator.next());  //Object {value: undefined, done: true}
console.log(result);           //foo
