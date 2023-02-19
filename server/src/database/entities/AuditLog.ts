import { Entity, ManyToOne, Property } from '@mikro-orm/core';
import BaseEntity from './BaseEntity';
import Item from './Item';
import User from './User';

@Entity()
export class AuditLog extends BaseEntity {
	@Property({ type: 'text' })
	description: string;

	@ManyToOne()
	user: User;

	@ManyToOne()
	item: Item;

	@Property({ nullable: true })
	before?: JSON;

	@Property({ nullable: true })
	after?: JSON;

	constructor(
		description: string,
		before: JSON,
		after: JSON,
		user: User,
		item: Item
	) {
		super();
		this.description = description;
		this.before = before;
		this.after = after;
		this.user = user;
		this.item = item;
	}
}

export default AuditLog;
