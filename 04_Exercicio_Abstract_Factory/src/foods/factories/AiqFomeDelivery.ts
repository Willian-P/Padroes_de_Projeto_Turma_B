import IDrink from "../drink/interfaces/IDrink";
import Beer from "../drink/Beer";
import Hamburguer from "../food/Hamburguer";
import IFood from "../food/interfaces/IFood";
import IDeliveryFactory from "./interfaces/IDeliveryFactory";

export default class AiqFomeDelivery implements IDeliveryFactory{
    createDeliveryDrink(): IDrink {
        return new Beer();
    }
    createDeliveryFood(): IFood {
        return new Hamburguer();
    }
}

/*
import IDrink from "../drink/interfaces/IDrink";
import IFood from "../food/interfaces/IFood";
import IDeliveryFactory from "./interfaces/IDeliveryFactory";
import SoftDrink from "../drink/SoftDrink"
import HotDog from "../food/HotDog"

export default class IFoodDelivery implements IDeliveryFactory{
    createDeliveryDrink(): IDrink {
        return new SoftDrink();
    }
    createDeliveryFood(): IFood {
        return new HotDog();
    }
}
*/