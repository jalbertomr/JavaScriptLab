// Module Pattern

// By creating a module wich is self-contained

var testModule = (function(){
    var counter = 0;

    return {
        incrementCounter: function(){
            counter++;
        },

        resetCounter: function(){
            console.log("Counter value before to reset: " + counter);
            counter = 0;
        }
    }
})();

// Uso
testModule.incrementCounter();

testModule.resetCounter();
