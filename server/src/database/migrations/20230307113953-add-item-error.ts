import { Migration } from '@mikro-orm/migrations';

const TABLE_NAME = 'item';

export class Migration20230307113953 extends Migration {

	async up() {
		const knex = this.getKnex();
		this.addSql(
			knex.schema
				.alterTable(TABLE_NAME, table => {
					table.boolean('has_error').notNullable();
          table.string('error_description').nullable();
				})
				.toQuery()
		);
	}

	async down() {
		const knex = this.getKnex();
		this.addSql(
			knex.schema
				.alterTable(TABLE_NAME, table => {
					table.dropColumn('has_error');
          table.dropColumn('error_description');
				})
				.toQuery()
		);
	}

}
