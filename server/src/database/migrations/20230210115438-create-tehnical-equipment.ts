import { Migration } from '@mikro-orm/migrations';

const TABLE_NAME = 'tehnical_equipment';

export class Migration20230210115438 extends Migration {
	async up(): Promise<void> {
		const knex = this.getKnex();

		const tehnicalEquipment = knex.schema.createTable(TABLE_NAME, table => {
			table.increments();
			table.string('brand').notNullable();
			table.string('description').nullable();
			table.boolean('left_handed').defaultTo(false);
			table.integer('item_id').notNullable().references('item.id');
			table.timestamps();
		});
		this.addSql(tehnicalEquipment.toQuery());
	}

	async down(): Promise<void> {
		const knex = this.getKnex();
		this.addSql(knex.schema.dropTable(TABLE_NAME).toQuery());
	}
}
