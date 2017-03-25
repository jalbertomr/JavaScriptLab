//High-order Functions

function outter(outterparm){
    return function middle(middleparm){
        return function inner(innerparm){
            return outterparm + middleparm + innerparm;
        }
    }
}

var res = outter('outter')('middle')('inner');    //"outtermiddleinner"

function outter2(outterparm){
    return function(middleparm){
        return function(innerparm){
            return outterparm + middleparm + innerparm;
        }
    }
}

var res2 = outter2('outter')('middle')('inner');  //"outtermiddleinner"

// gretherThan(lolimit)(test)(hilimit)
function PushTest(test){
    return function PushLoLimit(loLimit){
        return function PushHiLimit(hiLimit) {
            return test > loLimit && test < hiLimit
        }
    }
}

var conTestenPila = PushTest(10);

var conTestLoLimitenPila = conTestenPila(5);

var enRango = conTestLoLimitenPila(11);

///


function greatherThan(limit){
    return function(test){ return test > limit }
}

var greatherThan10 = greatherThan(10);

console.log( greatherThan10(11));    //true

// function than cal other function

function noisy( fun ){
    return function( arg ){
        console.log(fun + ' called with arg:' + arg)
        var val = fun(arg);
        console.log('returns: ' + val);
        return val;
    }
}


noisy(Boolean)(0);    // false
noisy(isNaN)(NaN);    // true

// functions that provide new types of control flow

function unless(test, then){
    if (!test) then();
}

function repeat(times, body){
    for(var i = 0; i < times; i++) body(i);
}

repeat( 8, function( n ){
    unless(n % 2 == 0, function(){ console.log( n + ' is even') }  // n is visible here
          )
});

noisy(Boolean)(0, true, 2, 4);    // false  only takes one parameter

function transparentWrapping( fun ){
    return function(arg){
        return fun.apply(null, arguments);
    }
}

console.log(transparentWrapping(Boolean)(1, true, 2 , 4));

function forEach( datos){
    var result;
    for(let e of datos){
        console.log(e);
    }
    return result;
}

forEach([1,2,3,4,'a','b']);

noisy(forEach)([0,true,2,4]);
console.log(transparentWrapping(forEach)([0,true,2,4]));
