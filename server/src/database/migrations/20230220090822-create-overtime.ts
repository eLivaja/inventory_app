import { Migration } from '@mikro-orm/migrations';

const TABLE_NAME = 'overtime';

export class Migration20230220090822 extends Migration {

  async up(): Promise<void> {
		const knex = this.getKnex();
		const overtime = knex.schema.createTable(TABLE_NAME, table => {
			table.increments();
			table.string('date').notNullable();
      table.string('number_of_hours').notNullable();
      table.integer('user_id').notNullable().references('user.id');
			table.timestamps();
		});
		this.addSql(overtime.toQuery());
	}

	async down(): Promise<void> {
		const knex = this.getKnex();
		this.addSql(knex.schema.dropTable(TABLE_NAME).toQuery());
	}


}
