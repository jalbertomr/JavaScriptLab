// Currying functions in JavaScript

var add = (a,b) => a + b;

add(4,3);

var add = a => b => a + b;

var add5 = add(5);

add5;    // b => a + b

console.log( add5(4) );  // 9

var add = function(a) {
                return function(b) { return a + b; }
            }

var add3 = add(3);

add3;    //function (b) { return a + b; }

console.log( add3(5)); // 8

