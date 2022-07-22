import Token from "../utils/Token";
import ICorreios from "./ICorreios";

export default class Correios implements ICorreios{
    authToken(): Token {
        return new Token();
    }
    sendCorreios(): void {
        this._token = this.authToken();
        console.log("TOKEN: " + this._token.token);
        console.log("Enviando entrega por Correios");
    }
    receiveCorreios(): void {
        console.log("Recebendo entrega do Correios");
    }
    private _token: Token;


}
