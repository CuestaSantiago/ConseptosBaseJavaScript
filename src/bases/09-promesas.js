import { getHeroeById } from "./bases/08-import-export";

// const promesa = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const p1 = getHeroeById(1);
//     resolve(p1);
//   }, 2000);
// });

// promesa.then((heroe) => {
//   console.log("heroe", heroe);
// })
// .catch(err=>console.warn(err))

const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const p1 = getHeroeById(id);
      if (p1 === undefined) {
        reject("No se pudo encontrar al Héroe");
      } else {
        resolve(p1);
      }
    }, 2000);
  });
};

getHeroeByIdAsync(3)
  .then(console.log)
  .catch(console.warn);
