// First Class Functions: Everything you can do with other types you can do with functions
//              Assign them to variables, pass them around, create on the fly
// Function: (As Object can be attached...)
//      Primitive
//      Object
//      Function
//      NAME
//      CODE        "invocable" ()

function doSomething() {
    console.log('in doSomething()');
}

doSomething.newPrimitive = 'primitive in function doSomething()';
doSomething.anotherPrimitive = 'another primitive in doSomething()';

console.log(doSomething);                  //function doSomething() {
                                            //  console.log('in doSomething()');
                                            //}
console.log(doSomething.newPrimitive);      //primitive in function doSomething
console.log(doSomething.anotherPrimitive);  //another primitive in doSomething()
