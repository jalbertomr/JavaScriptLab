// Object Destructuring ...
// Basic Assigment

var o = { p: 42, q: true};
var { p, q } = o;

console.log( p );   //42
console.log( q );   //true

var a, b;

//{a, b} = {a: 1, b:2}     //Uncaught SyntaxError: Unexpected token =
( {a, b} = {a: 1, b:2} );

console.log(a);   // 1
console.log(b);   // 2

// Assigment to a new variable names

var o = { p: 42, q: true }

var { p: foo, q: bar} = o;

console.log( foo ); //42
console.log( bar ); //true

// Default Values  var { a = 3, b = 5 }

var { a = 3, b = 5 } = { b: 10 };

console.log(a);     //3
console.log(b);     //10

// Setting a function parameter's default values
// ES5 Version

function drawES5Chart( options ){
    options    = options        == undefined ? {}            : options;
    var size   = options.size   == undefined ? 'big'         : options.size;
    var coord  = options.coord  == undefined ? { x: 0, y: 0} : options.coord;
    var radius = options.radius == undefined ? 25            : options.radius;
    console.log( size, coord, radius);
    // now do some chart drawing
}

drawES5Chart({
    coord: {x: 10, y:15},
    radius: 40
});

// ES2015 version           default values like { a = 3, b = 5 }
function drawES2015Chart( { size = 'big', coord = {x:0, y:0}, radius = 100 } = {} ){
    console.log( size, coord, radius);
    // now do some chart drawing
}

drawES2015Chart({
    coord: {x: 11, y:22},
    radius: 44
});

// Nested Objects and array destructuring

var metadata = {
    title: 'ScrachPath',
    translations: [{
        locale: 'de',
        localization_tags: [],
        last_edit: '2014-04-14T08:43:47',
        url: '/de/docs/Tools/ScratchPath',
        title: 'JavaScript-Umgebung'
    }],
    url: '/en-US/docs/Tools/ScratchPath'
};

var { title: englishTitle, translations: [{ title: localeTitle }] } = metadata;

console.log( englishTitle );  // ScrathPath
console.log( localeTitle );   // JavaScript-Umgebung

// For-of iteration and destructuring
/*
var arrOfObject = [{ property: 'value1', property2Obj: { prop2_1: 'value2' } }, {...}, {...} ,...];

for(var { property: varValue1, property2Obj: { prop2_1: varValue2 } } of arrOfObject){
    console.log( varValue1, varValue2 );
}
*/

var people = [
    { name: 'Mike Smith',
      family: {
        mother: 'Jane Smith',
        father: 'Harry Smith',
        sister: 'Samantha Smith'
      },
      age: 35
    },
    { name: 'Tom Jones',
      family: {
        mother: 'Narah Jones',
        father: 'Richard Jones',
        brother: 'Howard Jones'
      },
      age: 25
    }
];

for( var { name: n , family: {father: f}} of people){
    console.log('Name: ' + n + " Father: " + f);
}

//Name: Mike Smith Father: Harry Smith
//Name: Tom Jones Father: Richard Jones

// Pulling fields from objects passed as function parameter

function userId({id}){
    return id;
};

function whois( {displayName, fullName: { firstName: name }} ){
  console.log(displayName + ' is ' + name);
};

var user = {
    id: 42,
    displayName: 'Jdoe',
    fullName: {
        firstName: 'John',
        LastName: 'Doe'
    }
};

console.log('userId: ' + userId( user ));   //42
whois( user );                              //Jdoe is John

// Computed object property names and destructuring
// Computed property names, like on object literals, can be used with destructuring

let key = 'z';
let { [key]: fooa } = {z : 'bar'};

console.log( fooa );    // "bar"
