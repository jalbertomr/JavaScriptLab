//JavaScriptModules.js
//https://medium.freecodecamp.org/javascript-modules-a-beginner-s-guide-783f7d7a5fcc

//Module pattern
//example 1: anonymous closure
var global = "Soy una variable global";


(function () {
  //we keep these variables private inside this closure scope
  var myGrades = [93,95, 88,0, 55, 91];

  var average = function() {
      var total = myGrades.reduce( function(accumulator, item) {
                                        return accumulator + item }
                                  , 0);

      return 'El promedio es ' + total / myGrades.length + '.';
      }

  var failing = function() {
      var failingGrades = myGrades.filter( function(item) {
          return item < 70;
      });

      return 'Has fallado ' + failingGrades.length + ' veces';
  }

  console.log(failing());
  console.log(global);

}());

console.log(global);

var globalVariable = {};
//example 2 Global Import
(function(globalVariable){
    //keep this variables private inside this closure scope
    var privateFunction = function() {
        console.log('sssssh, esta variable es privada');
    }

    //Expose de below methods via globalVariable interface while
    //hiding the implementation of the method within the
    //function() block

    globalVariable.each = function(collection, iterator) {
        if (Array.isArray(collection)) {
            for ( var i = 0; i < collection.length; i++) {
                iterator(collection[i], i, collection);
            }
        } else {
            for (var key in collection) {
                iterator(collection[key], key, collection);
            }
        }
    };

    globalVariable.filter = function(collection, test) {
        var filtered = [];
        globalVariable.each(collection, function(item){
           if (test(item)) {
               filtered.push(item);
           }
        });
        return filtered;
    }

    globalVariable.map = function(collection, iterator) {
        var mapped = [];
        globalUtils.each(collection, function( value, key, collection) {
           mapped.push(iterator(value));
        });
        return mapped;
    }

    globalVariable.reduce = function(collection, iterator, accumulator) {
        var startingValueMissing = accumulator = undefined;

        globalVariable.each(collection, function(item){
           if(startingValueMissing) {
               accumulator = item;
               startingValueMissing = false;
           } else {
               accumulator = iterator(accumulator, item);
           }
        });
        return accumulator;

    }
}(globalVariable));

//example 3: Object Interface
var myGradesCalculate = (function() {
    //keep this variable private inside this closure scope
    var myGrades = [93, 95, 88, 0, 55, 91];

    //Expose this functions via an interface while hiding
    //the implementation of the module within the function() block

    return {
        average: function() {
            var total = myGrades.reduce( function(accumulator, item){
                return accumulator + item;
            }, 0);

            return 'el promedio es ' + total / myGrades.length + '.';
        },
        failing: function() {
            var failingGrades = myGrades.filter( function(item) {
                return item < 70;
            });

            return 'has fallado ' + failingGrades.length + ' veces.';
        }
    }
})();

console.log(myGradesCalculate.average());
console.log(myGradesCalculate.failing());

//Example 4 Revealing module pattern
var myGradesCalculate2 = (function() {
    //keep this variable private inside this closure scope
    var myGrades = [93, 95, 88, 0, 55, 91];

    //Expose this functions via an interface while hiding
    //the implementation of the module within the function() block


    var average = function() {
            var total = myGrades.reduce( function(accumulator, item){
                return accumulator + item;
            }, 0);

            return 'el promedio es ' + total / myGrades.length + '.';
        };

    var failing = function() {
            var failingGrades = myGrades.filter( function(item) {
                return item < 70;
            });

            return 'has fallado ' + failingGrades.length + ' veces.';
        };

    return {
        average: average,
        failing: failing
    }
})();

console.log(myGradesCalculate2.average());
console.log(myGradesCalculate2.failing());
