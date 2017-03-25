// Spread Syntax
// The spread syntax allows an expression to be expanded in places where multiple arguments (for function calls) or
// multiple elements (for array literals) or multiple variables  (for destructuring assignment) are expected.

// Syntax for function calls
// for function calls
// myFunction(...iterableObj);
// for Array literals
// [...iterableObj, 4, 5, 6]

// A better apply
// it is common to use Function.prototype.apply in cases where you want to use an array as arguments to a function.

function myfunction(x, y, z) { };
var args = [1, 2, 3];
myfunction.apply(null, args);

// with ES2015 spread you can now write like that

myfunction(...args);

function myfunction(v, w, x, y, z){ }
var args = [1, 2];
myfunction( -1, ...args, 2, ...[3]);

// A more powerfull array literal

var parts = ['hombros','brazos'];
var lyrics = ['cabeza', ...parts, 'y', 'tobillos',]
//["cabeza", "hombros", "brazos", "y", "tobillos"]

// Apply for new

//var dateFields = readDateFields(database);
//var d = new Date(...dateFields);

// Copy an Array

var arr = [1, 2, 3];
var arr2 = [...arr];    //like arr.slice();
arr2.push(4);

// arr2 becomes [1, 2, 3, 4]
// arr remains unaffected

var a = [[1],[2],[3]];
var b = [...a];
b.shift().shift();  // a is now [[], [2], [3]]

// A  better way to concatenate arrays
// Example: concat is often used to concatenate an array to the end of an existing array. In ES5 this is done as:

var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];

console.log( arr1.concat(arr2) )
//> [1, 2, 3, 4, 5, 6]

// In ES2015 with spread this becomes:

arr1 = [...arr1, ...arr2];    // [1, 2, 3, 4, 5, 6]

//  unshift is often used to insert values in an array at the start of an existing array. In ES5 this is done as:

var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];

Array.prototype.unshift.apply(arr2, arr1);  // [1, 2, 3, 4, 5, 6]

//Only for iterables

//Note that the spread operator can be applied only to iterable objects:

var obj = {'key1': 'value1'};
var array = [...obj]; // TypeError: obj is not iterable

/*Rest operator
Edit

Rest operator looks exactly like the spread syntax, and is used for destructuring arrays and objects. In a way, Rest elements are the opposite of spread elements - spread elements 'expands' an array into its elements, and rest elements collects multiple elements and 'condenses' into a single element. See rest parameters.
*/
