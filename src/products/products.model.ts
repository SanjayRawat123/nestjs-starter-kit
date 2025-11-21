export class ProductsModel {
    id: string;
    title: string;
    price: number;
    discription: string;
    
    constructor(id: string, title: string, price: number, discription: string) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.discription = discription;
    }


}