// Classes extends
/* The extends keyword is used in class declarations or class expressions to create a class which is a child of another class.
Syntax

class ChildClass extends ParentClass { ... }

Description

The extends keyword can be used to subclass custom classes as well as built-in objects.

The .prototype of the extension must be an Object or null.
*/
'use strict';

//Example 1 creating a new class declaration-form
// ============================================================

class Polygon {

    constructor(height, width) {
        this.name = 'Polygon';
        this.height = height;
        this.width = width;
    }

    sayName(){
        console.log('In Polygon, Hola, soy un: ', this.name + '.');
    }

    sayHistory() {
        console.log('"Polygon" is derived from the Greek polus (many)' +
                         'and gonia (angle)');
    }
}

console.log("--------- Polygon base class ---------");

let myPolygon = new Polygon(300,500);
myPolygon.sayName();
console.log('The width of the poligon is ' + myPolygon.width);

//Example 2 Creating a new class expresion-form
// ============================================================
console.log("--------- Poly base class ---------");

const MyPoly = class Poly {
    getPolyName() {
        console.log('Hola, he sido creado con una class expression, mi nombre es ',
                   Poly.name);
    }
};

let inst = new MyPoly();
inst.getPolyName();

// Example 3 extending an existing class
// ============================================================

console.log("---------| Polygon <-- Square |--- extenging a class ---------");

class Square extends Polygon {
    constructor(length) {
        super(length, length);
        this.name = 'Square';
    }

    get area() {
        return this.height * this.width;
    }

    set area( value) {
        this.height = this.width = Math.sqrt(value);
    }
}

let s = new Square(5);

s.sayName();

console.log('The Area of this Square is ' + s.area);

s.area = 30;
console.log('The New Area of the square :' + s.area + '=' + s.height + '*' + s.width);

// Example 4: Subclassing methods of a parent class
// ============================================================
console.log("---------| Polygon <-- Rectangle |--- extenging a class ---------");

class Rectangle extends Polygon {
    constructor(height, width) {
        super(height, width);
        this.name = "Rectangle";
    }

    sayName() {
        console.log('In Rectangle, soy un: ', this.name + '.');
        super.sayHistory();
    }
}

let r = new Rectangle(40,80);

r.sayName();

// Example 5: Defining static methods
// ============================================================

// Classes support static members which can be accessed without an
// instance being present.
class Triple {
    // Using the 'static' keyword creates a method which is associated
    // with a class, but not with an instance of the class.
    static triple(n) {
        n = n || 1;
        return n * 3;
    }
}

class BiggerTriple extends Triple {
    static triple(n) {
        return super.triple(n) * super.triple(n);
    }

    static tripleBis(n) {
        return Triple.triple(n) * Triple.triple(n);
    }
}

console.log( Triple.triple());              // 3
console.log( Triple.triple(3));             // 3
console.log( BiggerTriple.triple(3));       // 81
console.log( BiggerTriple.tripleBis(3));    // 81

// Example 6: subclassing build-in classes and DOM

console.log("------- Date -------------");

class MyDate extends Date {
    constructor() {
        super();
    }

    getFormattedDate() {
        var months = ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'];
        return this.getDate() + '-' + months[this.getMonth()] + '-' + this.getFullYear();
    }
}

var aDate = new MyDate();
console.log( aDate.getTime());
console.log( aDate.getDate());
console.log( new Date().getDate());
console.log( aDate.getFormattedDate());

console.log('------ Null Extends ------')

class nullExtends extends null {
  constructor() {}
}

console.log(Object.getPrototypeOf(nullExtends)); // Function.prototype  // function () {}
console.log(Object.getPrototypeOf(nullExtends.prototype)); // null

// Extends Uint8Array

class ExtendedUint8Array extends Uint8Array {
    constructor() {
        super(10);
        this[0] = 255;
        this[255] = 0xFFA;
    }
}

var eua = new ExtendedUint8Array();
console.log( eua.byteLength);

// Extend DOM Audio element

class MyAudio extends Audio {
    constructor() {
        super();
        this._lyrics = '';
    }

    get lyrics() {
        return this._lyrics;
    }

    set lyrics(str) {
        this._lyrics = str;
    }
}

var player = new MyAudio();
player.controls = true;
player.lyrics = 'Never gonna give you up';
document.querySelector('body').appendChild(player);
console.log(player.lyrics);

// Note: The V8 in Chrome 42 supports subclassing built-ins but Arrays.
// Subclassing arrays supported in Chrome 43.

class Stack extends Array {
    constructor() {
        super();
    }

    top() { return this[this.length -1 ];}
}

var myStack = new Stack();
myStack.push('Hello');
myStack.push('World!');
console.log( myStack.top());
console.log( myStack.length);
