
function b() {
    console.log(myVar);    //despliega 1 pues hace referencia al Gloval Execution Environment no al de a()
}

function a() {
    var myVar = 2;
    b();
}

var myVar = 1;
a();
