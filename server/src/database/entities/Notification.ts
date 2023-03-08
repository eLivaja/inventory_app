import { Entity, ManyToMany } from '@mikro-orm/core';

import BaseEntity from './BaseEntity';
import Item from './Item';
import User from './User';

@Entity()
class Notification extends BaseEntity {
	@ManyToMany({ entity: () => User })
	user: User;

	@ManyToMany({ entity: () => Item })
	item: Item;

	constructor(user: User, item: Item) {
		super();
		this.user = user;
		this.item = item;
	}
}

export default Notification;
