import { IProductRepository } from '../repositories/IProductRepository';
import IFindAllProductsUseCase from '../../domain/usecases/product/IFindAllProducts.usecase';
import { ProductDTO } from '../dtos/ProductDTO';
import { Inject, Injectable } from '@nestjs/common';
import { ProductRequest } from '../request/ProductRequest';
import { Product } from '../../infra/prisma/models/product.schema';
import { InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/core';

@Injectable()
class FindAllProductImp implements IFindAllProductsUseCase<ProductDTO> {


  constructor(
    @Inject('IProductRepository') private readonly productRepository: IProductRepository,
    @InjectMapper() private readonly classMapper: Mapper,
    ) {

  }

  execute = async (): Promise<ProductDTO[]> => {
    const listdb = await this.productRepository.findAll();
    const list = await this.classMapper.mapArrayAsync(listdb, Product, ProductDTO);
    return listdb;
  };
}

export { FindAllProductImp };
