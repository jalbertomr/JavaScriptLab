

function Perro(nombre, raza, color, edad) {
    this.nombre = nombre;
    this.raza = raza;
    this.color = color;
    this.edad = edad;
}

myPerro = new Perro('perrito','xx','negro','2');

function volcarPropiedades(obj, objName){
    var result = "";
    for( var e in obj){
        result += objName + "." + e + " = " + obj[e] + "<br>";
    }
    result += "<hr>";
    return result;
}

document.write(volcarPropiedades( myPerro, 'myPerro'));

self = this;

document.write(volcarPropiedades( self, 'this'));
