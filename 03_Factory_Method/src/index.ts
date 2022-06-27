import BicycleTransport from "./transports/BicycleTransports";
import CarTransport from "./transports/CarTransports";
import MotorcycleTransport from "./transports/MotorcycleTransports";
import { Transport } from "./transports/Transports";

declare var process;

let transport: Transport;

if(process.argv.includes("uber")){
    transport = new CarTransport();
} else if(process.argv.includes("log")){
    transport = new MotorcycleTransport();
} else if(process.argv.includes("bike")){
    transport = new BicycleTransport();
} else{
    console.error("Selecione um tipo de transporte!");
}

if(transport!){
    transport.startTransport();
}
