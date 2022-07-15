import Bread from "../components/Bread";
import Protein from "../components/Protein";
import Salad from "../components/Salad";
import SanduicheType from "../components/SanduicheType";
import Sauces from "../components/Sauces";
import Sanduiche from "../products/Sanduiche";
import IBuilder from "./IBuilder";

export default class SanduicheBuilder implements IBuilder{
    private _sanduiche: Sanduiche = new Sanduiche();

    reset(): void{
        this._sanduiche = new Sanduiche();
    }

    getSanduiche(): Sanduiche {
        return this._sanduiche;
    }
    
    setSanduicheType(value: SanduicheType) {
        this._sanduiche.sanduicheType = value;
    }

    setBread(bread: Bread) {
        this._sanduiche.bread = bread; 
    }

    setSalad(salad: Salad) {
        this._sanduiche.salad = salad;        
    }

    setProtein(protein: Protein) {
        this._sanduiche.protein = protein;
    }

    addSauces(sauces: Sauces) {
        this._sanduiche.addSauces(sauces);
    }
}
