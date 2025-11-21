import { Controller, Get, Post } from '@nestjs/common';

@Controller('products')
export class ProductsController {

    @Get()
    getAllProducts(): any {
        // Logic to retrieve all products
        return  {"message":"List of all products"};
    }

    @Post()
    createProduct(): any {
        // Logic to create a new product
        return  {"message":"Product created successfully"};
    }
}
