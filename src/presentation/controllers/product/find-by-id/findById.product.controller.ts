import { Controller, Get, Inject, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ProductDTO } from '../../../../data/dtos/ProductDTO';
import IFindByIdProductUsecase from '../../../../domain/usecases/product/IFindByIdProduct.usecase';
import IFindByIdProductUseCase from '../../../../domain/usecases/product/IFindByIdProduct.usecase';

@Controller('products')
@ApiTags('products')
export class FindByIdProductController {
  constructor(
    @Inject('IFindByIdProductUseCase') private readonly usecase: IFindByIdProductUsecase<ProductDTO>
  ) {}

  @Get(':id')
  async findById(@Param('id') id : string): Promise<ProductDTO> {
    return await this.usecase.execute(id);
  }
}
