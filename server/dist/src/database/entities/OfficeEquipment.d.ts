import BaseEntity from './BaseEntity';
import Item from './Item';

export declare class OfficeEquipment extends BaseEntity {
	description: string;
	item: Item;
	constructor(description: string, item: Item);
}
export default OfficeEquipment;
