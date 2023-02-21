"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = void 0;
const core_1 = require("@mikro-orm/core");
const AuditLog_1 = __importDefault(require("./AuditLog"));
const BaseEntity_1 = __importDefault(require("./BaseEntity"));
const Food_1 = __importDefault(require("./Food"));
const Office_1 = __importDefault(require("./Office"));
const OfficeEquipment_1 = __importDefault(require("./OfficeEquipment"));
const TechnicalEquipment_1 = __importDefault(require("./TechnicalEquipment"));
const User_1 = __importDefault(require("./User"));
const category = {
    FOOD: 'food',
    OFFICE_EQUIPMENT: 'office_equipment',
    TEHNICAL_EQUIPMENT: 'tehnical_equipment',
};
let Item = class Item extends BaseEntity_1.default {
    constructor(name, status, purchase_date, category, description, user, office, food, office_equipment, tehnical_equipment) {
        super();
        this.logs = new core_1.Collection(this);
        this.name = name;
        this.status = status;
        this.purchase_date = purchase_date;
        this.category = category;
        if (description)
            this.description = description;
        if (user)
            this.user = user;
        if (office)
            this.office = office;
        if (food)
            this.food = food;
        if (office_equipment)
            this.office_equipment = office_equipment;
        if (tehnical_equipment)
            this.tehnical_equipment = tehnical_equipment;
    }
    get assignedTo() {
        if (this.user)
            return this.user.fullName;
        if (this.office)
            return this.office.name;
        return null;
    }
};
__decorate([
    (0, core_1.Property)(),
    __metadata("design:type", String)
], Item.prototype, "name", void 0);
__decorate([
    (0, core_1.Property)(),
    __metadata("design:type", String)
], Item.prototype, "status", void 0);
__decorate([
    (0, core_1.Property)({ nullable: true }),
    __metadata("design:type", String)
], Item.prototype, "description", void 0);
__decorate([
    (0, core_1.Property)(),
    __metadata("design:type", Date)
], Item.prototype, "purchase_date", void 0);
__decorate([
    (0, core_1.Enum)(),
    __metadata("design:type", String)
], Item.prototype, "category", void 0);
__decorate([
    (0, core_1.ManyToOne)({ entity: () => User_1.default, nullable: true }),
    __metadata("design:type", User_1.default)
], Item.prototype, "user", void 0);
__decorate([
    (0, core_1.ManyToOne)({ entity: () => Office_1.default, nullable: true }),
    __metadata("design:type", Office_1.default)
], Item.prototype, "office", void 0);
__decorate([
    (0, core_1.OneToOne)(() => Food_1.default, food => food.item),
    __metadata("design:type", Food_1.default)
], Item.prototype, "food", void 0);
__decorate([
    (0, core_1.OneToOne)(() => OfficeEquipment_1.default, office_equipment => office_equipment.item),
    __metadata("design:type", OfficeEquipment_1.default)
], Item.prototype, "office_equipment", void 0);
__decorate([
    (0, core_1.OneToOne)(() => TechnicalEquipment_1.default, tehnical_equipment => tehnical_equipment.item),
    __metadata("design:type", TechnicalEquipment_1.default)
], Item.prototype, "tehnical_equipment", void 0);
__decorate([
    (0, core_1.OneToMany)(() => AuditLog_1.default, log => log.item, { cascade: [core_1.Cascade.ALL] }),
    __metadata("design:type", Object)
], Item.prototype, "logs", void 0);
__decorate([
    (0, core_1.Property)({ persist: false }),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], Item.prototype, "assignedTo", null);
Item = __decorate([
    (0, core_1.Entity)(),
    __metadata("design:paramtypes", [String, String, Date, String, String, User_1.default,
        Office_1.default,
        Food_1.default,
        OfficeEquipment_1.default,
        TechnicalEquipment_1.default])
], Item);
exports.Item = Item;
exports.default = Item;
