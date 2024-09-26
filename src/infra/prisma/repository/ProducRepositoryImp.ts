import { Injectable } from '@nestjs/common';

import { Product, ProductDocument } from '../models/product.schema';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { IProductRepository } from '../../../data/repositories/IProductRepository';

@Injectable()
export class ProductRepositoryImp implements IProductRepository {
  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
  ) {}

  async create(product: Product): Promise<Product> {
    const createdProduct = new this.productModel(product);
    return createdProduct.save();
  }

  async findAll(): Promise<any[]> {
    return this.productModel.find().exec();
  }

  async findById(id: mongoose.Types.ObjectId): Promise<Product | null> {
    return this.productModel.findOne({ _id: id }).exec();
  }

  async update(id: mongoose.Types.ObjectId, product: Partial<Product>): Promise<Product> {
    return this.productModel.findOneAndUpdate({ _id: id }, product, { new: true }).exec();
  }

  async delete(id: any): Promise<Product> {
    return this.productModel.findByIdAndDelete({ _id: id }).exec();
  }
}