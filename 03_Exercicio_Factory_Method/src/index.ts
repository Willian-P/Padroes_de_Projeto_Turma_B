import GameLocation from "./location/GameLocation";
import Location from "./location/Location";
import MovieLocation from "./location/MovieLocation";



declare var process;

let ItemLocation: Location;

if(process.argv.includes("Jogo")){
    ItemLocation = new GameLocation();
} else if(process.argv.includes("Filme")){
    ItemLocation = new MovieLocation();
} else {
    console.error("Selecione um tipo de locação!");
}

if(ItemLocation!){
    ItemLocation.startItem();
}