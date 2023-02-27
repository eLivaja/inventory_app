'use strict';
var __importDefault =
	(this && this.__importDefault) ||
	function (mod) {
		return mod && mod.__esModule ? mod : { default: mod };
	};
Object.defineProperty(exports, '__esModule', { value: true });
const AuditLog_1 = __importDefault(require('./AuditLog'));
const BaseEntity_1 = __importDefault(require('./BaseEntity'));
const DaysOff_1 = __importDefault(require('./DaysOff'));
const Food_1 = __importDefault(require('./Food'));
const Item_1 = __importDefault(require('./Item'));
const Office_1 = __importDefault(require('./Office'));
const OfficeEquipment_1 = __importDefault(require('./OfficeEquipment'));
const Overtime_1 = __importDefault(require('./Overtime'));
const TechnicalEquipment_1 = __importDefault(require('./TechnicalEquipment'));
const User_1 = __importDefault(require('./User'));
exports.default = [
	AuditLog_1.default,
	BaseEntity_1.default,
	DaysOff_1.default,
	Food_1.default,
	Item_1.default,
	Office_1.default,
	OfficeEquipment_1.default,
	Overtime_1.default,
	TechnicalEquipment_1.default,
	User_1.default,
];
