import {
	Cascade,
	Collection,
	Entity,
	OneToMany,
	Property,
} from '@mikro-orm/core';

import BaseEntity from './BaseEntity';
import Item from './Item';

@Entity()
class Office extends BaseEntity {
	@Property()
	name: string;

	@OneToMany(() => Item, item => item.office, { cascade: [Cascade.ALL] })
	items = new Collection<Item>(this);

	constructor(name: string) {
		super();
		this.name = name;
	}
}

export default Office;
