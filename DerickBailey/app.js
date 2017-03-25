// Build Your own Curry Function
// file: appCurryFunctionScalable.js

// functional javaScript libraries like lodash, ramda must implements
//

function curry(fn) {
    return function curried() {
        var args = Array.prototype.slice.call(arguments);
        if (args.length >= fn.length) {
            return fn.apply(undefined, args);
        } else {
            return function(a) {
                var newArgs = [].concat(args);
                newArgs.push(a);
                return curried.apply(undefined, newArgs);
            }
        }
    }
}

// curry with version 6
function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn(...args);
        } else {
            return function(a) {
                return curried(...[...args, a]);
            }
        }
    }
}

function add(a, b) {
    return a + b;
}

var curryAdd = curry(add);

var add5 = curryAdd(5);

console.log( add5(1));  //6
console.log( add5(2));  //7
console.log( add5(3));  //8

console.log( curryAdd(7,3));  //10

function threeParms(a, b, c) {
    return a + b + c;
}

var curry3Parm = curry(threeParms);

var curry3Parm7 = curry3Parm(7);

var curry3Parm73 = curry3Parm(7,3);

console.log( curry3Parm);
/*
function curried() {
        var args = Array.prototype.slice.call(arguments);
        if (args.length >= fn.length) {
            return fn.apply(undefined, args);
        } else {
            r…
*/
console.log( curry3Parm(1));
/*
function curried() {
        var args = Array.prototype.slice.call(arguments);
        if (args.length >= fn.length) {
            return fn.apply(undefined, args);
        } else {
            r…
*/

/*
>curry3Parm()
function (a) {
                var newArgs = [].concat(args);
                newArgs.push(a);
                return curried.apply(undefined, newArgs);
            }
>curry3Parm7
function (a) {
                var newArgs = [].concat(args);
                newArgs.push(a);
                return curried.apply(undefined, newArgs);
            }
>curry3Parm7()
function (a) {
                var newArgs = [].concat(args);
                newArgs.push(a);
                return curried.apply(undefined, newArgs);
            }
>curry3Parm73
function (a) {
                var newArgs = [].concat(args);
                newArgs.push(a);
                return curried.apply(undefined, newArgs);
            }
*/

console.log( curry3Parm(1,2,3,4,5)); // 6


console.log( curry3Parm73(5) ); // 15
