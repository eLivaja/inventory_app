import { Migration } from '@mikro-orm/migrations';

const TABLE_NAME = 'notification';

export class Migration20230308095838 extends Migration {
	async up(): Promise<void> {
		const knex = this.getKnex();
		const notification = knex.schema.createTable(TABLE_NAME, table => {
			table.increments();
			table.integer('user_id').notNullable().references('user.id');
			table.integer('item_id').notNullable().references('item.id');
			table.timestamps();
		});
		this.addSql(notification.toQuery());
	}

	async down(): Promise<void> {
		const knex = this.getKnex();
		this.addSql(knex.schema.dropTable(TABLE_NAME).toQuery());
	}
}
