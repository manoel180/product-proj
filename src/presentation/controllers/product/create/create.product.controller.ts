import { Controller, Post, Body, RawBody, Inject } from '@nestjs/common';
import { ProductDTO } from '../../../../data/dtos/ProductDTO';
import { ProductRequest } from '../../../../data/request/ProductRequest';
import {
  ApiBody,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { ICreateProductUseCase } from '../../../../domain/usecases/product/ICreateProduct.usecase';
import { Product } from '../../../../domain/entity/product.entity';

@ApiTags('products')
@Controller('products')
export class CreateProductController {
  constructor(
    @Inject('ICreateProductUseCase') private readonly usecase: ICreateProductUseCase<Product, ProductRequest>,
  ) {}

  @ApiOperation({ summary: 'Create a product' })
  @ApiBody({ type: ProductRequest })
  @Post()
  async createProduct(@Body() productRequest: ProductRequest): Promise<ProductDTO> {
    try {
      return await this.usecase.execute(productRequest);
    } catch (error) {
      throw new Error(`Erro ao criar produto: ${error.message}`);
    }
  }
}