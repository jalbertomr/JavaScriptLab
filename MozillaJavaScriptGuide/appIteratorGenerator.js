// Iterators and Generators

var makeIterator = function( array ) {
    var nextIndex = 0;

    return {
        next: function() {
            return nextIndex < array.length ?
                { value: array[nextIndex++], done: false } : { done: true }
        },
        hasnext: function() {
           return nextIndex < array.length;
        },
        reset: function() {
            nextIndex = 0;
        }
    };
}

var it = makeIterator(['uno','dos','final']);
console.log( it.next().value );
console.log( it.next().value );
console.log( it.done);

it.reset();
while( it.hasnext()){
    console.log( it.next().value );
}

// iterables
var myIterable = {}
myIterable[Symbol.iterator] = function* () {
    yield 1;
    yield 2;
    yield 3;
};
[...myIterable]  //[1, 2, 3]

// Build-in iterables
//String, Array, TypedArray, Map, Set tienen metodo Symbol.iterator

// Syntax expecting iterables
// iterables -> for-of, spread operator, yield*, desestructuring assigment

for( var value of ['a','b','c'])
    console.log(value);
//a
//b
//c

// Spread syntax
//>[..."abc"] // ["a", "b", "c"]

// Generator function  function*

function* gen(){
    yield* ['a','b','c'];
}

gen().next();  //Object {value: "a", done: false}

// Generator function function* to Objects
var obj1 = { key1: 'value1'};
var obj2 = { key2: 'value2'};
var obj3 = { key3: 'value3'};

function* funGenObj(){
    yield* [ obj1, obj2, obj3];
}

var arrObj = [...funGenObj()];

var genObj = funGenObj();
var arrObj2 = [...genObj];


[a, b, c] = new Set(['a','b','c']);

//>a
// "a"

[keya, keyb, keyc] = new Set(['valuea','valueb','valuec']);

//>keyb
// "valueb"


// Generators is function*

