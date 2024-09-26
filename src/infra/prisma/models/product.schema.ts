import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { AutoMap } from '@automapper/classes';

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {

  @Prop()
  @AutoMap()
  name: string;
  @Prop()
  @AutoMap()
  description: string;
  @Prop()
  @AutoMap()
  price: number;

}
export const ProductSchema = SchemaFactory.createForClass(Product);
