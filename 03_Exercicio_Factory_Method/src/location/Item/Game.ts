import IItem from "./Interface/IItem";

export default class Game implements IItem{
    start(): void {
        this.getDescription();
        console.log("Jogo: Iniciando Locação...");
    }
    getDescription(): void {
        console.log("Jogo: Locação realizada com sucesso!");
    }
    
}
