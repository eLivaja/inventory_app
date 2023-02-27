'use strict';
var __decorate =
	(this && this.__decorate) ||
	function (decorators, target, key, desc) {
		var c = arguments.length,
			r =
				c < 3
					? target
					: desc === null
					? (desc = Object.getOwnPropertyDescriptor(target, key))
					: desc,
			d;
		if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
			r = Reflect.decorate(decorators, target, key, desc);
		else
			for (var i = decorators.length - 1; i >= 0; i--)
				if ((d = decorators[i]))
					r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
var __metadata =
	(this && this.__metadata) ||
	function (k, v) {
		if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function')
			return Reflect.metadata(k, v);
	};
var __importDefault =
	(this && this.__importDefault) ||
	function (mod) {
		return mod && mod.__esModule ? mod : { default: mod };
	};
Object.defineProperty(exports, '__esModule', { value: true });
exports.DaysOff = void 0;
const core_1 = require('@mikro-orm/core');
const BaseEntity_1 = __importDefault(require('./BaseEntity'));
const User_1 = __importDefault(require('./User'));
const type = {
	VACATION: 'vacation',
	SICK_DAY: 'sick_day',
};
let DaysOff = class DaysOff extends BaseEntity_1.default {
	constructor(start_date, end_date, status, type, user, description) {
		super();
		this.start_date = start_date;
		this.end_date = end_date;
		this.status = status;
		this.type = type;
		this.user = user;
		if (description) this.description = description;
	}
};
__decorate(
	[(0, core_1.Property)(), __metadata('design:type', Date)],
	DaysOff.prototype,
	'start_date',
	void 0
);
__decorate(
	[(0, core_1.Property)(), __metadata('design:type', Date)],
	DaysOff.prototype,
	'end_date',
	void 0
);
__decorate(
	[(0, core_1.Property)(), __metadata('design:type', String)],
	DaysOff.prototype,
	'status',
	void 0
);
__decorate(
	[(0, core_1.Enum)(), __metadata('design:type', String)],
	DaysOff.prototype,
	'type',
	void 0
);
__decorate(
	[(0, core_1.Property)({ nullable: true }), __metadata('design:type', String)],
	DaysOff.prototype,
	'description',
	void 0
);
__decorate(
	[
		(0, core_1.ManyToOne)({ entity: () => User_1.default }),
		__metadata('design:type', User_1.default),
	],
	DaysOff.prototype,
	'user',
	void 0
);
DaysOff = __decorate(
	[
		(0, core_1.Entity)(),
		__metadata('design:paramtypes', [
			Date,
			Date,
			String,
			String,
			User_1.default,
			String,
		]),
	],
	DaysOff
);
exports.DaysOff = DaysOff;
exports.default = DaysOff;
