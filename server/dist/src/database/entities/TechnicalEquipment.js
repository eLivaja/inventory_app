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
exports.TehnicalEquipment = void 0;
const Item_1 = __importDefault(require('./Item'));
const core_1 = require('@mikro-orm/core');
const BaseEntity_1 = __importDefault(require('./BaseEntity'));
let TehnicalEquipment = class TehnicalEquipment extends BaseEntity_1.default {
	constructor(description, brand, left_handed, item) {
		super();
		this.description = description;
		this.brand = brand;
		this.left_handed = left_handed;
		this.item = item;
	}
};
__decorate(
	[(0, core_1.Property)(), __metadata('design:type', String)],
	TehnicalEquipment.prototype,
	'description',
	void 0
);
__decorate(
	[(0, core_1.Property)(), __metadata('design:type', String)],
	TehnicalEquipment.prototype,
	'brand',
	void 0
);
__decorate(
	[(0, core_1.Property)(), __metadata('design:type', Boolean)],
	TehnicalEquipment.prototype,
	'left_handed',
	void 0
);
__decorate(
	[
		(0, core_1.OneToOne)({ entity: () => Item_1.default }),
		__metadata('design:type', Item_1.default),
	],
	TehnicalEquipment.prototype,
	'item',
	void 0
);
TehnicalEquipment = __decorate(
	[
		(0, core_1.Entity)(),
		__metadata('design:paramtypes', [String, String, Boolean, Item_1.default]),
	],
	TehnicalEquipment
);
exports.TehnicalEquipment = TehnicalEquipment;
exports.default = TehnicalEquipment;
