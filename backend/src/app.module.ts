import { Module } from '@nestjs/common';
import { DatabaseModule } from './shared/database/database.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [DatabaseModule, ProductModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
