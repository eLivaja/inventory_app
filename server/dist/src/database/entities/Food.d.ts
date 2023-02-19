import Item from './Item';
import BaseEntity from './BaseEntity';
export declare class Food extends BaseEntity {
    gluten_free: boolean;
    vegetarian: boolean;
    vegan: boolean;
    brand: string;
    expire_date: string;
    item: Item;
    constructor(gluten_free: boolean, vegetarian: boolean, vegan: boolean, brand: string, expire_date: string, item: Item);
}
export default Food;
