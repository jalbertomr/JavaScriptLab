//ModuleExport.js
//http://www.nodehispano.com/2012/02/creando-modulos-con-node-js-nodejs/

//Los siguientes ejemplos son validos:

module.exports.PI = Math.PI;
module.exports.SQRT2 = Math.SQRT2;

//También:

var miFuncion = function(){
  return 'return de miFunction';
}
module.exports = miFuncion;

// utilidades.js
var max = module.exports.max = function(array){
  var a = array.sort();
  return a[a.length-1];
}
var min = module.exports.min = function(array){
  var a = array.sort();
  return a[0];
}
var unique = module.exports.unique = function(array){
  return array.filter(function(v, i, a) {
                 return a.lastIndexOf(v) === i; })
             .sort();
}

(function(ut){
  ut.max = function(array){
    var a = array.sort();
    return a[a.length-1];
  };
  ut.min = function(array){
    var a = array.sort();
    return a[0];
  };
  ut.unique = function(array){
    return array.filter(function(v, i, a) {
                  return a.lastIndexOf(v) === i; })
                .sort();
  }
  return ut;
})(typeof exports === "undefined" ? utilidades = {} : exports);


var ut = function(array){
  this.array = array;
}
ut.prototype.max = function(){
  var a = this.array.sort();
  return a[a.length-1];
};
ut.prototype.min = function(){
  var a = this.array.sort();
  return a[0];
};
ut.prototype.unique = function(){
  return this.array.filter(function(v, i, a) {
                      return a.lastIndexOf(v) === i; })
                    .sort();
};

module.exports = exports = ut;


//Este último método utiliza prototype, como pueden ver estamos extendiendo las propiedades del //Array inicial, obteniendo los metodos. En este caso es necesario inicializar el objeto a //evaluar con new METHOD(Array). Este método es muy útil. Si hago unrequire('./utilidades') me //loguea [Function]. A excepción de los dos anteriores que me muestran lo siguiente:

{ max: [Function],
  min: [Function],
  unique: [Function] }

// superapp.js
var u = require('./utilidades'); // asumiendo que esta en el mismo dir
var test = [0,3,4,5,4,3,4,2];

console.log(u.max(test)); // => 5
console.log(u.min(test)); // => 0
console.log(u.unique(test)); // => [0,2,3,4,5]

// superapp.js
var u = require('./utilidades');
var test = new u([0,3,4,5,4,3,4,2]);

console.log(test.min()) //=> 0
console.log(test.max()) //=> 5
console.log(test.unique()); // => [0,2,3,4,5]
