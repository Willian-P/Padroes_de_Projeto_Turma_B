import ICorreios from "../correios/ICorreios";
import Transportadora from "../transportadora/Transportadora";
import Token from "../utils/Token";

export default class TransportadoraAdapter implements ICorreios{
    private _token: Token;

    constructor(private transportadora: Transportadora){
        console.log("Adaptando Transportadora em Correios!");
    }

    authToken(): Token {
        return new Token();
    }
    sendCorreios(): void {
        return this.transportadora.send();
    }
    receiveCorreios(): void {
        return this.transportadora.receive();
        throw new Error("Method not implemented.");
    }

}