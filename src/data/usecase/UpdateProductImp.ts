import { IProductRepository } from '../repositories/IProductRepository';
import IUpdateProductUseCase from '../../domain/usecases/product/IUpdateProduct.usecase';

import { ProductRequest } from '../request/ProductRequest';
import { Inject, Injectable } from '@nestjs/common';
import { ProductDTO } from '../dtos/ProductDTO';
import { InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/core';
import { Product } from '../../infra/prisma/models/product.schema';

@Injectable()
class UpdateProductImp
  implements IUpdateProductUseCase<ProductDTO, ProductRequest>
{

  constructor(
    @Inject('IProductRepository') private readonly productRepository: IProductRepository,
    @InjectMapper() private readonly classMapper: Mapper,
  )
  {}

  execute = async (id: string, request: ProductRequest): Promise<Product> => {
    const product = this.classMapper.map(request, ProductRequest, Product);
    return this.classMapper.map(await this.productRepository.update(id, product), Product, ProductDTO);

  };
}

export { UpdateProductImp };
