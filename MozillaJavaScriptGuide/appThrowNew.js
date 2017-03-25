
/* Sentencias de manejo de excepciones
Edit

Puedes lanzar excepciones usando la sentencia throw y manejarlas usando las sentencias try...catch.

    throw statement
    try...catch statement

*/
//throw 'Error lanzado con Throw';   // tipo String :Uncaught Error lanzado con Throw
//throw 42;                         //  tipo numerico: Uncaught 42
//throw true;                         // tipo boolean: Uncaught true
//throw {toString: function() { return "Soy un Objeto!"; } };  //tipo Objeto: Uncaught Object {}

/*Note: Puedes especificar un objeto cuando lanzas una excepción. A continuación, puedes hacer referencia a las propiedades del objeto en un bloque catch. En el siguiente ejemplo se crea un objeto myUserException del tipo UserException y lo usa en la sentencia throw.
*/
function UserException( aviso ){
    this.aviso = aviso;
    this.nombre = "UserException";
    console.log('in function UserException');
}

//make de exception convet to a pretty string when used as String
//(eg. by the error console)
UserException.prototype.toString = function (){
   return this.nombre + ': "' + this.aviso + '"';
}

console.log(UserException.toString());

throw new UserException("exception lanzada");


