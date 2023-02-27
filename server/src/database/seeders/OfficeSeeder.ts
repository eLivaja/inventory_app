import type { EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';

import Office from '../entities/Office';
import data from './data/offices';

export class OfficeSeeder extends Seeder {
	async run(em: EntityManager): Promise<void> {
		data.map(async office => {
			const record = new Office(office.name);
			return em.persist(record);
		});
		await em.flush();
	}
}
