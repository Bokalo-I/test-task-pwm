import { Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

import { ProductService } from './product.service';
import { ProductEntity } from './entities/product.entity';
import { GetAllProductsQueryDto } from './dto/query/get-all-products.query-dto';
import { GetWatchingCountResponseDto } from './dto/response/get-watching-count.response-dto';
import { ProductIdParamsDto } from './dto/params/product-id.params-dto';

@Controller('/product')
@ApiTags('Product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('/all')
  @ApiOkResponse({ type: [ProductEntity] })
  @ApiOperation({ summary: 'Get all products' })
  getAllProducts(@Query() query: GetAllProductsQueryDto) {
    return this.productService.getAllProducts(query);
  }

  @Get('/watching/count')
  @ApiOkResponse({ type: GetWatchingCountResponseDto })
  @ApiOperation({ summary: 'Get watching products count' })
  getWatchingProductsCount() {
    return this.productService.getWatchingProductsCount();
  }

  @Post('/:productId/watching/add')
  @ApiOkResponse({ description: 'Watching product added successfully' })
  @ApiOperation({ summary: 'Add watching product' })
  addWatchingProduct(@Param() { productId }: ProductIdParamsDto) {
    return this.productService.addWatchingProduct(productId);
  }

  @Delete('/:productId/watching/remove')
  @ApiOkResponse({ description: 'Watching product deleted successfully' })
  @ApiOperation({ summary: 'Delete watching product' })
  deleteWatchingProduct(@Param() { productId }: ProductIdParamsDto) {
    return this.productService.deleteWatchingProduct(productId);
  }
}
