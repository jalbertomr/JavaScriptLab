// Arguments Object
/* The arguments object is an Array-like object corresponding to the arguments passed to a function.
Syntax
Edit

arguments

Description
Edit

The arguments object is a local variable available within all functions. You can refer to a function's arguments within the function by using the arguments object. This object contains an entry for each argument passed to the function, the first entry's index starting at 0. For example, if a function is passed three arguments, you can refer to them as follows:
    arguments[0]
    arguments[1]
    arguments[2]

    also can be set
    arguments[0] = 17;
*/
function funArguments(){
    var arr = [];
    for( var i = 0; i < arguments.length; i++){
        if (i == 3) arguments[i] = 'new value on arguments[3]';
        arr.push(arguments[i]);
    }
    console.log(arr);
}

funArguments( 1, 2, 3, 4, 5);   //  [1, 2, 3, "new value on arguments[3]", 5]

/* The arguments object is not an Array. It is similar to an Array, but does not have any Array properties except length. For example, it does not have the pop method. However it can be converted to a real Array:
*/

var arguments = function(){ return arguments; } // se trea var arguments al contexto global

arguments(1, 2, 4);
/*
Arguments[3]
0:1
1:2
2:3
callee:()
length:3
Symbol(Symbol.iterator):values()
__proto__:Object
*/
// Array.prototype === []

var arr = function(){ return Array.prototype.slice.call(arguments); }

arr(1, 2, 3); //Array[3] 0: 1 1: 2 2: 3 length: 3 __proto__: Array[0]

var arr = function(){ return  [].slice.call(arguments); }

arr(1,2,3); //Array[3] 0: 1 1: 2 2: 3 length: 3 __proto__: Array[0]

// You can also use the Array.from() method or the spread operator to convert arguments to a real Array:
function test() {
    var args = Array.from(arguments);
    var args = [...arguments];
}
/* !!! Using slice on arguments prevents optimizations in some JavaScript engines (V8 for example - more information). If you care for them, try constructing a new array by iterating through the arguments object instead. An alternative would be to use the despised Array constructor as a function: */

function test(){
    var args = (arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments)) ;
}
/* You can use the arguments object if you call a function with more arguments than it is formally declared to accept. This technique is useful for functions that can be passed a variable number of arguments. Use arguments.length to determine the number of arguments passed to the function, and then process each argument by using the arguments object. To determine the number of parameters in the function signature, use the Function.length property. */

function seeNumParams( a, b, c){
    console.log(seeNumParams.length); // 3
    console.log(Function.length);   // 1
    console.log(arguments.length);  // 4
}

seeNumParams( 1, 2, 3, 4);

//The typeof arguments returns 'object'.

function test() {
    console.log(typeof arguments); // 'object'
}

function seeTypeOfArgs() {
    for (i = 0; i < arguments.length; i++)
      console.log(typeof arguments[i]);
}

seeTypeOfArgs( 1, {}, test , 'a', [arguments[0]] );

/* Properties

arguments.callee
    Reference to the currently executing function.
arguments.caller (deprecated)
    Reference to the function that invoked the currently executing function.
arguments.length
    Reference to the number of arguments passed to the function.
arguments[@@iterator]
    Returns a new Array Iterator object that contains the values for each index in the arguments.
*/

var makeIter = function( args ) {
    var nextIndex = 0;
    return {
        next: function() {
            return nextIndex < args.length ? {value: args[nextIndex++], done: false } : {done: true}
        },
        hasnext: function() { return nextIndex < args.length; }
    }
}

function test() {
    //it = arguments[@@iterator];   //invalid unexpected token
    it = makeIter( arguments );
    while( it.hasnext())
        console.log(it.next().value);
}

test( 1, 2, 3, 4);




