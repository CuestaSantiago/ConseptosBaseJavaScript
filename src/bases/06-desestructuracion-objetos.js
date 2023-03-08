/* eslint-disable react-hooks/rules-of-hooks */
//Desestructuración
//Asignación Desestructurante -> https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

const persona = {
  nombre: "Tony",
  edad: 45,
  clave: "Ironman",
};

// console.log(persona.nombre)
// console.log(persona.edad)
// console.log(persona.clave)

// const {nombre, edad, clave}=persona
// console.log(nombre)
// console.log(edad)
// console.log(clave)

// const retornaPersona = (usuario) => {
//   const { nombre, edad, clave } = usuario;
//   console.log(nombre, edad, clave);
// };
// const retornaPersona = ({nombre, edad, clave, rango = 'cap'}) => {

//   console.log(nombre, edad, clave, rango);
// };

const useContext = ({ nombre, edad, clave, rango = "cap" }) => {
  return {
    nombreClave: clave,
    anios: edad,
    latlng: { 
        lat: 91.23232332, 
        lng: 12.21354354 },
  };
};

// const { nombreClave, anios, latlng:{lat,lng} } = useContext(persona);
const { nombreClave, anios,  latlng } = useContext(persona);
const{lat, lng} = latlng;
console.log(nombreClave, anios);
console.log(lat,lng)