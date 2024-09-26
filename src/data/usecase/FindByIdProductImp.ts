import { IProductRepository } from '../repositories/IProductRepository';
import IDeleteProductUseCase from '../../domain/usecases/product/IDeleteProduct.usecase';
import { Inject, Injectable } from '@nestjs/common';
import { InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/core';
import IFindByIdProductUsecase from '../../domain/usecases/product/IFindByIdProduct.usecase';
import IFindByIdProductUseCase from '../../domain/usecases/product/IFindByIdProduct.usecase';
import { ProductDTO } from '../dtos/ProductDTO';
import { Product } from '../../infra/prisma/models/product.schema';

@Injectable()
class FindByIdProductImp implements IFindByIdProductUseCase<ProductDTO> {

  constructor(
    @Inject('IProductRepository') private readonly productRepository: IProductRepository,
    @InjectMapper() private readonly classMapper: Mapper,
  )
  {}

  execute = async (id: string) => {
    return this.classMapper.map(await this.productRepository.findById(id), Product, ProductDTO);
  };
}

export { FindByIdProductImp };
