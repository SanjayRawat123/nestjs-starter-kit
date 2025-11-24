export class Product {
    id: string;
    title: string;
    price: number;
    discription: string;
    
    constructor(id: string, title: string, discription: string, price: number) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.discription = discription;
    }


}