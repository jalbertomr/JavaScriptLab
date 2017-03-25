// Function.prototype.bind()
/* Con SetTimeOut
De manera predeterminada, dentro de window.setTimeout(), la palabra reservada this será setteada al objeto window (o a global). Cuando se esté trabajando con métodos de clase que requieran que this se refiera a instancias de clase, usted puede explícitamente ligar this a la función callback para mantener la referencia de la instancia.

El resultado de este ejercicion ...???
*/

console.log(new Date().toLocaleString() );

function FlorTardio() {
    this.NumPetalos = Math.ceil(Math.random() * 12) + 1;
    console.log(NumPetalos);
}

//Declare Florecer despues de un retraso de 1 seg.
FlorTardio.prototype.Florecer = function() {
    window.setTimeout(this.declare.bind(this), 1000);
}


FlorTardio.prototype.declare = function() {
    console.log('Soy una Hermosa flor con ' + this.NumPetalos + 'petalos');
}

//Funciones ligadas usadas como constructores
function Point(x , y) {
    this.x = x;
    this.y = y;
}

Point.prototype.toString = function() {
    return this.x + ', ' + this.y;
}

var p = new Point(3,4);
console.log(p.toString());     // 3, 4

var emptyObj = {};     //objecto vacio
var YAxisPoint = Point.bind( emptyObj, 7 /* x */);
// not supported in the polyfill below
// work fine with native bind
var YAxisPoint2 = Point.bind( null, 0 /* x */);

var axisPoint = new YAxisPoint(5);
console.log(axisPoint.toString());     //7, 5

var axisPoint2 = new YAxisPoint2(8, 7);
console.log(axisPoint2.toString());    //0, 8

console.log(axisPoint instanceof Point);            //true
console.log(YAxisPoint2 instanceof YAxisPoint);      //false

/*desde la consola
YAxisPoint(13);
emptyObj.x + ', ' + emptyObj.y
> 7, 13
*/

var otherEmptyObj = {};
var YBPoint = Point.bind(otherEmptyObj, 7, 13);
YBPoint();
console.log(otherEmptyObj.x + ', ' + otherEmptyObj.y);  //7, 13



