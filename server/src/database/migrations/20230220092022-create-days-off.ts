import { Migration } from '@mikro-orm/migrations';

const TABLE_NAME = 'days_off';

export class Migration20230220092022 extends Migration {
	async up(): Promise<void> {
		const knex = this.getKnex();
		const TYPE = ['vacation', 'sick_day'];
		const daysOff = knex.schema.createTable(TABLE_NAME, table => {
			table.increments();
			table.string('start_date').notNullable();
			table.string('end_date').notNullable();
			table.string('status').notNullable();
			table.string('description').notNullable();
			table.enum('type', TYPE).notNullable();
			table.integer('user_id').notNullable().references('user.id');
			table.timestamps();
		});
		this.addSql(daysOff.toQuery());
	}

	async down(): Promise<void> {
		const knex = this.getKnex();
		this.addSql(knex.schema.dropTable(TABLE_NAME).toQuery());
	}
}
