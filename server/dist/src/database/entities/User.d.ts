import AuditLog from './AuditLog';
import { Collection } from '@mikro-orm/core';
import BaseEntity from './BaseEntity';
import Item from './Item';
declare class User extends BaseEntity {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    items: Collection<Item, object>;
    logs: Collection<AuditLog, object>;
    constructor(firstName: string, lastName: string, email: string, password?: string);
    checkIfUnencryptedPasswordIsValid(unencryptedPassword: string): boolean;
    get fullName(): string;
}
export default User;
