import { Injectable, NotFoundException } from '@nestjs/common';
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

    getAllProducts(): ProductsModel[] {
        return [...this.products];
    }

    getProductById(id: string): ProductsModel {
        const [product] = [...this.findProduct(id)];
        if (!product) {
            throw new NotFoundException(`Product with id ${id} not found.`);
        }
        return {...product};
    }
     
    updateProduct(id: string, productData:{
        title?: string;
        description?: string;
        price?: number; 
    }): void { }
    
    private findProduct(id: string): [ product: ProductsModel, index: number ] {
        const index = this.products.findIndex(prod => prod.id === id);
        if (index === -1) {
            throw new NotFoundException(`Product with id ${id} not found.`);
        }   
        const product = this.products[index];
        return [ product, index ];
    }
}
