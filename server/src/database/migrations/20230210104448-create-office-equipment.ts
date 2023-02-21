import { Migration } from '@mikro-orm/migrations';

const TABLE_NAME = 'office_equipment';

export class Migration20230210104448 extends Migration {
	async up(): Promise<void> {
		const knex = this.getKnex();

		const officeEquipment = knex.schema.createTable(TABLE_NAME, table => {
			table.increments();
			table.string('description').nullable();
			table.integer('item_id').notNullable().references('item.id');
			table.timestamps();
		});
		this.addSql(officeEquipment.toQuery());
	}

	async down(): Promise<void> {
		const knex = this.getKnex();
		this.addSql(knex.schema.dropTable(TABLE_NAME).toQuery());
	}
}
