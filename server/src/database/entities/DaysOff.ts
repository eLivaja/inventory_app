import {
	Entity,
	Enum,
	Property,
	ManyToOne,
} from '@mikro-orm/core';
import BaseEntity from './BaseEntity';
import User from './User';

const type = {
	VACATION: 'vacation',
	SICK_DAY: 'sick_day',
} as const;

export type Type = (typeof type)[keyof typeof type];

@Entity()
export class DaysOff extends BaseEntity {

	@Property()
	start_date: Date;

  @Property()
	end_date: Date;

  @Property()
	status: string;

	@Enum()
	type: Type;

  @Property({ nullable: true })
	description: string;

	@ManyToOne({ entity: () => User })
	user: User;

	constructor(
		start_date: Date,
		end_date: Date,
		status: string,
    type: Type,
		user: User,
    description?: string,
	) {
		super();
		this.start_date = start_date;
		this.end_date = end_date;
		this.status = status;
    this.type = type;
		this.user = user;
    if (description) this.description = description;
	}
}

export default DaysOff;
