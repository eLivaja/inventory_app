import { Entity, OneToOne, Property } from '@mikro-orm/core';

import BaseEntity from './BaseEntity';
import Item from './Item';

@Entity()
export class OfficeEquipment extends BaseEntity {
	@Property()
	description: string;

	@OneToOne({ entity: () => Item })
	item: Item;

	constructor(description: string, item: Item) {
		super();
		this.description = description;
		this.item = item;
	}
}

export default OfficeEquipment;
