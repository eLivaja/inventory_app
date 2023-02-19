import AuditLog from './AuditLog';
import {
	Cascade,
	Collection,
	Entity,
	OneToMany,
	Property,
	Unique,
} from '@mikro-orm/core';
import BaseEntity from './BaseEntity';
import Item from './Item';
import * as bcrypt from 'bcryptjs';

@Entity()
class User extends BaseEntity {
	@Property()
	firstName: string;

	@Property()
	lastName: string;

	@Property()
	@Unique()
	email: string;

	@Property({ nullable: true, hidden: true })
	password: string;

	@OneToMany(() => Item, item => item.user, { cascade: [Cascade.ALL] })
	items = new Collection<Item>(this);

	@OneToMany(() => AuditLog, log => log.user, { cascade: [Cascade.ALL] })
	logs = new Collection<AuditLog>(this);

	constructor(
		firstName: string,
		lastName: string,
		email: string,
		password?: string
	) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		if (password) this.password = bcrypt.hashSync(password);
	}

	checkIfUnencryptedPasswordIsValid(unencryptedPassword: string) {
		return bcrypt.compareSync(unencryptedPassword, this.password);
	}
}

export default User;
