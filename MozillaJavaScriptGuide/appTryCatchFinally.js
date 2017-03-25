
/* try catch
*/

function getMesName(numMes) {
    var meses = ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago',
                'Sep','Oct','Nov','Dic'];
    numMes--;
    console.log(meses[numMes]);
    if (meses[numMes] != null)
        return meses[numMes];
    else
        throw "Numero de Mes Invalido";
}

function mylogError(e){
    console.log(e);
}


try {
    nombreDeMes = getMesName(12);
} catch (e) {
    nombreDeMes = 'Nombre fuera de Rango';
    mylogError(e);
} finally {
    console.log('in block finally ');
}

