import { Collection } from '@mikro-orm/core';
import BaseEntity from './BaseEntity';
import Item from './Item';
declare class Office extends BaseEntity {
    name: string;
    items: Collection<Item, object>;
    constructor(name: string);
}
export default Office;
