import IDrink from "./interfaces/IDrink";

export default class Beer implements IDrink{
    startDelivery(): void {
        this.getStatus();
        console.log("Bebida: Pedido saiu para entrega...")
        
    }
    getStatus(): void {
        console.log("Bebida: Pedido confirmado...")
    }
}
