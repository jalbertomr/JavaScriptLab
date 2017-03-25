
/* Object.prototype.toString()
*/

var obj = new Object();
console.log(obj.toString());        //[object Object]

function Perro(nombre, raza, color, edad) {
    this.nombre = nombre;
    this.raza = raza;
    this.color = color;
    this.edad = edad;
}

myPerro = new Perro('Cancan','corriente','pinto','7');

console.log(myPerro);        //despliega Perro {nombre: "Cancan", raza: "corriente", color: "pinto", edad: "7"}
console.log(myPerro.toString());   //despliega [object Object]

Perro.prototype.toString = function (){
    return 'toString override\nPerro: ' + this.nombre + '\nraza: ' + this.raza + '\ncolor: ' + this.color + '\nedad: ' + this.edad;
}

console.log(myPerro.toString());   //despliega
/*toString override
Perro: Cancan
raza: corriente
color: pinto
edad: 7
*/

myPerro2 = new Perro('Weber','pastor','beige','5');

console.log(myPerro2);                  //Perro {nombre: "Weber", raza: "pastor", color: "beige", edad: "5"}
console.log(myPerro2.toString);         /*function (){
    return 'toString override\nPerro: ' + this.nombre + '\nraza: ' + this.raza + '\ncolor: ' + this.color + '\nedad: ' + this.edad;
}*/
console.log(myPerro2.toString.toString());  /*function (){
    return 'toString override\nPerro: ' + this.nombre + '\nraza: ' + this.raza + '\ncolor: ' + this.color + '\nedad: ' + this.edad;
}*/




