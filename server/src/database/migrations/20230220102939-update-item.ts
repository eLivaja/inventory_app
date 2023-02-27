import { Migration } from '@mikro-orm/migrations';

const TABLE_NAME = 'item';

export class Migration20230220102939 extends Migration {
	async up() {
		const knex = this.getKnex();
		this.addSql(
			knex.schema
				.alterTable(TABLE_NAME, table => {
					table.integer('office_id').nullable().references('office.id');
				})
				.toQuery()
		);
	}

	async down() {
		const knex = this.getKnex();
		this.addSql(
			knex.schema
				.alterTable(TABLE_NAME, table => {
					table.dropColumn('office_id');
				})
				.toQuery()
		);
	}
}
