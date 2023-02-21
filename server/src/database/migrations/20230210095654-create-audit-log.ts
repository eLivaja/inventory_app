import { Migration } from '@mikro-orm/migrations';

const TABLE_NAME = 'audit_log';

export class Migration20230210095654 extends Migration {
	async up(): Promise<void> {
		const knex = this.getKnex();
		const auditLog = knex.schema.createTable(TABLE_NAME, table => {
			table.increments();
			table.string('description').nullable();
			table.json('before').defaultTo('{}');
			table.json('after').defaultTo('{}');
			table.integer('user_id').notNullable();
			table.foreign('user_id').references('user.id');
			table.integer('item_id').notNullable();
			table.foreign('item_id').references('item.id');
			table.timestamps();
		});
		this.addSql(auditLog.toQuery());
	}

	async down(): Promise<void> {
		const knex = this.getKnex();
		this.addSql(knex.schema.dropTable(TABLE_NAME).toQuery());
	}
}
