import { createMap, forMember, mapFrom, Mapper } from '@automapper/core';
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { Product } from '../prisma/models/product.schema';
import { ProductDTO } from '../../data/dtos/ProductDTO';
import { ProductRequest } from '../../data/request/ProductRequest';

@Injectable()
export class ProductMapper extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  override get profile() {
    return (mapper: Mapper) => {
      createMap(mapper, Product, ProductDTO,
        forMember(dest => dest.name, mapFrom(src => src.name)),
        forMember(dest => dest.description, mapFrom(src => src.description)),
        forMember(dest => dest.price, mapFrom(src => src.price)),
      );

      createMap(mapper, ProductRequest, Product);
      createMap(
        mapper,
        Product,
        ProductDTO,

        forMember(
          (destination) => destination.name,
          mapFrom((source) => source.name)
        ),
        forMember(
          (destination) => destination.description,
          mapFrom((source) => source.description)
        ),
        forMember(
          (destination) => destination.price,
          mapFrom((source) => source.price)
        )
      );
    };
  }
}