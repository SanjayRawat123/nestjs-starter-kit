import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './products.model';

@Controller({
  path: 'products',
  version: '1',
})
export class ProductsController {
     constructor(private productService: ProductsService) {}

  @Get()
  getProducts() {
    return this.productService.getProducts();
  }

  @Get(':id')
  getProduct(@Param('id') id: string) {
    return this.productService.getProduct(id);
  }

  @Post()
  addProducts(
    @Body('title') pTitle: string,
    @Body('description') pDesc: string,
    @Body('price') pPrice: number,
  ) {
    const returnedId = this.productService.insertProduct(pTitle, pDesc, pPrice);

    return { id: returnedId };
  }

  @Put(':id')
  updateProduct(@Param('id') id: string, @Body() productData: Product) {
    const updatedProduct = this.productService.updateProduct(id, productData);
    return updatedProduct;
  }

  @Patch(':id')
  partialUpdate(@Param('id') id: string, @Body() productData: Product) {
    const updatedProduct = this.productService.partialUpdate(id, productData);
    return updatedProduct;
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: string) {
    this.productService.deleteProduct(id);
    return { message: 'Product deleted successfully' };
  }
}