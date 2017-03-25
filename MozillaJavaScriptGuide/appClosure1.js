// Closures 1
var curDate = new Date().toLocaleString;
var time = 'Sync Time:' + curDate;
document.write(new Date().toLocaleString());
console.log(new Date().toLocaleString());
//--------------------------------------------------------
var pet = function(name) {          // La funtion externa define una variable llamada "name"
      var getName = function() {
        name = '_' + name;
        return name;                // La funtion interna tiene aceso a la variable "name" de la funcion externa
      }

      return getName;               // Devolver la funtion interna, por lo tanto exponiendola a un ambito exterior
    },
myPet = pet("Vivie");

myPet();                            // devuelve '__Vivie'

//---------------------------------------------------------
var varFunExt = function(paramExt){
        var varFunInt = function(){
            paramExt = '_' + paramExt;
            return paramExt + '->[varFunInt]->' + paramExt;
        }
        return varFunInt;
        },
        MyvarFunExt = varFunExt('valParExt');


MyvarFunExt();

