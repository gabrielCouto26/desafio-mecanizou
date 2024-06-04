import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableWorkshops1717468423141 implements MigrationInterface {
    name = 'CreateTableWorkshops1717468423141'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`workshop\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`address\` varchar(255) NOT NULL, \`latitude\` int NOT NULL, \`longitude\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`workshop\``);
    }

}
