import { Entity, OneToOne, Property } from '@mikro-orm/core';

import BaseEntity from './BaseEntity';
import Item from './Item';

@Entity()
export class TehnicalEquipment extends BaseEntity {
	@Property()
	description: string;

	@Property()
	brand: string;

	@Property()
	left_handed: boolean;

	@OneToOne({ entity: () => Item })
	item: Item;

	constructor(
		description: string,
		brand: string,
		left_handed: boolean,
		item: Item
	) {
		super();
		this.description = description;
		this.brand = brand;
		this.left_handed = left_handed;
		this.item = item;
	}
}

export default TehnicalEquipment;
