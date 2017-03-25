// Function.prototype.bind()

this.x = 9;
var module = {
    x: 81,
    getX: function(){ return this.x; }
};

console.log( module.getX() );     //81    take this from module

var varModuleGetX = module.getX;
console.log( varModuleGetX() );   //9       take this from grobal context

var varModuleGetXBind = varModuleGetX.bind(module );
console.log( varModuleGetXBind() );   //81      take this form module

var modulegetX = module.getX;
var modulegetXbindModule = (module.getX).bind(module);
                    //module.getX.bind(module);   //tambien funciona

console.log( 'modulegetX(): ' + modulegetX());                      //9
console.log( 'modulegetXbindModule():' + modulegetXbindModule() );  //81
//Funciones Parciales

function list() {
    return Array.prototype.slice.call(arguments);
}

var list1 = list(1, 2, 3);      //[1, 2, 3]
console.log(list1);

// Crea funcion (sin referencai this) con argumento inicial predeterminado
var leadingYaConValor37List = list.bind( undefined, 37);
var leadingYaConValor_XXX_List = list.bind( undefined, '_XXX_');

console.log(leadingYaConValor37List());
console.log(leadingYaConValor_XXX_List());

var listPre37 = leadingYaConValor37List(1, 2, 3);      //[37, 1, 2, 3]
var listPreXXX = leadingYaConValor_XXX_List(1, 2, 3);  //["_XXX_", 1, 2, 3]

console.log(listPre37);
console.log(listPreXXX);
