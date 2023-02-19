import type { EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';

import { ItemSeeder } from './ItemSeeder';
import { OfficeSeeder } from './OfficeSeeder';
import { UserSeeder } from './UserSeeder';

export class DatabaseSeeder extends Seeder {
	async run(em: EntityManager): Promise<void> {
		return this.call(em, [UserSeeder, OfficeSeeder, ItemSeeder]);
	}
}
