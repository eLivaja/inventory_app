import { Migration } from '@mikro-orm/migrations';

const TABLE_NAME = "item_order"

export class Migration20230307130900 extends Migration {

	async up(): Promise<void> {
		const knex = this.getKnex();
		const itemOrder = knex.schema.createTable(TABLE_NAME, table => {
			table.increments();
			table.string('name').notNullable();
      table.string('description').nullable();
      table.integer('quantity').notNullable();
      table.integer('user_id').notNullable().references('user.id');
      table.integer('item_id').nullable().references('item.id');
			table.timestamps();
		});
		this.addSql(itemOrder.toQuery());
	}

	async down(): Promise<void> {
		const knex = this.getKnex();
		this.addSql(knex.schema.dropTable(TABLE_NAME).toQuery());
	}

}
