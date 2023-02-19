import { Migration } from '@mikro-orm/migrations';

const TABLE_NAME = 'user';

export class Migration20230210085304 extends Migration {
	async up(): Promise<void> {
		const knex = this.getKnex();
		const user = knex.schema.createTable(TABLE_NAME, table => {
			table.increments();
			table.string('first_name').notNullable();
			table.string('last_name').notNullable();
			table.string('email').notNullable();
			table.string('password').nullable();
			table.timestamps();
		});
		this.addSql(user.toQuery());
	}

	async down(): Promise<void> {
		const knex = this.getKnex();
		this.addSql(knex.schema.dropTable(TABLE_NAME).toQuery());
	}
}
