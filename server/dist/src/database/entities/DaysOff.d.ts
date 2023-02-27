import BaseEntity from './BaseEntity';
import User from './User';

declare const type: {
	readonly VACATION: 'vacation';
	readonly SICK_DAY: 'sick_day';
};
export type Type = (typeof type)[keyof typeof type];
export declare class DaysOff extends BaseEntity {
	start_date: Date;
	end_date: Date;
	status: string;
	type: Type;
	description: string;
	user: User;
	constructor(
		start_date: Date,
		end_date: Date,
		status: string,
		type: Type,
		user: User,
		description?: string
	);
}
export default DaysOff;
