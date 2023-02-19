import { Migration } from '@mikro-orm/migrations';

const TABLE_NAME = 'item';

export class Migration20230210092746 extends Migration {
	async up(): Promise<void> {
		const knex = this.getKnex();
		const CATEGORIES = ['food', 'office_equipment', 'tehnical_equipment'];
		const user = knex.schema.createTable(TABLE_NAME, table => {
			table.increments();
			table.string('name').notNullable();
			table.string('status').notNullable().defaultTo('Available');
			table.string('description').nullable();
			table.string('purchase_date').nullable();
			table.enum('category', CATEGORIES).notNullable();
			table.integer('user_id').nullable();
			table.foreign('user_id').references('user.id');
			table.timestamps();
		});
		this.addSql(user.toQuery());
	}

	async down(): Promise<void> {
		const knex = this.getKnex();
		this.addSql(knex.schema.dropTable(TABLE_NAME).toQuery());
	}
}
