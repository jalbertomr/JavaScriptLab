/* www.etnassoft.com
   funciones autoejecutables en JavaScript

   (function(){ ...code... })();
   (function(){}());

// Classic
(function(){})();

// Crockford's favorite
(function(){}());

// Unary versions
+function(){}();

// Facebook version
!function(){}();

// Crazy version
!1%-+~function(){}();
*/

// Very Basic Structure  ( ... )()

function myFunction(){
    console.log( 'very Basic Call of function');
}

myFunction();        //common call

(myFunction)();      //another way to call it

//(function(){ ... })();
(function(){
    console.log('anonymous function autoexec (function(){ ... })();');
})();

//(function(){}())
(function(){
    console.log('anonymous function autoexec (function(){ ... }());')
}());

//Argumentos de preconfiguracion
(function(parm1, parm2){
    console.log(parm1);
 })( 'paramOne' );

(function(parm1, parm2){
    console.log(parm1, parm2);
 })( 'paramOne', 'paramTwo' );

var undefined = 'UNDEFINEDxME';
var DEFINEDXME = "ACSADGASJGLAKSGASMBLRIJASLVKasjgkjahoriv noidrg";

//enlazamos el objeto devuelto al contexto global, no la función en sí misma
(function(){
    var DEFInGlobalContext = "DEFInGlobalContext";
    return DEFInGlobalContext;
})();

//constructor new para conseguir una sintaxis más limpia:
new function(){
    console.log('con new function(){ .. }');
}

new function( parm1 ){
    console.log('con new function(){ ... }(paramOne, ...) : ' + parm1);
}('paramOne', 'paramTwo')

//Patrones que utilizan la función autoejecutable
// 1.- modulo segun Crockford
// Con este diseño, buscamos que la función invocada devuelva un objeto que represente la interfaz pública para un
// determinado bloque de código.

var myApp = (function(){
    var foo = 'interfaz publica que representa el bloque de codigo';
    return {
        foo : foo
    }
})();

console.log( myApp );

