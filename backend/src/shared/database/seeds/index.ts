import { readdir } from 'node:fs/promises';
import { basename } from 'node:path';

import typeormDataSource from 'typeorm.datasource';
import { DatabaseService } from '../database.service';

const filename = basename(__filename);

(async () => {
  const dataSource = await typeormDataSource.initialize();
  const databaseService = new DatabaseService(dataSource);
  databaseService.onApplicationBootstrap();

  const files = await readdir(__dirname);
  const seedFiles = files.filter((file) => file !== filename);

  const seeds = await Promise.all(seedFiles.map((file) => import(`./${file}`)));

  const results = await Promise.allSettled(seeds.map(({ seed }) => seed(databaseService.database)));
  const successResults = results.filter((item) => item.status === 'fulfilled');

  console.log(`Successfully completed ${successResults.length} seeds of total ${seeds.length}`);

  process.exit(0);
})();
