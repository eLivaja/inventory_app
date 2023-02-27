import BaseEntity from './BaseEntity';
import Item from './Item';

export declare class TehnicalEquipment extends BaseEntity {
	description: string;
	brand: string;
	left_handed: boolean;
	item: Item;
	constructor(
		description: string,
		brand: string,
		left_handed: boolean,
		item: Item
	);
}
export default TehnicalEquipment;
