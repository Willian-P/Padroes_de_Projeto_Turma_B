import IConsole from "../consoles/IConsole";
import IGaming from "./IGaming";

export default class Play implements IGaming{

constructor(private consoles: IConsole){}

    playing(): void {
        console.log("Carregando jogo...");
    }
    result(): void {
        console.log("=-=-=-=- Bom jogo =-=-=-=-");
    }

}