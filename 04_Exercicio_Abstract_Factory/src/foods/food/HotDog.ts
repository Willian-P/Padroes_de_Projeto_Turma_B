import IFood from "./interfaces/IFood";

export default class Food implements IFood{
    startDelivery(): void {
        this.getStatus();
        console.log("Hot Dog: Pedido saiu para entrega...")
        
    }
    getStatus(): void {
        console.log("Hot Dog: Pedido confirmado...")
    }
}
