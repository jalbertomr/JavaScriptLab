// Working with objects
//
// nombreDelObjeto.nombreDeLaPropiedad
// nombreDelObjeto["nombreDeLaPropiedad"]

var miAuto = new Object();
miAuto.marca = "Ford";
miAuto.modelo = "Mustang";
miAuto.ano = 1969;

console.log( miAuto );

miAuto["marca"] = "Porche";
miAuto["modelo"] = "carrera";
miAuto["ano"] = 2017;

console.log( miAuto);

var miObjeto = new Object(),
    cadena = "unaCadena",           //otra variable
    numAleatorio = Math.random,
    objeto = new Object();

console.log( miObjeto );

miObjeto.type               = "sintaxis con punto";
miObjeto["Fecha de creación"] = "Cadena con espacions y acento";
miObjeto[cadena]               = "String value";
miObjeto[numAleatorio]             = "Numero Aleatorio";
miObjeto[objeto]                = "objeto";
miObjeto[""]                    = "incluso una cadena vacia";

console.log( miObjeto );

var nombrePropiedad = "marca";
miAuto[nombrePropiedad] = "Marca Actualizada";

nombrePropiedad = "modelo";
miAuto[nombrePropiedad] = "Modelo Actualizado";

console.log( miAuto);

function mostrarPropiedades( objeto, nombreObjeto){
    resultado = "";
    for (var i in objeto){
        if (objeto.hasOwnProperty(i)){
          resultado += nombreObjeto + '.' + i + ' = ' + objeto[i] + ' type: ' + typeof objeto[i] + '\n';
        }
    }
    return resultado;
}

console.log( mostrarPropiedades( miAuto, "miAuto"));

/* Listando todas las propiedades de un objeto

A partir de ECMAScript 5, hay tres formas nativas de "Lista/cruzada" de propiedades de objeto:

    bucles for...in
    Este método atraviesa todas las propiedades enumerables de un objeto y su cadena de prototipo
    Object.keys(o)
    Este método devuelve una matriz con los mismos (no en la cadena de prototipos) nombres ("keys") enumerables de las popiedades de un objeto o.
    Object.getOwnPropertyNames(o)
    Este método devuelve una matriz que contiene todos los nombres (enumerables o no) de las propiedades de un objeto o.
*/

console.log( Object.keys( miAuto ) );
/*Array[3]0: "marca"1: "modelo"2: "ano"length: 3__proto__: Array[0]concat: concat()constructor: Array()copyWithin: copyWithin()entries: entries()every: every()fill: fill()filter: filter()find: find()findIndex: findIndex()forEach: forEach()includes: includes()indexOf: indexOf()join: join()keys: keys()lastIndexOf: lastIndexOf()length: 0map: map()pop: pop()push: push()reduce: reduce()reduceRight: reduceRight()reverse: reverse()shift: shift()slice: slice()some: some()sort: sort()splice: splice()toLocaleString: toLocaleString()toString: toString()unshift: unshift()Symbol(Symbol.iterator): values()Symbol(Symbol.unscopables): Object__proto__: Object*/

console.log( Object.getOwnPropertyNames( miAuto ) );
/*Array[3]0: "marca"1: "modelo"2: "ano"length: 3__proto__: Array[0]concat: concat()constructor: Array()copyWithin: copyWithin()entries: entries()every: every()fill: fill()filter: filter()find: find()findIndex: findIndex()forEach: forEach()includes: includes()indexOf: indexOf()join: join()keys: keys()lastIndexOf: lastIndexOf()length: 0map: map()pop: pop()push: push()reduce: reduce()reduceRight: reduceRight()reverse: reverse()shift: shift()slice: slice()some: some()sort: sort()splice: splice()toLocaleString: toLocaleString()toString: toString()unshift: unshift()Symbol(Symbol.iterator): values()Symbol(Symbol.unscopables): Object__proto__: Object*/

function listAllProperties( object){
    var objToInspect;
    var result = [];
    for( objToInspect = object ; objToInspect !== null ; objToInspect = Object.getPrototypeOf( objToInspect)){
        result = result.concat( Object.getOwnPropertyNames(objToInspect) ) + '\n';
    }
    return result;
}

console.log( listAllProperties( miAuto));
/*marca,modelo,ano
__defineGetter__,__defineSetter__,hasOwnProperty,__lookupGetter__,__lookupSetter__,propertyIsEnumerable,__proto__,constructor,toString,toLocaleString,valueOf,isPrototypeOf*/

