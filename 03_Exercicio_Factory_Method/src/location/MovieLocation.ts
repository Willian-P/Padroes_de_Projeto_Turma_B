import Movie from "./item/Movie";
import IItem from "./item/Interface/IItem";
import Location from "./Location";

export default class MovieLocation extends Location{

    protected createItem(): IItem{
        return new Movie();
    }
}
