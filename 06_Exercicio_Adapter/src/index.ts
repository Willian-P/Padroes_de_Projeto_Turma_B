import TransportadoraAdapter from "./adapters/TransportadoraAdapter"
import ICorreios from "./correios/ICorreios"
import Transportadora from "./transportadora/Transportadora"

const entrega: ICorreios = new TransportadoraAdapter(new Transportadora());

entrega.sendCorreios();
entrega.receiveCorreios();
