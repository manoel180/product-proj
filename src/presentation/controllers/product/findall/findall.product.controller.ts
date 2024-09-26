import { Controller, Get, Inject } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import IFindAllProductsUsecase from '../../../../domain/usecases/product/IFindAllProducts.usecase';
import { ProductDTO } from '../../../../data/dtos/ProductDTO';

@Controller('products')
@ApiTags('products')
export class FindallProductController {
  constructor(
    @Inject('IFindAllProductsUsecase') private readonly usecase: IFindAllProductsUsecase<ProductDTO>
  ) {}

  @Get()
  async findAll(): Promise<ProductDTO[]> {
    return await this.usecase.execute();
  }
}
