import type { EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';

import User from '../entities/User';
import data from './data/users';

export class UserSeeder extends Seeder {
	async run(em: EntityManager): Promise<void> {
		data.map(async user => {
			const record = new User(
				user.firstName,
				user.lastName,
				user.email,
				user.password
			);
			return em.persist(record);
		});
		await em.flush();
	}
}
