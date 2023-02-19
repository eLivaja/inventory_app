import { Connection, IDatabaseDriver, MikroORM } from '@mikro-orm/core';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';

import { DatabaseConfig } from './../config/database';
import entities from './entities';
import config from './mikro-orm.config';

export type DatabaseProvider = MikroORM<PostgreSqlDriver>;

class DB {
	#config: DatabaseConfig;
	#instance?: DatabaseProvider;

	constructor(config: DatabaseConfig) {
		this.#config = config;
	}

	get instance(): MikroORM<PostgreSqlDriver> {
		if (!this.#instance) throw new Error('Database not connected');

		return this.#instance;
	}

	async connect(
		connect = true
	): Promise<MikroORM<IDatabaseDriver<Connection>>> {
		this.#instance = await MikroORM.init(
			{
				...this.#config,
				populateAfterFlush: true,
				entitiesTs: entities,
				metadataProvider: TsMorphMetadataProvider,
			},
			connect
		);

		return this.#instance;
	}
}

const db = new DB(config);
async function init(): Promise<void> {
	await db.connect();
}

export { db, init };
