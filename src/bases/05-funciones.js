// funciones en JavaScript

// function saludar(nombre){
//     return `Hola, ${nombre}`
// }

const saludar = function (nombre) {
  return `Hola, ${nombre}`;
};
const saludar2 = (nombre) => {
  return `Hola, ${nombre}`;
};

const saludar3 = (nombre) => `Hola, ${nombre}`;
const saludar4 = () => `Hola`;

console.log(saludar("Goku"));
console.log(saludar2("Vegueta"));
console.log(saludar3("Goku"));

const getUser = () => {
  return {
    uid: "ABC123",
    userName: "El_Papi1502",
  };
};

const getUser2 = () => ({
  uid: "DEF456",
  userName: "FaltaCalle",
});
console.log(getUser());
console.log(getUser2());

// tarea
// 1. transformar en una funcion de flecha
// 2. tiene que retornar un objeto implícito
// 3. pruebas
// function getUsuarioActivo(nombre){
// return {
//     uid:'DEF456',
//     userName: nombre,
// }
// }

const getUsuarioActivo = (nombre) =>({
    uid: "DEF456",
    userName: nombre,
})

const usuarioActivo = getUsuarioActivo("Santiago");

console.log(usuarioActivo);
