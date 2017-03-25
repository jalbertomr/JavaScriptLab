// Function.prototype.call()

console.info(this);

function Base( Baseparm ){
    Baseparam = Baseparm;       // Baseparm es creado como atributo de this, contexto global
    var BaseparamIN = Baseparm;   // Baseparm ya no es atributo de this, contexto global

    console.info( this );
    console.info('in Base(' + Baseparm + ')' );
    return this;
}

base = Base( "testparm" );

function Product( name, price ){
    this.name = name;
    this.price = price;

    if(price < 0)
        throw RangeError('Intenta Crear ' + name + ' con precio negativo');
    return this;
}

function Food( name, price){
    Product.call( this, name, price);    //llama al constructor de Product
    this.category = 'Food';
}
Food.prototype = new Product();

function Toy( name, price){
    Product.call( this, name, price);
    this.category = 'Toy';
}
Toy.prototype = new Product();

var cheese = new Food( 'feta', 5);
var fun = new Toy('robot', 40);
//var regalo = new Toy('donativo', -99);

var animales = [ {especie: 'leon', nombre: 'King' },
                 {especie: 'ballena', nombre: 'Keiko'}
               ];

for (var i = 0; i < animales.length; i++){
    ( function ( i ){
        this.print = function(){
            console.log('#' + i + ' ' + this.especie + ': ' + this.nombre);
        }
        this.print();
    }).call(animales[i], i);     //this (el objecto animal en turno del array, es pasado como this, a la funcion anonima)
}
