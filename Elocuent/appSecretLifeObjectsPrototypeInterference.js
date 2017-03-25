// 6 The secret life of Objects
// Prototype interference

var map = {};

function storePhi( event, phi){
    map[event] = phi;
}

storePhi( 'pizza', 0.069);
storePhi( 'thouched tree', -0.081);

Object.prototype.nonSense = 'hi';

for ( var name in map){
    console.log( name);
}

//pizza
//thouched tree
//nonSense

console.log( 'nonSense' in map); //true

console.log( 'toString' in map);  //true

//delete the problematic property
delete Object.prototype.nonSense;

for ( var name in map){
    console.log( name);
}
//pizza
//thouched tree

Object.defineProperty( Object.prototype, 'hiddenNonSense',
                     { enumareble: false, value: 'hi'});
for ( var name in map){
    console.log( name);
}
//pizza
//thouched tree

console.log(map["hiddenNonSense"]);   //hi

console.log(map.hasOwnProperty("toString"));        //false
console.log(map.hasOwnProperty("hiddenNonSense"));  //false
console.log(map.hasOwnProperty("pizza"));           //true

// again
Object.prototype.nonSense = 'hi';

//recommended write the for-in loops
for ( var name in map){
    if ( map.hasOwnProperty(name))
        console.log( name);
}
//pizza
//thouched tree

// Prototype-less Object

var map = Object.create(null);      //crea objeto map sin prototype

map['pizza'] = 0.069;

console.log( 'pizza' in map);  //true

console.log( 'toString' in map); //false

/*
>map
Objectpizza: 0.069
*/
