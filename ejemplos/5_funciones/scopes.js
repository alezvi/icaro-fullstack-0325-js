
// este objeto tiene su propio scope (espacio de pertenencia)
// dentro las funciones el scope se accede mediante "this"
let objeto = {
    normal : function () {
        return this;
    }, 

    flecha : () => {
        return this;
    }
}

console.log(objeto.normal());
console.log(objeto.flecha());
