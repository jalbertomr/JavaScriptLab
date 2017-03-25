// Module Pattern

// Object Literals  doesnot require the new word to instantiate

var myObjectLiteral = {
    variablekey: "variablevalue",
    functionKey: function(){ /* ...*/ }
}

// myModule.property = "someValue";

var myModule = {

    myProperty: "someValue",
    // object literals can contain properties and methods.
    // e.g we can define a further object for module configuration:
    myConfig: {
        useCaching: true,
        language: "en"
    },

    // a very basic method
    saySomething: function() {
        console.log("En un StarBucks estudiando...");
    },

    //output a value based on the current configuration
    reportMyConfig: function() {
        console.log("Caching is: " + (this.myConfig.useCaching ? "enabled" : "disabled"));
    },

    // override the current configuration
    updateMyConfig: function( newConfig ) {
        if ( typeof newConfig === "object" ) {
            this.myConfig = newConfig;
            console.log( this.myConfig.language);
        }
    }
};

// output saysomething
myModule.saySomething();

// output: Caching is: enabled
myModule.reportMyConfig();

// output: fr
myModule.updateMyConfig({
    useCaching: false,
    language: "fr"
});

// output: Caching is: disabled
myModule.reportMyConfig();
