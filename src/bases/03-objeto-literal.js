const persona={
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion:{
        ciudad:'New York',
        zip: 545454654,
        lat: 14.01154216,
        lng: 34.45465454,
    }
}

// console.log({persona})
// console.table(persona)

const persona2 = {... persona};
persona2.nombre = 'Peter';

console.log(persona)
console.log(persona2)
