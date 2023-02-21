import { Migration } from '@mikro-orm/migrations';

const TABLE_NAME = 'food';

export class Migration20230210101544 extends Migration {
	async up(): Promise<void> {
		const knex = this.getKnex();

		const food = knex.schema.createTable(TABLE_NAME, table => {
			table.increments();
			table.string('brand').notNullable();
			table.string('expire_date').notNullable();
			table.boolean('vegetarian').defaultTo(false);
			table.boolean('vegan').defaultTo(false);
			table.boolean('gluten_free').defaultTo(false);
			table.integer('item_id').notNullable().references('item.id');
			table.timestamps();
		});
		this.addSql(food.toQuery());
	}

	async down(): Promise<void> {
		const knex = this.getKnex();
		this.addSql(knex.schema.dropTable(TABLE_NAME).toQuery());
	}
}
