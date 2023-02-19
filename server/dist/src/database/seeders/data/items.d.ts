import { Category } from '../../entities/Item';
import { Food } from './../../entities/Food';
import { OfficeEquipment } from './../../entities/OfficeEquipment';
type TehnicalEquipment = {
    description: string;
    brand: string;
    left_handed: boolean;
};
interface Item {
    name: string;
    status: string;
    description?: string;
    purchaseDate: string;
    category: Category;
    user?: number;
    food?: Food;
    officeEquipment?: OfficeEquipment;
    tehnicalEquipment?: TehnicalEquipment;
}
declare const _default: Item[];
export default _default;
