// 6 The secret life of Objects
// Constructors

// function Constructor
console.log('--- Function Constructor ---');

function RabbitFun( type ) {
    this.type = type;
}

RabbitFun.prototype.speak = function( line ) {
    console.log("The " + this.type + " RabbitFun says '" + line + "'");
}

var whiteRabbitFun = new RabbitFun('white');
whiteRabbitFun.speak('ya estoy creado');

// Object Constructor
var RabbitObj = { type: "red"};

RabbitObj.speak = function( line ) {
    console.log("The " + this.type + " RabbitObj says '" + line + "'");
}

var redRabbitObj = Object.create( RabbitObj );
redRabbitObj.speak('ya estoy creado');

console.log( Object.getPrototypeOf( whiteRabbitFun ));

console.log( Object.getPrototypeOf( redRabbitObj));

/*  function Constructor
whiteRabbitFun:RabbitFun
type:"white"
    __proto__:Object
    constructor:RabbitFun( type )
    speak:( line )
    __proto__:Object
*/

/* Object Constructor
redRabbitObj:Object
    __proto__:Object
    speak:( line )
    type:"red"
    __proto__:Object
*/

console.log( Array.prototype.toString == Object.prototype.toString);   //false

console.log( [1,2,3].toString());      // 1,2,3

console.log( [1,2, 3].join('| '));    // 1| 2| 3

console.log( Object.prototype.toString.call([1,2,3]));  // [object Array]  it doesn't know about arrays

