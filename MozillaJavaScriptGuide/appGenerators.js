// Generators

function* idMaker(){
    var index = 0;
    while( true ){
        yield index++;
    }
}

var gen = idMaker();

console.log( gen.next().value); //0
console.log( gen.next().value); //1
console.log( gen.next().value); //2
// ...

// Advanced Generators

function* fibonacci(){
    var op1 = 1;
    var op2 = 1;
    while( true){
        var current = op2;
        op2 = op1;
        op1 = op1 + current;
        var reset = yield current;
        if ( reset ){
            op1 = 1;
            op2 = 1;

        }
    }
}

var sequence = fibonacci();

console.log( sequence.next().value);    //1
console.log( sequence.next().value);    //1
console.log( sequence.next().value);    //2
console.log( sequence.next().value);    //3
console.log( sequence.next().value);    //5
console.log( sequence.next().value);    //8
console.log( sequence.next().value);    //13
console.log( sequence.next(true).value);//1
console.log( sequence.next().value);    //1
console.log( sequence.next().value);    //2
console.log( sequence.next().value);    //3
console.log( sequence.next().value);    //5
console.log( sequence.next().value);    //8

// Generator Comprehensions

var makeIterator = function( array ) {
    var nextIndex = 0;

    return {
        next: function() {
            return  nextIndex < array.length ? { value: array[nextIndex++], done: false } : { done: true }
        }
    };
}

var it = makeIterator( [1,2,3,4,5,6,7,8,9] );

var doubles = [ for( i of it) i * 2];

//var it2 = (for (i in it));
//console.log(it2.next());  // first element doubled
//console.log(it2.next());  // second element doubled
