const repetir = function (txt, x = 2) {
    let resultado = '';

    for (let i = 0; i < x; i++) {
        resultado = resultado + txt;
    }

    return resultado;
}

const entrada = prompt('Ingrese un texto');
let repeticiones = prompt('Si quieres repetir, indica cuantas veces');

if (repeticiones.length == 0 || isNaN(repeticiones)) {
    repeticiones = 2;
}

console.log(repetir(entrada, repeticiones));
