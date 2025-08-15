
const PISOS = 12;
const PB = 0;

// el ascensor esta en el piso cero
let piso = PB;

// alguien llama al ascensor desde el piso 9
let destino = 9;

for (; piso <= destino; piso++) {
    console.log('Piso: ' + piso);
}

// sube alguien y pide ir al piso 0
destino = 0;

for (; piso >= destino; piso) {
    console.log('Piso: ' + piso);
}
