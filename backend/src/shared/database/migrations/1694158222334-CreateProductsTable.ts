import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateProductsTable1694158222334 implements MigrationInterface {
    name = 'CreateProductsTable1694158222334'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "products" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "image" character varying NOT NULL, "title" character varying NOT NULL, "description" character varying, "price" double precision NOT NULL, "rating" integer NOT NULL, "isInWatchList" boolean NOT NULL, CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "products"`);
    }

}
