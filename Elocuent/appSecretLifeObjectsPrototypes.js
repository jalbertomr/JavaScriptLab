// 6 The secret life of Objects
// Prototypes

// Object.prototype
console.log('--- Object.prototype ---');
var empty = {};
console.log(empty.toString);        //function toString() { [native code] }
console.log(empty.toString());      //[object Object]

console.log(Object.getPrototypeOf( {} ));
/* regresa:
Object
__defineGetter__:__defineGetter__()
__defineSetter__:__defineSetter__()
__lookupGetter__:__lookupGetter__()
__lookupSetter__:__lookupSetter__()
constructor:Object()
hasOwnProperty:hasOwnProperty()
isPrototypeOf:isPrototypeOf()
propertyIsEnumerable:propertyIsEnumerable()
toLocaleString:toLocaleString()
toString:toString()
valueOf:valueOf()
get __proto__:__proto__()
set __proto__:__proto__()
*/

console.log( Object.getPrototypeOf( {} ) == Object.prototype);   //true

console.log( Object.getPrototypeOf( Object.prototype));          //null   ya no hay mas prototipos

// Function.prototype
function fun(){};

console.log('--- Function.prototype ---');
console.log( Function.prototype );          //function () {}
console.log( fun() );                       //undefined
console.log( typeof fun );                  //function
console.log( Object.getPrototypeOf( fun )); //function () {}

console.log( Object.getPrototypeOf( fun ) == Function.prototype);  //true

// Array.prototype
console.log('--- Array.prototype ---');

console.log( Array.prototype);
console.log( Object.getPrototypeOf( [] ) == Array.prototype);    // true

// Object create from prototype

var protoRabbit = {
    speak: function( line ){
        console.log("The " + this.type + " Rabbit says: '" + line + "'");
    }
};

var killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "killer";

killerRabbit.speak("Fua!");    // The killer Rabbit says: 'Fua!'

