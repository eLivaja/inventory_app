import {
	Cascade,
	Collection,
	Entity,
	Enum,
	ManyToOne,
	OneToMany,
	OneToOne,
	Property,
} from '@mikro-orm/core';

import AuditLog from './AuditLog';
import BaseEntity from './BaseEntity';
import Food from './Food';
import Office from './Office';
import OfficeEquipment from './OfficeEquipment';
import TehnicalEquipment from './TechnicalEquipment';
import User from './User';

const category = {
	FOOD: 'food',
	OFFICE_EQUIPMENT: 'office_equipment',
	TEHNICAL_EQUIPMENT: 'tehnical_equipment',
} as const;

export type Category = (typeof category)[keyof typeof category];

@Entity()
export class Item extends BaseEntity {
	@Property()
	name: string;

	@Property()
	status: string;

	@Property({ nullable: true })
	description: string;

	@Property()
	purchase_date: Date;

	@Enum()
	category: Category;

	@ManyToOne({ entity: () => User, nullable: true })
	user?: User;

	@ManyToOne({ entity: () => Office, nullable: true })
	office?: Office;

	@OneToOne(() => Food, food => food.item)
	food?: Food;

	@OneToOne(() => OfficeEquipment, office_equipment => office_equipment.item)
	office_equipment?: OfficeEquipment;

	@OneToOne(
		() => TehnicalEquipment,
		tehnical_equipment => tehnical_equipment.item
	)
	tehnical_equipment?: TehnicalEquipment;

	@OneToMany(() => AuditLog, log => log.item, { cascade: [Cascade.ALL] })
	logs = new Collection<AuditLog>(this);

	constructor(
		name: string,
		status: string,
		purchase_date: Date,
		category: Category,
		description?: string,
		user?: User,
		office?: Office,
		food?: Food,
		office_equipment?: OfficeEquipment,
		tehnical_equipment?: TehnicalEquipment
	) {
		super();
		this.name = name;
		this.status = status;

		this.purchase_date = purchase_date;
		this.category = category;
		if (description) this.description = description;
		if (user) this.user = user;
		if (office) this.office = office;
		if (food) this.food = food;
		if (office_equipment) this.office_equipment = office_equipment;
		if (tehnical_equipment) this.tehnical_equipment = tehnical_equipment;
	}

	@Property({ persist: false })
	get assignedTo(): string | null {
		if (this.user) return this.user.fullName;
		if (this.office) return this.office.name;
		return null;
	}
}

export default Item;
