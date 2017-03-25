var Marisol = {
    nombre: 'Marisol', apellido: 'Perez',
    direccion: {
        calle: 'esperanza 11',
        colonia: 'Buenaventura',
        Estado: 'D.F.'
    }
};

function greet(person) {
    console.log('Hola ' + person.nombre);
};

function greet2(person) {
    console.log('Hola ' + person.nombre + ' ' + person.creadoDespues);
}

greet(Marisol);
greet({});                  //despliega Hola undefined
greet('comoParametro');     //despliega Hola undefined
greet( { nombre:'nombreAlAire', apellido:'apellidoAlAire'} );
greet( { nombre:'nombreAlAire',
         apellido:'apellidoAlAire'
       });

Marisol.creadoDespues = 'valor de objeto creado despues';

greet2( Marisol);

greet2( Marisol.creadoDespues = 'valor de objeto creado despues' );  //despliega Hola undefined undefined
