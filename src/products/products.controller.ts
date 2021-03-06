import { Controller, Post, Body } from "@nestjs/common";
import { ProductsService } from "./products.service";

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService){}
    @Post()
    addProduct(@Body('title') prodTitle: string, @Body('desc') prodDesc: string, @Body('price') prodPrice: number): {id: string} {
      
        const generateId = this.productsService.insertProduct(prodTitle, prodDesc, prodPrice)
        return {id: generateId}
    }
}