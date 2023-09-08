import { Inject, NotFoundException } from '@nestjs/common';

import {
  DataSource,
  DeepPartial,
  FindManyOptions,
  FindOneOptions,
  FindOptionsWhere,
  Repository,
} from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

export class DatabaseRepository<T extends object> {
  private readonly repository: Repository<T>;

  @Inject(DataSource)
  test: any;

  constructor(repository: Repository<T>) {
    this.repository = repository;
  }

  findOne(options: FindOneOptions<T>) {
    return this.repository.findOne(options);
  }

  async findOneOrFail(options: FindOneOptions<T>) {
    const document = await this.findOne(options);

    if (!document) throw new NotFoundException('Document not found');

    return document;
  }

  findAll(options?: FindManyOptions<T>) {
    return this.repository.find(options);
  }

  async findAllOrFail(options?: FindManyOptions<T>) {
    const documents = await this.findAll(options);

    if (!documents.length) throw new NotFoundException('No documents found');

    return documents;
  }

  create(options: DeepPartial<T>) {
    const document = this.repository.create(options);

    return this.repository.save(document);
  }

  update(condition: FindOptionsWhere<T>, options: QueryDeepPartialEntity<T>) {
    return this.repository.update(condition, options);
  }

  delete(options: FindOptionsWhere<T>) {
    return this.repository.delete(options);
  }

  async checkNotExists(options: FindOptionsWhere<T>) {
    const document = await this.findOne({ where: options });

    if (document) throw new NotFoundException('Document with provided params already exists');
  }

  count(options: FindManyOptions<T>) {
    return this.repository.count(options);
  }

  createQueryBuilder(alias?: string) {
    return this.repository.createQueryBuilder(alias);
  }
}
