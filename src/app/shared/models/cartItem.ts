import { Jewells } from "./jewells";

export class cartItem{
    constructor(jewell:Jewells){
        this.jewell=jewell;
    }
    jewell:Jewells;
    quantity:number=1;
    get price():number{
        return this.jewell.price*this.quantity;
    }
}