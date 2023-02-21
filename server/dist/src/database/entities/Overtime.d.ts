import BaseEntity from './BaseEntity';
import User from './User';
export declare class Overtime extends BaseEntity {
    date: Date;
    number_of_hours: number;
    user: User;
    constructor(date: Date, number_of_hours: number, user: User);
}
export default Overtime;
