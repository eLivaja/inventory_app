import { EntityManager } from '@mikro-orm/postgresql';
import { Seeder } from '@mikro-orm/seeder';

import Item from '../entities/Item';
import Office from '../entities/Office';
import User from '../entities/User';
import { Food } from './../entities/Food';
import { OfficeEquipment } from './../entities/OfficeEquipment';
import { TehnicalEquipment } from './../entities/TechnicalEquipment';
import data from './data/items';

export class ItemSeeder extends Seeder {
	async run(em: EntityManager): Promise<void> {
		const users = await em.getRepository(User).findAll();
    const offices = await em.getRepository(Office).findAll();

		data.map(async item => {
			const user = users.find(it => it.id === item.user);
      const office = offices.find(it => it.id === item.office);
			const record = new Item(
				item.name,
				item.status,
				new Date(item.purchaseDate),
				item.category,
				item.description,
				user,
        office
			);

			if (item.tehnicalEquipment) {
				const equipment = item.tehnicalEquipment;
				const technicalEquipment = new TehnicalEquipment(
					equipment.description,
					equipment.brand,
					equipment.left_handed,
					record
				);
				em.persist(technicalEquipment);
			}

			if (item.officeEquipment) {
				const equipment = item.officeEquipment;
				const officeEquipment = new OfficeEquipment(
					equipment.description,
					record
				);
				em.persist(officeEquipment);
			}

			if (item.food) {
				const seedFood = item.food;
				const food = new Food(
					seedFood.vegan,
					seedFood.vegetarian,
					seedFood.gluten_free,
					seedFood.expire_date,
					seedFood.brand,
					record
				);
				em.persist(food);
			}
			return em.persist(record);
		});
		await em.flush();
	}
}
