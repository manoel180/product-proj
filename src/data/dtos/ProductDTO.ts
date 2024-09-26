import { ApiProperty } from '@nestjs/swagger';
import { AutoMap } from '@automapper/classes';

export class ProductDTO {

  @AutoMap()
  @ApiProperty({ default: 'Produto A', description: 'Nome do produto' })
  name: string;
  @AutoMap()
  @ApiProperty({
    default: 'Produto de primeira linha',
    description: 'Descrição do produto',
  })
  @AutoMap()
  description: string;
  @AutoMap()
  @ApiProperty({ default: 10, description: 'Preço do produto' })
  price: number;
}
