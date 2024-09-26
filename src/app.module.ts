import { Module } from '@nestjs/common';
import { ControllerModule } from './presentation/controllers/controller.module';
import { AutomapperModule } from '@automapper/nestjs';
import { classes } from '@automapper/classes';
import { ProductMapper } from './infra/automapper/ProductMapper';

@Module({
  imports: [ControllerModule, AutomapperModule.forRoot({
    strategyInitializer: classes(),

  } ),],
  providers: [ProductMapper]
})
export class AppModule {}
