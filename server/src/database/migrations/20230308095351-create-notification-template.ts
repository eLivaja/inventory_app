import { Migration } from '@mikro-orm/migrations';

const TABLE_NAME = 'notification_template';

export class Migration20230308095351 extends Migration {
	async up(): Promise<void> {
		const knex = this.getKnex();
		const TYPE = ['item_status_change', 'item_request'];
		const notificationTemplate = knex.schema.createTable(TABLE_NAME, table => {
			table.increments();
			table.string('title').notNullable();
			table.string('content').notNullable();
			table.enum('type', TYPE).notNullable();
			table.timestamps();
		});
		this.addSql(notificationTemplate.toQuery());
	}

	async down(): Promise<void> {
		const knex = this.getKnex();
		this.addSql(knex.schema.dropTable(TABLE_NAME).toQuery());
	}
}
