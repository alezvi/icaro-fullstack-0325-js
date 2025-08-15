// buena practica: nombre de la variable en plural si es array
// ejemplo: tengo definidas cuales van ser las primeras 3 clases
let clases = [
    'Introduccion a la Carrera',
    'Fundamentos de HTML',
    'Fundamentos de CSS',
];

// la cursada tiene un cupo minimo
const CUPO_MINIMO = 3;

// la cursada tiene un cupo maximo
const CUPO_MAXIMO = 6;

// todavia no hay inscriptos
let alumnos = [];

// inscriptos - interesados que quieren sumarse
let inscriptos = [
    'Cosme Fulanito', 'Bart Simpsons', 'Angel Caido', 'Homero Simpson', 
    'Marge Simpson', 'Lisa Simpson', 'Maggie Simpson',
];

for (let i = 0; i < inscriptos.length; i++) {
    if (alumnos.length == CUPO_MAXIMO) {
        console.error('Ya se alcanzo el limite de alumnos.');
        break;
    }

    alumnos.push( inscriptos[i] );
    inscriptos.shift();
}


// Quiero saber cuantos inscriptos hay hasta el momento
console.log( 'Total inscriptos: ' + alumnos.length );






// cambio de planes: la primera cambia el nombre a "Introduccion a FullStack"
clases[0] = 'Introduccion a FullStack';

// el coordinador define cual es la siguiente clase
clases.push('Introduccion a JS');

// decidimos agregar una charla informativa a todos los que van a cursar
clases.unshift('Charla Informativa');

// definimos como se va titular la ultima clase
// clases[55] = 'Cierre del curso';
clases.push('Cierre del curso');

// Voy a quitar la ultima clase para asignar otra
let ultimaClase = clases.pop();

// Voy a asignar las siguientes clases
clases.push('Variables y constantes');
clases.push('Tipos de datos');
clases.push('Estructuras de control');

clases.push(ultimaClase);

// hay alguien que quiere inscribirse y quiere saber cuales son las primeras clases
for (let i = 0; i < clases.length; i++) {
    console.log( 'Clase ' + i + ' ' + clases[i] );
}
