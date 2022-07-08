import Client from "./foods/clients/Client";
import Company from "./foods/consts/Company";
import AiqFomeDelivery from "./foods/factories/AiqFomeDelivery";
import IFoodDelivery from "./foods/factories/IFoodDelivery";
import IDeliveryFactory from "./foods/factories/interfaces/IDeliveryFactory";

const currentCompany = Company.AIQFOME;

let factory: IDeliveryFactory;

switch(currentCompany){
    case Company.AIQFOME:
        factory = new AiqFomeDelivery();
        break;
    case Company.IFOOD:
        factory = new IFoodDelivery();
        break;
    default:
        console.log("Companhia não definida!")
}

const cliente = new Client(factory!);

cliente.startDelivery();
