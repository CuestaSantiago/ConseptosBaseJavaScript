// import { heroes } from './data/heroes'
//imp
import { heroes, owners } from "../data/heroes";

// const getHeroeById=(id)=>{
//     return heroes.find(hero=>hero.id===id)
// }

const getHeroeById = (id) => heroes.find((hero) => hero.id === id);

// console.log(getHeroeById(2));

const getHeroeByOwner = (owner) => heroes.filter((hero) => hero.owner.toLowerCase() === owner.toLowerCase());

const [DC, Marvel] = owners;
// console.log(getHeroeByOwner(Marvel))

export {
    getHeroeById,
    getHeroeByOwner
}