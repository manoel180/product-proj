import { Module } from '@nestjs/common';
import { CreateProductController } from './product/create/create.product.controller';
import { FindallProductController } from './product/findall/findall.product.controller';
import { CreateProductImp } from '../../data/usecase/CreateProductImp';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from '../../infra/prisma/models/product.schema';
import { ProductRepositoryImp } from '../../infra/prisma/repository/ProducRepositoryImp';
import { ConfigService } from '@nestjs/config';
import { FindAllProductImp } from '../../data/usecase/FindAllProductImp';
import { UpdateController } from './product/update/update.controller';
import { DeleteController } from './product/delete/delete.controller';
import { UpdateProductImp } from '../../data/usecase/UpdateProductImp';
import { DeleteProductImp } from '../../data/usecase/DeleteProductImp';
import { FindByIdProductImp } from '../../data/usecase/FindByIdProductImp';
import { FindByIdProductController } from './product/find-by-id/findById.product.controller';

@Module({

  imports: [
    MongooseModule.forRootAsync({
      useFactory: async (config: ConfigService) => ({
        uri: 'mongodb+srv://manoel180:YAmcYFG4LVKPcHaw@cluster0.dnv8x.mongodb.net/product-proj-db?retryWrites=true&w=majority&appName=Cluster0',
      })}),
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }])],

  controllers: [FindallProductController, CreateProductController, UpdateController, DeleteController, FindByIdProductController] ,
  providers: [
    {provide: 'IProductRepository', useClass: ProductRepositoryImp},
    {provide: 'ICreateProductUseCase', useClass: CreateProductImp },
    {provide: 'IUpdateProductUseCase', useClass: UpdateProductImp },
    {provide: 'IDeleteProductUseCase', useClass: DeleteProductImp },
    {provide: 'IFindAllProductsUsecase', useClass: FindAllProductImp },
    {provide: 'IFindByIdProductUseCase', useClass: FindByIdProductImp },
    CreateProductImp],
   })
export class ControllerModule {}
