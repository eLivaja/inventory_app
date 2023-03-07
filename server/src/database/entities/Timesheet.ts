import { DateTimeType, Entity, ManyToOne, Property } from '@mikro-orm/core';

import BaseEntity from './BaseEntity';
import User from './User';

@Entity()
export class Timesheet extends BaseEntity {
	@Property()
	date: Date;

	@Property()
	start: DateTimeType;

	@Property()
	end: DateTimeType;

	@Property({ nullable: true })
	comment?: string;

	@ManyToOne({ entity: () => User })
	user: User;

	constructor(
		date: Date,
		start: DateTimeType,
		end: DateTimeType,
		comment: string,
		user: User
	) {
		super();
		this.date = date;
		this.start = start;
		this.end = end;
		if (comment) this.comment = comment;
		this.user = user;
	}
}

export default Timesheet;
