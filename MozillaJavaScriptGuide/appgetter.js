// getter
console.log('--- getter ---');
/*
Syntax
Edit

{get prop() { ... } }
{get [expression]() { ... } }
*/
/* Defining a getter on new objects in object initializers
   This will create a pseudo-property latest for object obj, which will return the last array item in log.
*/
var obj = {
    log: ['evento1', 'evento2','evento3','ultimoevento'],
    get latest() {
        if (this.log.length == 0) return undefined;
        return this.log[ this.log.length - 1];
    }
}

console.log( obj.log);      //["evento1", "evento2", "evento3", "ultimoevento"]
console.log( obj.latest);   //will return 'ultimoevento'

//Deleting a getter using the delete operator

delete obj.latest;

console.log( obj.latest);   // undefined

//Defining a getter on existing objects using defineProperty
//To append a getter to an existing object later at any time, use Object.defineProperty().

var o = { a: 0 }

Object.defineProperty( o , 'getPlus1', { get: function(){ return o.a + 1 }} );

console.log( o.getPlus1 );    //return a + 1,  1

//Using a computed property name

var expr = 'foo';

var obj = {
    get [expr]() {
        return 'bar';
    }
}

console.log(obj.foo);   //return bar

console.log(document.getElementById('input') );

/*
get notifier() {
  delete this.notifier;
  return this.notifier = document.getElementById('bookmarked-notification-anchor');
},
*/
