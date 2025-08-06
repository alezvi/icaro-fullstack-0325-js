const APP_NAME = 'Icaro';

// Quiero que el usuario se suscriba y voy a pedir el email
// Para guardar datos = Variables
// Defino una variable para guardar el email cuando el usuario lo provea
// Definir o crear una variable
let quiereSuscribirse; // undefined
let email;

// Le pregunto si quiere suscribirse, devuelve boolean
quiereSuscribirse = confirm('Quieres suscribirte al newsletter');

// Invoco la funcion prompt() para pedirle el email, devuelve string
// Sobreecribir o reasignar valor
email = prompt('Ingresa tu email para suscribirte');

// Le aviso al usuario que quedo suscripto
alert('Muchas gracias! Ya estas suscripto.');

// Imprimo en console el valor ingresado
console.log(quiereSuscribirse);
console.log(email);
