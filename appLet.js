console.log(ba);
console.log(bc);

function b() {
    var ba = 'declarada en function b()';
}

var ba = 'definida despues de ser llamada';  //despliega undefined
let bc = 'definida despues de ser llamada';  //despliega Uncaugh ReferenceError: ba is not defined

console.log(b);
