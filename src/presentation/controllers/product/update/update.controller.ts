import { Body, Controller, Inject, Param, Patch, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ProductRequest } from '../../../../data/request/ProductRequest';
import { ProductDTO } from '../../../../data/dtos/ProductDTO';
import IUpdateProductUseCase from '../../../../domain/usecases/product/IUpdateProduct.usecase';
import { Product } from '../../../../domain/entity/product.entity';

@ApiTags('products')
@Controller('products')
export class UpdateController {

  constructor(@Inject('IUpdateProductUseCase') private readonly updateProductUseCase: IUpdateProductUseCase<Product, ProductRequest>) {
  }
  @Put(':id')
  async update(@Param('id') id: string, @Body() productRequest: ProductRequest): Promise<ProductDTO> {
   return await this.updateProductUseCase.execute(id, productRequest);
  }
}
