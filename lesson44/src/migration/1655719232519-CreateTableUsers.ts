import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableUsers1655719232519 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
      CREATE TABLE IF NOT EXISTS Users (
      id INT PRIMARY KEY AUTO_INCREMENT,
      firstName VARCHAR(250) NOT NULL,
      lastName VARCHAR(250) NOT NULL
      )
      `);
    }

    // eslint-disable-next-line no-unused-vars
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        DROP TABLE IF EXISTS Users`);
    }
}
