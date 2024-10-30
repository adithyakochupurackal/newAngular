export class Product{

    prodId: number = 0;
    desc: string;
    brand: string;
    qty: number;
    price: number;

    constructor(id: number, description: string, brand: string, qty: number, price: number){
        this.desc = description;
        this.brand = brand;
        this.qty = qty;
        this.price = price;
    }
}