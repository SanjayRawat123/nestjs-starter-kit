import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    
    constructor (private productsService: ProductsService){ }

    @Get()
    getAllProducts(): any {
        return this.productsService.getAllProducts();
    }

    @Get(':id')
    getProductById(@Param('id') prodId: string) {
        return this.productsService.getProductById(prodId);
    }

    @Post()
    createProduct(@Body('title') pTitle:string,
     @Body('description') pdesc:string, 
     @Body('price') pPrice:number): any {
        const generatedId = this.productsService.insertProduct(pTitle, pPrice, pdesc,);
        return  {id: generatedId};
    }
}