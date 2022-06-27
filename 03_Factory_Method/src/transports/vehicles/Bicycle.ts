import IVehicle from "./interfaces/IVehicle";

export default class Bicycle implements IVehicle{
    startRoute(): void {
        this.getCargo();
        console.log("Bicicleta: Iniciando trajeto...");
    }
    getCargo(): void {
        console.log("Bicicleta: Encomenda Retirada!");
    }
    
}
