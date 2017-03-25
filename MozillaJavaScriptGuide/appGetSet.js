// Working with objects
// Getters and Setters
var o = { a: 7,
         get b()  { return this.a + 1; },
         set c(x) { this.a = x / 2; }
        };

console.log(o);

console.log(o.b);

console.log(o.c = 40);

console.log(o.b);

/*
Objecta: 20b: (...)get b: b()set c: c(x)__proto__: Object
app.js:10 8
app.js:12 40
app.js:14 21
*/

var now = new Date;

console.log("now.year: "+  now.year);   //undefined

var dateFromProto = Date.prototype;

Object.defineProperty( dateFromProto, "year", {
    get: function(){ return this.getFullYear() },
    set: function(x){ this.setFullYear(x) }
});

var now = new Date;

console.log("now.year: "+ now.year);   //2017

now.year = 2001;

console.log("now.year: "+now.year);     //2001

var o = { a: 123 }

console.log(o.a);

Object.defineProperties( o, {
    "b" : { get() { return this.a + 1 } },
    "c" : { set(x) { this.a = x / 2 } }
});

console.log(o.b);
console.log(o.c = 20);
console.log(o.b);

//Eliminando Proriedades

var miObjeto = new Object;

miObjeto.a = 5;
miObjeto.b = 12;

console.log( "a" in miObjeto);  //true

delete miObjeto.a;

console.log( "a" in miObjeto);  //false

// Comparando Objetos
console.log("1 == '1' : " + (1 == '1'));      //true
console.log("1 === '1': " + (1 === '1'));     //false


var fruta = { nombre: "manzana" };
var fructificada = { nombre: "manzana" };

console.log( fruta == fructificada);  //false
console.log( fruta === fructificada); //false

fructificada = fruta;

console.log( fruta == fructificada);  //true
console.log( fruta === fructificada); //true


