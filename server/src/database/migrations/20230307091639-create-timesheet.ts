import { Migration } from '@mikro-orm/migrations';

const TABLE_NAME = 'timesheet';

export class Migration20230307091639 extends Migration {
	async up(): Promise<void> {
		const knex = this.getKnex();
		const timesheet = knex.schema.createTable(TABLE_NAME, table => {
			table.increments();
			table.string('date').notNullable();
			table.string('start').notNullable();
			table.string('end').notNullable();
			table.string('comment').nullable();
			table.integer('user_id').notNullable().references('user.id');
			table.timestamps();
		});
		this.addSql(timesheet.toQuery());
	}

	async down(): Promise<void> {
		const knex = this.getKnex();
		this.addSql(knex.schema.dropTable(TABLE_NAME).toQuery());
	}
}
