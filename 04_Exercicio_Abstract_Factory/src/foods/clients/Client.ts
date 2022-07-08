import IDrink from "../drink/interfaces/IDrink";
import IDeliveryFactory from "../factories/interfaces/IDeliveryFactory";
import IFood from "../food/interfaces/IFood";

export default class Client{
    private _drink: IDrink;
    private _food: IFood;

    constructor(factory: IDeliveryFactory){
        this._drink = factory.createDeliveryDrink();
        this._food = factory.createDeliveryFood();
    }

    startDelivery(){
        this._drink.startDelivery();
        this._food.startDelivery();
    }
}
