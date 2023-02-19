"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createConfig = (env) => ({
    host: env.DATABASE_HOST,
    port: Number(env.DATABASE_PORT),
    dbName: env.DATABASE_NAME,
    user: env.DATABASE_USER,
    password: env.DATABASE_PASSWORD,
    type: env.DATABASE_TYPE || 'postgresql',
    seeder: {
        path: `${process.cwd()}/dist/src/database/seeders`,
        pathTs: `${process.cwd()}/src/database/seeders`,
        defaultSeeder: 'DatabaseSeeder',
        glob: '!(*.d).{js,ts}',
        emit: 'ts',
        fileName: (className) => className,
    },
    migrations: {
        tableName: 'mikro_orm_migrations',
        path: `${process.cwd()}/dist/src/database/migrations`,
        pathTs: `${process.cwd()}/src/database/migrations`,
        disableForeignKeys: false,
        fileName: (timestamp) => `${timestamp}-new-migration`,
    },
});
exports.default = (env) => {
    return createConfig(env);
};
