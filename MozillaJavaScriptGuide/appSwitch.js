// Flow Control
/* valores falsos

    false
    undefined
    null
    0
    NaN
    la cadena vacía ("")

var b = new Boolean(false);
if (b) // Esta condición se evalua a true
*/
/*switch (expresión) {
  case etiqueta_1:
    sentencias_1
    [break;]
  case etiqueta_2:
    sentencias_2
    [break;]
    ...
  default:
    sentencias_por_defecto
    [break;]
}
*/
const MAX_ELEM = 6;
var dist = new Array(MAX_ELEM), i;
dist.fill(0, 0, MAX_ELEM);

for (i = 0 ; i < 100; i++){
    var e = Math.ceil( Math.random() * MAX_ELEM ) - 1;
    document.write( e);
    dist[e] += 1;
}

console.log(dist);

var frutas = ['naranja','melon','manzana','pera','pina','limon'];

salir = false;
while ( !salir ){
    switch( frutas[Math.ceil(Math.random() * MAX_ELEM ) - 1 ] ){
        case frutas[0]: console.log(frutas[0]); break;
        case frutas[1]: console.log(frutas[1]); break;
        case frutas[2]: console.log(frutas[2]); break;
        case frutas[3]: console.log(frutas[3]); break;
        case frutas[4]: console.log(frutas[4]); break;
        case frutas[5]: console.log(frutas[5]); salir = true; break;
        default:
            console.log('por default');
    }
}

