let arr = [4, 3, 7];
arr.foo = "hola";

for (let e in arr){   //toma los nombres de las propiedades
    console.log(e);
}

for (let e of arr){     //toma los valores de las propiedades
    console.log(e);
}
