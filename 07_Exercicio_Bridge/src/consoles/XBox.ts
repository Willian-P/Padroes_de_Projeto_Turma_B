import IConsole from "./IConsole";

export default class XBox implements IConsole{

    constructor(){
        this.configureGame();
        console.log("XBox: Console iniciado!");
    }

    configureGame(): void {
        this.authToken();
        console.log("XBox: Configurando jogo.");
    }
    authToken() {
        console.log("XBox: Jogo liberado.");
    }

}