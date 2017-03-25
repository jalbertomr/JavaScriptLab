var curDate = new Date().toLocaleString;
var time = 'Sync Time:' + curDate;
document.write(new Date().toLocaleString());
console.log(new Date().toLocaleString());
//--------------------------------------------------------

var varFunction = function conNombre(){
  console.log('invarFunction');
}


function unaFunction(){
    console.log('in unaFunction');
}

//conNombre();      //error ... is not defined

varFunction;        //nada
varFunction();      //se ejecuta ...

console.log( 'typeof varFunction.conNombre: ' + typeof varFunction.conNombre);              //undefined
//console.log( 'typeof varFunction.conNombre(): ' + typeof varFunction.conNombre());        //se invoca, error no es una funcion
console.log( 'typeof unaFunction: ' + typeof unaFunction);              //function
console.log( 'typeof unaFunction(): ' + typeof unaFunction());          //undefined

//varFunction();
