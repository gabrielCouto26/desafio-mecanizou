import { DataSource } from 'typeorm';
import { Workshop } from './workshops/workshop.entity';

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT, 10) || 3306,
    username: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || 'root',
    database: process.env.DB_NAME || 'mecanizou',
    entities: [Workshop],
    synchronize: process.env.ENV == 'PROD' ? false : true,
    migrations: ['./dist/database/migrations/*.js'],
});
