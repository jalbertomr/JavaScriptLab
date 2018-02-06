
function EsPalindromo(palabra) {
    var palabraAMin = palabra.toLowerCase();
    var palabraArray = palabraAMin.split("");
    var palabraArraySinEspacios = palabraAMin.replace(" ","");

    var original = palabraArraySinEspacios.split("");
    var originalReves = palabraArraySinEspacios.split("").reverse();

    var palindromo = true;
    for (i in original){
        if (original[i] == originalReves[i])
            break;
        palindromo = false;
    }

    return palindromo;
}

console.log(EsPalindromo("ana"));
console.log(EsPalindromo("mala"));
console.log(EsPalindromo("anita lava la tina"));
console.log(EsPalindromo("La ruta nos aportó otro paso natural"));
