const NOTA_MINIMA = 4;
const NOTA_DESEADA = 7;
const NOTA_MAXIMA = 10;
let notaObtenida = 3;
let mensaje;

if ( notaObtenida < NOTA_MINIMA ) {
    mensaje = 'Desaprobado';
} 
else if ( notaObtenida <= NOTA_DESEADA ) {
    mensaje = 'Aprobado';
} 
else if ( notaObtenida <= NOTA_MAXIMA ) {
    mensaje = 'Aprobado sobresaliente!';
} 
else {
    console.error('Error, nota fuera de rango');
}

console.log(mensaje);