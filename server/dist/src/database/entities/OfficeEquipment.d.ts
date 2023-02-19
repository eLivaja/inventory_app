import Item from './Item';
import BaseEntity from './BaseEntity';
export declare class OfficeEquipment extends BaseEntity {
    description: string;
    item: Item;
    constructor(description: string, item: Item);
}
export default OfficeEquipment;
