//5 High-order Functions

var total = 0, count= 0;
while (count <= 10){
    total += count;
    count++;
}
console.log('total: ' + total);

//console.log( sum(range(1 ,10));

function range(start, count){
    return Array.apply( null, Array(count))
    .map( function( _, index){ return index + start })
}

console.log(range(0, 10));

var arr = range(1,10);

var Stotal = arr.reduce((a,b) => a + b, 0);

console.log(Stotal);

function sum( array ){
    var total = 0;
    for( var i = 0; i < array.length; i++)
        total += array[i];
    return total;
}

console.log( sum( arr));               //55
console.log( sum ( range (1, 10)));     //55
