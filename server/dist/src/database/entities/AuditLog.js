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
exports.AuditLog = void 0;
const core_1 = require('@mikro-orm/core');
const BaseEntity_1 = __importDefault(require('./BaseEntity'));
const Item_1 = __importDefault(require('./Item'));
const User_1 = __importDefault(require('./User'));
let AuditLog = class AuditLog extends BaseEntity_1.default {
	constructor(description, before, after, user, item) {
		super();
		this.description = description;
		this.before = before;
		this.after = after;
		this.user = user;
		this.item = item;
	}
};
__decorate(
	[(0, core_1.Property)({ type: 'text' }), __metadata('design:type', String)],
	AuditLog.prototype,
	'description',
	void 0
);
__decorate(
	[(0, core_1.ManyToOne)(), __metadata('design:type', User_1.default)],
	AuditLog.prototype,
	'user',
	void 0
);
__decorate(
	[(0, core_1.ManyToOne)(), __metadata('design:type', Item_1.default)],
	AuditLog.prototype,
	'item',
	void 0
);
__decorate(
	[(0, core_1.Property)({ nullable: true }), __metadata('design:type', Object)],
	AuditLog.prototype,
	'before',
	void 0
);
__decorate(
	[(0, core_1.Property)({ nullable: true }), __metadata('design:type', Object)],
	AuditLog.prototype,
	'after',
	void 0
);
AuditLog = __decorate(
	[
		(0, core_1.Entity)(),
		__metadata('design:paramtypes', [
			String,
			Object,
			Object,
			User_1.default,
			Item_1.default,
		]),
	],
	AuditLog
);
exports.AuditLog = AuditLog;
exports.default = AuditLog;
