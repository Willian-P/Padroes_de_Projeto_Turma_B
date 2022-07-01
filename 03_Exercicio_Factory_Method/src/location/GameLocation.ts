import Game from "./item/Game";
import IItem from "./item/Interface/IItem";
import Location from "./Location";

export default class GameLocation extends Location{

    protected createItem(): IItem{
        return new Game();
    }
}