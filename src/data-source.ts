import 'reflect-metadata'
import {DataSource} from "typeorm";
export const AppDataSource = new DataSource({

    'type': "mysql",
    'host': "127.0.0.1",
    'username': "root",
    'password': "",
    'database': "dbTest",
    'synchronize': false,
    'logging': false,
    'migrationsRun': true,
    'entities':["dist/src/entity/*.js"],
    'migrations':["dist/src/migrations/*.js"]
})