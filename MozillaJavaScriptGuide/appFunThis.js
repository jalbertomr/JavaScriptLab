// Function lexico this

//

console.log(new Date().toDateString());

function PersonNoFunciona() {
    // El constructor Person() define `this` como el mismo.
    this.age = 0;

    setInterval( function crecer() {
        // En modo no estricto, la funcion growUp() define `this`
        // como el objeto global, el cual es diferente de el `this`
        // definido por el constructor Person().
        this.age++; }
    , 1000);
}

var pn = new PersonNoFunciona();

function Person() {
    var self = this;

    self.age = 0;

    setInterval( function crecer() {
      // La retrollamada se refiere a la variable `self` de la cual
      // el valor es el objeto esperado.
        self.age++; }
    , 1000);
}

var p = new Person();
