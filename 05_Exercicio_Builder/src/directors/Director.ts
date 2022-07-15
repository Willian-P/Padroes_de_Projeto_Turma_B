import IBuilder from "../builders/IBuilder";
import Bread from "../components/Bread";
import Protein from "../components/Protein";
import Salad from "../components/Salad";
import SanduicheType from "../components/SanduicheType";
import Sauces from "../components/Sauces";

export default class Director{
    constructor(private _builder: IBuilder){}

    constructHotDog(){
        this._builder.setSanduicheType(SanduicheType.HOTDOG);
        this._builder.setBread(Bread.CASEIRO);
        this._builder.setProtein(Protein.ANGUS);
        this._builder.addSauces(new Sauces("MAIONESE"));
        this._builder.addSauces(new Sauces("MOSTARDA"));
    }

    constructSanduiche(){
        this._builder.setSanduicheType(SanduicheType.XSALADA);
        this._builder.setBread(Bread.BRIOCHE);
        this._builder.setSalad(Salad.TRADICIONAL);
        this._builder.setProtein(Protein.ANGUS);
        this._builder.addSauces(new Sauces("Katchup"));
    }
}