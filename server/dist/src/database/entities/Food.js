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
exports.Food = void 0;
const Item_1 = __importDefault(require('./Item'));
const core_1 = require('@mikro-orm/core');
const BaseEntity_1 = __importDefault(require('./BaseEntity'));
let Food = class Food extends BaseEntity_1.default {
	constructor(gluten_free, vegetarian, vegan, brand, expire_date, item) {
		super();
		this.gluten_free = gluten_free;
		this.vegetarian = vegetarian;
		this.vegan = vegan;
		this.brand = brand;
		this.expire_date = expire_date;
		this.item = item;
	}
};
__decorate(
	[(0, core_1.Property)(), __metadata('design:type', Boolean)],
	Food.prototype,
	'gluten_free',
	void 0
);
__decorate(
	[(0, core_1.Property)(), __metadata('design:type', Boolean)],
	Food.prototype,
	'vegetarian',
	void 0
);
__decorate(
	[(0, core_1.Property)(), __metadata('design:type', Boolean)],
	Food.prototype,
	'vegan',
	void 0
);
__decorate(
	[(0, core_1.Property)(), __metadata('design:type', String)],
	Food.prototype,
	'brand',
	void 0
);
__decorate(
	[(0, core_1.Property)(), __metadata('design:type', String)],
	Food.prototype,
	'expire_date',
	void 0
);
__decorate(
	[
		(0, core_1.OneToOne)({ entity: () => Item_1.default }),
		__metadata('design:type', Item_1.default),
	],
	Food.prototype,
	'item',
	void 0
);
Food = __decorate(
	[
		(0, core_1.Entity)(),
		__metadata('design:paramtypes', [
			Boolean,
			Boolean,
			Boolean,
			String,
			String,
			Item_1.default,
		]),
	],
	Food
);
exports.Food = Food;
exports.default = Food;
