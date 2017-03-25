// Object.create()
function Shape(){
    this.x = 0;
    this.y = 0;
    console.info('Shape Created!');
}

/*
Shape.move = function( x, y ){
    this.x += x;
    this.y += y;
    console.info('Shape moved!');
}
*/
/*
Shape
x:0
y:0
__proto__:Object
    constructor:Shape()
        arguments:null
        caller:null
        length:0
        move:( x, y )      <--- move() se crea en Constructor
        name:"Shape"
        prototype:Object
        __proto__:()
        [[FunctionLocation]]:app.js:2
        [[Scopes]]:Scopes[1]
        __proto__:Object
*/

Shape.prototype.move = function( x, y ){
    this.x += x;
    this.y += y;
    console.info('Shape moved!');
}
/*
Shape
    x:0
    y:0
    __proto__:Object
        constructor:Shape()
        move:( x, y )      <--- move() se crea en __proto__
        __proto__:Object
*/

//rectangle subclass
function Rectangle(){
    Shape.call(this);
    console.info('Rectangle Created!');
}

//subclass extends superclass
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

var shape = new Shape();
var rect = new Rectangle();

console.log('is rect instance of Rectangle? ', rect instanceof Rectangle);   //true
console.log('is rect instance of Shape? ', rect instanceof Shape);          //true

rect.move(1,1);             //Shape moved!

//If you wish to inherit from multiple objects, then mixins are a possibility.
/*
function MyClass() {
  SuperClass.call(this);
  OtherSuperClass.call(this);
}

MyClass.prototype = Object.create(SuperClass.prototype); // inherit
mixin(MyClass.prototype, OtherSuperClass.prototype); // mixin

MyClass.prototype.myMethod = function() {
  // do a thing
};
*/


