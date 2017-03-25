/* Examples

Defining a function that concatenates several strings

This example defines a function that concatenates several strings. The only formal argument for the function is a string that specifies the characters that separate the items to concatenate. The function is defined as follows:
*/

function myConcat( separator ){
    var args = Array.prototype.slice.call(arguments, 1);  // toma a partir del segundo parametro
    return args.join( separator );                        // return in a string
}

console.log( myConcat( ',', 'red', 'orange', 'blue') );  // red,orange,blue
console.log( myConcat('; ', 'elephant', 'giraffe', 'lion', 'cheetah'));  //elephant; giraffe; lion; cheetah
console.log( myConcat('. ', 'sage', 'basil', 'oregano', 'pepper', 'parsley')); //sage. basil. oregano. pepper. parsley

/* Defining a function that creates HTML lists

This example defines a function that creates a string containing HTML for a list. The only formal argument for the function is a string that is "u" if the list is to be unordered (bulleted), or "o" if the list is to be ordered (numbered). The function is defined as follows:
*/

// list( 'u', 'one', 'two', 'three');
/*
<ul>
    <li>one</li>
    <li>two</li>
    <li>three</li>
</ul>
*/

document.write('<ol><li>one</li><li>two</li><li>three</li></ol>');


function list( type ) {
    var res = '<' + type + 'l><li>';
    var mid = [].slice.call(arguments, 1);
    mid = mid.join('</li><li>');
    res += mid
    res += '</li></' + type + 'l>';
    return res;
}

console.log(list('u','one','two','Three'));
document.write(list('u','one','two','Three'));
document.write(list('o','one','two','Three'));

/* Rest, default and destructured parameters

The arguments object can be used in conjunction with rest parameters, default parameters or destructured parameters.
*/

function foo(...args) {
    console.log(args);       //[1, 2, 3]
    return arguments;
}

console.log( foo(1, 2, 3));  //[1, 2, 3]

/* However, in non-strict functions, a mapped arguments object is only provided if the function does not contain any rest parameters, any default parameters or any destructured parameters. For example, in the following function that uses a default parameter, 10 instead of 100 is returned:
*/
function bar( a = 1 ){   // default value
    arguments[0] = 99;   // this is not appliend
    return a;
}

console.log( bar(10) );  // 10

/* n this example, where there are no rest parameters, any default parameters or any destructured parameters, 100 is returned:
*/

function zoo(a) {        // no default value, no rest, no destruct
    arguments[0] = 99;   // this is applied
    return a;
}

console.log( zoo( 10));  // 99

/* Actually if there are no  rest parameters, any default parameters or any destructured parameters,  the formal arguments will refer the arguments object's latest values, when the formal arguments value needs to be read then arguments latest data will be read, and when formal arguments value changes, arguments will also be updated. See the code below:
*/

function func( a, b) {
    arguments[0] = 90;          // sustitutes de a value
    arguments[1] = 99;          // sustitutes de b value
    console.log(a + ', ' + b);
}

func( 1, 2);     // 90, 99

function func( a, b) {
    a = 9;                      // sustitutes the arguments[0]
    b = 99;                     // sustitutes the arguments[1]
    console.log(arguments[0] + ', ' + arguments[1]);
}

func( 1, 2);   // 9, 99

/* But if rest parameters, or any default parameters or any destructured parameters are present, then normal behaviour like default parameters will be proccessed. See,
*/

function func( a, b, c = 1) {   // default present
    arguments[0] = 90;          // no sustitutes de a value
    arguments[1] = 99;          // no sustitutes de b value
    console.log(a + ', ' + b);
}

func( 1, 2);      // 1, 2

/* NOTE in the last three examples the las value of the vars a, b, arguments[0]... are showed to the previos values
