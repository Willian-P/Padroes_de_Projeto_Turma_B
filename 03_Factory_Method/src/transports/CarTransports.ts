import { Transport } from "./Transports";
import Car from "./vehicles/Car";
import IVehicle from "./vehicles/interfaces/IVehicle";

export default class CarTransport extends Transport{

    protected createTransport(): IVehicle {
        return new Car();
    }
}