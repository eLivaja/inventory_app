import { Category } from '../../entities/Item';
import { Food } from './../../entities/Food';
type TehnicalEquipment = {
    description: string;
    brand: string;
    left_handed: boolean;
};
type OfficeEquipment = {
    description: string;
};
interface Item {
    name: string;
    status: string;
    description?: string;
    purchaseDate: string;
    category: Category;
    user?: number;
    office?: number | undefined;
    food?: Food;
    officeEquipment?: OfficeEquipment;
    tehnicalEquipment?: TehnicalEquipment;
}
declare const _default: Item[];
export default _default;
