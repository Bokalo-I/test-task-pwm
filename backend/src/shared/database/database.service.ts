import { Inject, OnApplicationBootstrap } from '@nestjs/common';
import { DataSource } from 'typeorm';

import { databaseTables } from './constants';
import { DatabaseRepository } from './database.repository';
import { DatabaseType } from './types';

export class DatabaseService implements OnApplicationBootstrap {
  @Inject(DataSource)
  dataSource: DataSource;
  database: DatabaseType;

  constructor(private readonly ds?: DataSource) {
    if (ds) this.dataSource = ds;
  }

  onApplicationBootstrap() {
    const database = Object.entries(databaseTables).reduce((acc, [key, name]) => {
      const entityMetadata = this.dataSource.entityMetadatas.find(
        (item) => item.tableName === name,
      );

      if (entityMetadata) {
        acc[key] = new DatabaseRepository(this.dataSource.getRepository(entityMetadata.name));
      }

      return acc;
    }, {} as DatabaseType);

    this.database = database;
  }
}
