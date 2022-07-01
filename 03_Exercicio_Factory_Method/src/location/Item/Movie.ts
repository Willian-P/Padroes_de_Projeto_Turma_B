import IItem from "./Interface/IItem";

export default class Movie implements IItem{
    start(): void {
        this.getDescription();
        console.log("Filme: Iniciando Locação...");
    }
    getDescription(): void {
        console.log("Filme: Locação realizada com sucesso!");
    }
    
}
