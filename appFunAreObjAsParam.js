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

function doSomethingWithParam( a ) {
    console.log( a );
}

function doSomethingWithParamAction( a ) {
    a();
}

doSomethingWithParam('valor pasado por parametro a funcion');  //valor pasado por parametro a funcion

doSomethingWithParam( doSomething );            //function doSomething() {
                                                //  console.log('in doSomething()');
                                                //}

doSomethingWithParam( doSomething() );          //in doSomething()
                                                //app.js:15 undefined     //because console.log(a) in function

doSomethingWithParamAction( doSomething );      //in doSomething()

doSomethingWithParam( { someKey: 'someValue', anotherKey: 'anotherValue'} );

doSomethingWithParam( function() {
    console.log('In AnonymousFunction passed as param to function');
     }.call()       );

doSomethingWithParamAction( function() {
    console.log('In AnonymousFunction passed as param to function');
     });
