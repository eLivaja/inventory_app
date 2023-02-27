import { Connection, IDatabaseDriver, MikroORM } from '@mikro-orm/core';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';

import { DatabaseConfig } from './../config/database';

export type DatabaseProvider = MikroORM<PostgreSqlDriver>;
declare class DB {
	#private;
	constructor(config: DatabaseConfig);
	get instance(): MikroORM<PostgreSqlDriver>;
	connect(connect?: boolean): Promise<MikroORM<IDatabaseDriver<Connection>>>;
}
declare const db: DB;
declare function init(): Promise<void>;
export { db, init };
