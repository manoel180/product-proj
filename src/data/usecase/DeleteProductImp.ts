import { IProductRepository } from '../repositories/IProductRepository';
import IDeleteProductUseCase from '../../domain/usecases/product/IDeleteProduct.usecase';
import { Inject, Injectable } from '@nestjs/common';
import { InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/core';

@Injectable()
class DeleteProductImp implements IDeleteProductUseCase<void, string> {

  constructor(
    @Inject('IProductRepository') private readonly productRepository: IProductRepository,
    @InjectMapper() private readonly classMapper: Mapper,
  )
  {}

  execute = async (id: string) => {
    await this.productRepository.delete(id);
  };
}

export { DeleteProductImp };
