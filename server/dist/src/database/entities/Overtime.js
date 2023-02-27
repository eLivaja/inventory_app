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
exports.Overtime = void 0;
const core_1 = require('@mikro-orm/core');
const BaseEntity_1 = __importDefault(require('./BaseEntity'));
const User_1 = __importDefault(require('./User'));
let Overtime = class Overtime extends BaseEntity_1.default {
	constructor(date, number_of_hours, user) {
		super();
		this.date = date;
		this.number_of_hours = number_of_hours;
		this.user = user;
	}
};
__decorate(
	[(0, core_1.Property)(), __metadata('design:type', Date)],
	Overtime.prototype,
	'date',
	void 0
);
__decorate(
	[(0, core_1.Property)(), __metadata('design:type', Number)],
	Overtime.prototype,
	'number_of_hours',
	void 0
);
__decorate(
	[
		(0, core_1.ManyToOne)({ entity: () => User_1.default }),
		__metadata('design:type', User_1.default),
	],
	Overtime.prototype,
	'user',
	void 0
);
Overtime = __decorate(
	[
		(0, core_1.Entity)(),
		__metadata('design:paramtypes', [Date, Number, User_1.default]),
	],
	Overtime
);
exports.Overtime = Overtime;
exports.default = Overtime;
