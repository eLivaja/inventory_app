import { Collection } from '@mikro-orm/core';
import AuditLog from './AuditLog';
import BaseEntity from './BaseEntity';
import Food from './Food';
import Office from './Office';
import OfficeEquipment from './OfficeEquipment';
import TehnicalEquipment from './TechnicalEquipment';
import User from './User';
declare const category: {
    readonly FOOD: "food";
    readonly OFFICE_EQUIPMENT: "office_equipment";
    readonly TEHNICAL_EQUIPMENT: "tehnical_equipment";
};
export type Category = (typeof category)[keyof typeof category];
export declare class Item extends BaseEntity {
    name: string;
    status: string;
    description: string;
    purchase_date: Date;
    category: Category;
    user?: User;
    office?: Office;
    food?: Food;
    office_equipment?: OfficeEquipment;
    tehnical_equipment?: TehnicalEquipment;
    logs: Collection<AuditLog, object>;
    constructor(name: string, status: string, purchase_date: Date, category: Category, description?: string, user?: User, food?: Food, office_equipment?: OfficeEquipment, tehnical_equipment?: TehnicalEquipment);
}
export default Item;
