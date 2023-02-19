import {
	Entity,
	Property,
	ManyToOne,
} from '@mikro-orm/core';
import BaseEntity from './BaseEntity';
import User from './User';


@Entity()
export class Overtime extends BaseEntity {

	@Property()
	date: Date;

  @Property()
	number_of_hours: number;

  @Property()
	project: string;

	@ManyToOne({ entity: () => User })
	user: User;

	constructor(
		date: Date,
		number_of_hours: number,
		project: string,
		user: User
	) {
		super();
		this.date = date;
		this.number_of_hours = number_of_hours;
		this.project = project;
		this.user = user;
	}
}

export default Overtime;
