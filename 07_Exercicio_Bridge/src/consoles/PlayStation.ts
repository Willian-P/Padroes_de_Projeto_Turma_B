import IConsole from "./IConsole";

export default class PlayStation implements IConsole{

    constructor(){
        this.configureGame();
        console.log("PlayStation: Console iniciado!");
    }

    configureGame(): void {
        this.authToken();
        console.log("PlayStation: Configurando jogo.");
    }
    authToken() {
        console.log("PlayStation: Jogo liberado.");
    }

}