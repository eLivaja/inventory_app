import { Migration } from '@mikro-orm/migrations';

const TABLE_NAME = 'office';

export class Migration20230218150809 extends Migration {
	async up(): Promise<void> {
		const knex = this.getKnex();
		const office = knex.schema.createTable(TABLE_NAME, table => {
			table.increments();
			table.string('name').notNullable();
			table.timestamps();
		});
		this.addSql(office.toQuery());
	}

	async down(): Promise<void> {
		const knex = this.getKnex();
		this.addSql(knex.schema.dropTable(TABLE_NAME).toQuery());
	}
}
