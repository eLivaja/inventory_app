import Item from './Item';
import { Entity, OneToOne, Property } from '@mikro-orm/core';
import BaseEntity from './BaseEntity';

@Entity()
export class Food extends BaseEntity {
	@Property()
	gluten_free: boolean;

	@Property()
	vegetarian: boolean;

	@Property()
	vegan: boolean;

	@Property()
	brand: string;

	@Property()
	expire_date: string;

	@OneToOne({ entity: () => Item })
	item: Item;

	constructor(
		gluten_free: boolean,
		vegetarian: boolean,
		vegan: boolean,
		brand: string,
		expire_date: string,
    item: Item
	) {
		super();
		this.gluten_free = gluten_free;
		this.vegetarian = vegetarian;
		this.vegan = vegan;
		this.brand = brand;
		this.expire_date = expire_date;
    this.item = item
	}
}

export default Food;
