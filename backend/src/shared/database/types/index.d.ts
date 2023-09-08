import { ProductEntity } from '@/product/entities/product.entity';
import { DatabaseRepository } from '../database.repository';

export type DatabaseEntitiesType = {
  products: ProductEntity;
};

export type DatabaseType = {
  [table in keyof DatabaseEntitiesType]: DatabaseRepository<DatabaseEntitiesType[table]>;
};
