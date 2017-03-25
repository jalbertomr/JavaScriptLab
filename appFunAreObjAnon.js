// First Class Functions: Everything you can do with other types you can do with functions
//              Assign them to variables, pass them around, create on the fly
// Function: (As Object can be attached...)
//      Primitive
//      Object
//      Function
//      NAME
//      CODE        "invocable" ()

console.log(a);                     //undefined

console.log(doSomething);           //function doSomething() {
                                    //  console.log('In doSomething');
                                    //}

console.log(varWithdoSomethinginVar);      //undefined

//anonymousFunction();                //Uncaught TypeError: anonymousFunction is not a function

var a = 'contenido de var a';

function doSomething() {
    console.log('In doSomething');
}

var varWithdoSomethinginVar = function doSomethinginVar() {
    console.log('In doSomethinginVar()');
}

var varAnonymousFunction = function() {
    console.log('in anonymousFunction');
}

console.log(a);                     //contenido de var a

console.log(doSomething);           //function doSomething() {
                                    //  console.log('In doSomething');
                                    //}


console.log(varWithdoSomethinginVar);  // function doSomethinginVar() {
                                        //   console.log('In doSomethinginVar()');
                                        // }

varAnonymousFunction();             //in anonymousFunction
