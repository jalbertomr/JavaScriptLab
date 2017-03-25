// 6 The secret life of Objects
// Methods

var rabbit = {};
rabbit.speak = function( line ){
    console.log('Rabbit says: \'' + line + "'");
}

rabbit.speak( 'Hola cabezones');

var whiteRabbit = { type: 'white', speak: speak };
var fatRabbit = { type: 'fat', speak: speak };

function speak( line ){
    console.log('The ' + this.type + ' Rabbit says: \'' + line + "'") }

whiteRabbit.speak('Oh my ears and whiskers, ' +
                 'how late its getting!');
fatRabbit.speak('I could sure use a carrot right now.');

speak.apply( fatRabbit, ['Blup!'] );         // apply( object(this) , Array of arguments)

speak.call( whiteRabbit, 'I am White');      // call( object(this) , parameter )

speak.call( { type: 'old'} , 'where is my baston!');

