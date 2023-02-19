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

const createConfig = (env): DatabaseConfig => ({
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
		fileName: (className: string) => className,
	},
	migrations: {
		tableName: 'mikro_orm_migrations',
		path: `${process.cwd()}/dist/src/database/migrations`,
		pathTs: `${process.cwd()}/src/database/migrations`,
		disableForeignKeys: false,
		fileName: (timestamp: string) => `${timestamp}-new-migration`,
	},
});

export default (env): DatabaseConfig => {
	return createConfig(env);
};
