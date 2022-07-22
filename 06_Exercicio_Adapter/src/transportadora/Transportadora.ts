import Token from "../utils/Token";
import ITransportadora from "./ITransportadora";

export default class Transportadora implements ITransportadora{
    private _token: Token;
    
    authToken(): Token {
        return new Token();
    }
    send(): void {
        this._token = this.authToken();
        console.log("TOKEN: " + this._token.token);
        console.log("Realizando entrega por Transportadora");
    }
    receive(): void {
        console.log("Recebendo entrega de Transportadora");
    }
}
