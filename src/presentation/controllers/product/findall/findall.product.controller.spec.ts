import { Test, TestingModule } from '@nestjs/testing';
import { FindallProductController } from './findall.product.controller';

describe('FindallProductController', () => {
  let controller: FindallProductController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FindallProductController],
    }).compile();

    controller = module.get<FindallProductController>(FindallProductController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
