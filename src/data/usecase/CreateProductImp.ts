import { IProductRepository } from '../repositories/IProductRepository';
import { ProductRequest } from '../request/ProductRequest';
import { Inject, Injectable } from '@nestjs/common';
import { ICreateProductUseCase } from '../../domain/usecases/product/ICreateProduct.usecase';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Product } from '../../infra/prisma/models/product.schema';
import { ProductDTO } from '../dtos/ProductDTO';

@Injectable()
class CreateProductImp
  implements ICreateProductUseCase<ProductDTO, ProductRequest>
{

  constructor(
    @Inject('IProductRepository') private readonly productRepository: IProductRepository,
    @InjectMapper() private readonly classMapper: Mapper,
  ) {
  }

  execute = async (request: ProductRequest): Promise<ProductDTO> => {

    const product = this.classMapper.map(request, ProductRequest, Product);

    return this.classMapper.map(await this.productRepository.create(product), Product, ProductDTO);

  };
}

export { CreateProductImp };
