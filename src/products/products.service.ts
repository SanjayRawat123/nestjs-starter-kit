import { Injectable } from '@nestjs/common';
import { ProductsModel } from './products.model';
@Injectable()
export class ProductsService {
    private products: ProductsModel[] = [];
    
    insertProduct(title: string, price: number, description: string): string {
        const id = new Date().toString();
        const newProduct = new ProductsModel(
             id, // Generate a random ID for simplicity
            title,
            price,
            description
        );
        this.products.push(newProduct);
        return newProduct.id;
    }
}
