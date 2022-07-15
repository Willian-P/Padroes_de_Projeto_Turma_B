import SanduicheType from "./builders/SanduicheBuilder";
import Director from "./directors/Director";
import Sanduiche from "./products/Sanduiche";

const builder: SanduicheType = new SanduicheType();
const diretor: Director = new Director(builder);

diretor.constructHotDog();
let hotdog: Sanduiche = builder.getSanduiche();
console.log("Criando um sanduíche do tipo: " + hotdog.sanduicheType);
console.log("Pão: " + hotdog.bread);
console.log("Carne: " + hotdog.protein);
console.log("Molhos: " + hotdog.sauces[0].molho + " e " + hotdog.sauces[1].molho);

builder.reset();

diretor.constructSanduiche();
let sanduiche: Sanduiche = builder.getSanduiche();
console.log("Criando um sanduíche do tipo: " + sanduiche.sanduicheType);
console.log("Pão: " + sanduiche.bread);
console.log("Salada: " + sanduiche.salad);
console.log("Carne: " + sanduiche.protein);
console.log("Molhos: " + sanduiche.sauces[0].molho);