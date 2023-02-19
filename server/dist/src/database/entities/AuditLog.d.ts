import BaseEntity from './BaseEntity';
import Item from './Item';
import User from './User';
export declare class AuditLog extends BaseEntity {
    description: string;
    user: User;
    item: Item;
    before?: JSON;
    after?: JSON;
    constructor(description: string, before: JSON, after: JSON, user: User, item: Item);
}
export default AuditLog;
