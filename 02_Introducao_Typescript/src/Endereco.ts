export default class Endereco{
    private _rua: string;
    private _numero: number;
    private _cep: number;
    private _bairro: string;
    private _cidade: string;

    constructor(rua: string, numero: number){
        this._rua = rua;
        this._numero = numero;
    }

    get rua(): string{
        return this._rua;
    }

    get numero(): number{
        return this._numero;
    }

    get cep(): number{
        return this._cep;
    }

    get bairro(): string{
        return this._bairro;
    }

    get cidade(): string{
        return this._cidade;
    }

    set cep(cep: number){
        this._cep = cep;
    }

    set bairro(bairro: string){
        this._bairro = bairro;
    }

    set cidade(cidade: string){
        this._cidade = cidade;
    }  
}
