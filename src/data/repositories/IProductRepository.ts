import { Product } from 'src/domain/entity/product.entity';

interface IProductRepository {
  create(product: Product): Promise<Product>;
  findById(id: any): Promise<Product | null>;
  update(id: any, product: Product): Promise<Product>;
  delete(id: any): Promise<Product>;
  findAll(): Promise<any[]>;
}

export { IProductRepository };
