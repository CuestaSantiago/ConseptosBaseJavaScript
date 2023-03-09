/* eslint-disable react-hooks/rules-of-hooks */
//desestructuracion de arreglos
const personajes = ["Goku", "Vegueta", "Trunks"];
const [, , p3] = personajes;
console.log(p3);

const retornaArreglo = () => {
  return ["ABC", 123];
};

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);
//tarea
//1. el primer valor del arr se llamará nombre
//2. se llamará setNombre 
const useState = (valor) => {
  return [
    valor,
    () => {
      console.log("hola mundo");
    },
  ];
};

const [nombre, setNombre] = useState('Goku')
console.log(nombre)
setNombre()