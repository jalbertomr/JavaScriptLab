// Closures 2
var curDate = new Date().toLocaleString;
var time = 'Sync Time:' + curDate;
document.write(new Date().toLocaleString());
console.log(new Date().toLocaleString());
//--------------------------------------------------------
function outter(x) {
    function middle(y){
        function inner(z) {
            return x + y + z;
        }
        return inner;
    }
    return middle;
}

console.log(outter('a')('b')('c'));   //abc
console.log(outter('a')()('c'));      //aundefinedc
console.log(outter('a')('b')());      //abundefined
console.log(outter(1)(2)(3));         //6
fn_outtermiddle = outter(3)(7);
result = fn_outtermiddle(2);            //12
