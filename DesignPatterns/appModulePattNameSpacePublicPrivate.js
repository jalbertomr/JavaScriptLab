// Module Pattern

// namespacing, public and private variables:

var myNamespace = (function (){

    var myPrivateVariable, myPrivateMethod;

    // A private counter variable
    myPrivateVariable = 0;

    // A private Method which logs an argument
    myPrivateMethod = function(foo){
        console.log(foo);
    }

    return {

        // A public variable
        myPublicVar: "foo",

        // A public function using privates
        myPublicFunction: function( bar ){

            //increment the private Counter
            myPrivateVariable++;

            // call our private method using bar
            myPrivateMethod( bar );
        }
    }
})();
