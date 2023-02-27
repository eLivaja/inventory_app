import AuditLog from './AuditLog';
import BaseEntity from './BaseEntity';
import DaysOff from './DaysOff';
import Food from './Food';
import Item from './Item';
import Office from './Office';
import OfficeEquipment from './OfficeEquipment';
import Overtime from './Overtime';
import TechnicalEquipment from './TechnicalEquipment';
import User from './User';

declare const _default: (
	| typeof BaseEntity
	| typeof Food
	| typeof Item
	| typeof Office
	| typeof OfficeEquipment
	| typeof TechnicalEquipment
	| typeof User
	| typeof AuditLog
	| typeof DaysOff
	| typeof Overtime
)[];
export default _default;
