//EncapsAnonFunct.js
//https://stackoverflow.com/questions/1634268/explain-the-encapsulated-anonymous-function-syntax
//Can you explain the reasoning behind the syntax for encapsulated anonymous function in //JavaScript?
//why does this work: (function(){})();  but this doesn't function(){}();

//global import
for(var i = 0; i < 10; i++) {
    (function(i) {
        setTimeout(function() {
            alert("number " + i);
        },1000 * i);
    })(i);
}

var data = 'beto';

(function(data){
    data = ' mas';
}())
alert(data);

// named function
function twoPlusTwo(){
   alert(2 + 2);
}
twoPlusTwo();

// create an anonymous function and assign to a variable
var varTwoPlusTwo = function() {
    alert(2 + 2);
}

varTwoPlusTwo();

//you can encapsulate a block of code by creating an anonymous function, then wrapping in
// in brackets and executing immediately
(function() {
    alert(2 + 2);
})();

//
// It doesn't work bacause of it is parsed as a FUNCTION DECLARATION, and the name identifier of
// function declaration is mandatory

//When you surrounding it with parentesis it is evaluated as a FUNCTION EXPRESSION, and function
//expressions can be named of not

//Functions can be declared in different ways
var multiply1 = new Function("x", "y", "return x * y;");
alert(multiply1(2,3));

function multiply2(x, y) {
    return x * y;
};
alert(multiply2(2,3));

var multiply3 = function (x, y) {
    return x * y;
};
alert(multiply3(2,3));

var multiply4 = function func_name(x, y) {
    return x * y;
};
alert(multiply4(2,3));
