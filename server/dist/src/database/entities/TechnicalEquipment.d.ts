import Item from './Item';
import BaseEntity from './BaseEntity';
export declare class TehnicalEquipment extends BaseEntity {
    description: string;
    brand: string;
    left_handed: boolean;
    item: Item;
    constructor(description: string, brand: string, left_handed: boolean, item: Item);
}
export default TehnicalEquipment;
