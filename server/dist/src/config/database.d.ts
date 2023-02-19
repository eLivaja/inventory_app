import { MigrationsOptions, SeederOptions } from '@mikro-orm/core';
export interface DatabaseConfig {
    host: string;
    port: number;
    dbName: string;
    user: string;
    password: string;
    type: 'postgresql';
    migrations: MigrationsOptions;
    seeder: SeederOptions;
    debug?: boolean;
}
declare const _default: (env: any) => DatabaseConfig;
export default _default;
