import { IsNotEmpty, IsPositive, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { autoMap } from '@automapper/core';
import { AutoMap } from '@automapper/classes';

export class ProductRequest {
  @MaxLength(200)
  @IsNotEmpty()
  @ApiProperty({ title: 'Nome do produto'})
  @AutoMap()
  name: string;
  @MaxLength(500)
  @IsNotEmpty()
  @ApiProperty({ title: 'Descrição do produto'})
  @AutoMap()
  description: string;
  @IsPositive()
  @IsNotEmpty()
  @ApiProperty({ title: 'Preço do produto', default: 10})
  @AutoMap()
  price: number;
}
