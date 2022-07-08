import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableUsers1655719232519 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
      CREATE TABLE IF NOT EXISTS Users (
      id INT PRIMARY KEY AUTO_INCREMENT,
      firstName VARCHAR(255) NOT NULL,
      lastName VARCHAR(255) NOT NULL,
      age INT CHECK (age > 0),
      phone VARCHAR(255) NOT NULL UNIQUE,
      email VARCHAR(255) NOT NULL UNIQUE,
      password VARCHAR(255) NOT NULL,
      createdAt TIMESTAMP DEFAULT(UTC_TIMESTAMP()) NOT NULL,
      deletedAt TIMESTAMP
      )
      `);
    }

    // eslint-disable-next-line no-unused-vars
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        DROP TABLE IF EXISTS Users`);
    }
}
