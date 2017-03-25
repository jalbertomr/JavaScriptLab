// Build Your own Curry Function
// file: appCurryNotScalable.js

// a curry for a function of two parameters
// This curry structure function is not scalable, when we need more params
// we must to add levels of functions
function curry(fn) {
    return function(a) {
        return function(b){
            return fn.call(undefined, a, b);
        }
    };
}

// calling the curry function differently we get
console.log( curry );      //his entrire definition
/*
function curry(fn) {
    return function(a) {
        return function(b){
            return fn.call(undefined, a, b);
        }
    };
}
*/
console.log( curry() );    //his definition minus one level in function context
/*
  this is returned for any call to curry( anythinghere ), e.g. curry( funWithOutParm ),
  curry( funWithOutParm() ), curry( funOneParm ), curry( funOneParm() ), curry( funOneParm(a) )...

function (a) {
        return function(b){
            return fn.call(undefined, a, b);
        }
    }
*/

// we define a function without params, but this does not work for now
function without(){
    return;//undefined             //always return undefined
}


// We define a function to be passed to the curry function
function add(a, b) {
    return a + b;
}

var curryAdd = curry(add);

console.log( curryAdd(9));
/*function (b){
            return fn.call(undefined, a, b);
        }
*/

var add5 = curryAdd(5);

console.log( add5(1));  // 6
console.log( add5(2));  // 7
console.log( add5(3));  // 8

console.log( curryAdd(7, 4) ); /*curry a: 7
                                function (b){ console.log('curry b: ' + b);
                                    return fn.call(undefined, a, b);
                                }
                                */
