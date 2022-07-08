import IFood from "./interfaces/IFood";

export default class Food implements IFood{
    startDelivery(): void {
        this.getStatus();
        console.log("Hambúrguer: Pedido saiu para entrega...")
        
    }
    getStatus(): void {
        console.log("Hambúrguer: Pedido confirmado...")
    }
}
