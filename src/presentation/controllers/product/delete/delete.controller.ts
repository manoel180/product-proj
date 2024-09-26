import { Controller, Delete, Inject, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import IUpdateProductUseCase from '../../../../domain/usecases/product/IUpdateProduct.usecase';
import { Product } from '../../../../domain/entity/product.entity';
import { ProductRequest } from '../../../../data/request/ProductRequest';
import IDeleteProductUsecase from '../../../../domain/usecases/product/IDeleteProduct.usecase';

@ApiTags('products')
@Controller('products')
export class DeleteController {

  constructor(
    @Inject('IDeleteProductUseCase') private readonly deleteProductUseCase: IDeleteProductUsecase<void, string>
  ) {}

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    try {
      return await this.deleteProductUseCase.execute(id);
    }
    catch (error) {
      throw new Error(`Erro ao deletar produto: ${error.message}`);
    }

  }
}
