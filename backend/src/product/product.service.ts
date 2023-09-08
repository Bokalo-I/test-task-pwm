import { Injectable } from '@nestjs/common';

import { DatabaseService } from '@/shared/database/database.service';
import { GetAllProductsQueryDto } from './dto/query/get-all-products.query-dto';

@Injectable()
export class ProductService extends DatabaseService {
  getAllProducts({
    search,
    title,
    description,
    onlyWatchList,
    priceFrom,
    priceTo,
    ratingFrom,
    ratingTo,
    sortBy = 'price',
    sortOrder = 'ASC',
  }: GetAllProductsQueryDto = {}) {
    const queryBuilder = this.database.products.createQueryBuilder('product');

    if (!search) {
      if (title) queryBuilder.andWhere('product.title ilike :title', { title: `%${title}%` });
      if (priceFrom) queryBuilder.andWhere('product.price >= :priceFrom', { priceFrom });
      if (priceTo) queryBuilder.andWhere('product.price <= :priceTo', { priceTo });
      if (ratingFrom) queryBuilder.andWhere('product.rating >= :ratingFrom', { ratingFrom });
      if (ratingTo) queryBuilder.andWhere('product.rating <= :ratingTo', { ratingTo });
      if (description) {
        queryBuilder.andWhere('product.description ilike :description', {
          description: `%${description}%`,
        });
      }
      if (onlyWatchList) {
        queryBuilder.andWhere('product.isInWatchList = :isInWatchList', { isInWatchList: true });
      }
    } else {
      queryBuilder.orWhere('product.title ilike :search', { search: `%${search}%` });
      queryBuilder.orWhere('product.description ilike :search', { search: `%${search}%` });
    }

    if (sortBy && sortOrder) queryBuilder.orderBy(sortBy, sortOrder);

    return queryBuilder.getMany();
  }

  async getWatchingProductsCount() {
    const count = await this.database.products.count({ where: { isInWatchList: true } });

    return { count };
  }

  async addWatchingProduct(id: string) {
    await this.database.products.findOneOrFail({ where: { id } });
    await this.database.products.update({ id }, { isInWatchList: true });
  }

  async deleteWatchingProduct(id: string) {
    await this.database.products.findOneOrFail({ where: { id } });
    await this.database.products.update({ id }, { isInWatchList: false });
  }
}
