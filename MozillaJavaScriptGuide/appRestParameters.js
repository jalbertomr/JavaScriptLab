// Rest Parameters

// From arguments to an array

// Before rest parameters, the following could be found

function funWithOutRest(a, b) {
    var args = Array.prototype.slice.call( arguments, funWithOutRest.length);

    console.log( 'a: ', a, ' b: ', b , ' args:' ,args);
}

funWithOutRest( 'aparm', 'bparm', 'otroc', 'otrod', 5, 6);
//a:  aparm  b:  bparm  args: ["otroc", "otrod", 5, 6]

// with rest parameters
function fun( a, b, ...rest) {
    console.log( 'a: ', a, ' b: ', b , ' rest:', rest);
}

fun( 'aparm', 'bparm', 'otroc', 'otrod', 5, 6);
//a:  aparm  b:  bparm  rest: ["otroc", "otrod", 5, 6]

// Destructuring Rest parameters

function restDestructured( ...[a, b, c]) {
    return a + b + c;
}

console.log(restDestructured(1));           // NaN cause b and c are undefined
console.log(restDestructured(1, 2, 3));     // 6
console.log(restDestructured(1, 2, 3, 4));  // 6 ( the fourt parameter in not destructures)

function lengthOfArgs( ...args){
    console.log( args.length);
}

lengthOfArgs();   //0
lengthOfArgs( 1); // 1
lengthOfArgs( 1, 3, 5, 77); // 4

function multiply( multiplier, ...args) {
    return args.map( function(element) {
                     return multiplier * element;
    })
}

var arr = multiply( 2, 1, 2, 3);
console.log( arr);  // [2, 4, 6]

//The following example shows that Array methods can be used on rest parameters, but not on the arguments object:

function sortRestArgs( ...args) {
    var arr = args.sort();
    return arr;
}

console.log( sortRestArgs( 5, 2, 7, 4));   //[2, 4, 5, 7]

function sortArguments() {
    var arr = arguments.sort();
    return arr;
}

//console.log( sortArguments( 5, 2, 7, 4 ));  //Uncaught TypeError: arguments.sort is not a function

// arguments must be converted to an array to be sorted
function sortArguments2() {
    var arr = Array.prototype.slice.call(arguments);
    var arr = arr.sort();
    return arr;
}

console.log( sortArguments2( 5, 2, 7, 4 ));
