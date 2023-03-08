import { Entity, ManyToMany, ManyToOne, Property } from '@mikro-orm/core';

import BaseEntity from './BaseEntity';
import { Item } from './Item';
import User from './User';

@Entity()
export class ItemOrder extends BaseEntity {
	@Property()
	name: string;

	@Property({ nullable: true })
	description: string;

	@Property()
	quantity: number;

	@ManyToOne({ entity: () => User })
	user: User;

	@ManyToMany({ entity: () => Item, nullable: true })
	item?: Item;

	constructor(
		name: string,
		quantity: number,
		user: User,
		description?: string,
		item?: Item
	) {
		super();
		this.name = name;
		this.quantity = quantity;
		this.user = user;
		if (description) this.description = description;
		if (item) this.item = item;
	}
}

export default ItemOrder;
