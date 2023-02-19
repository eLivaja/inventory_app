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
const core_1 = require("@mikro-orm/core");
const BaseEntity_1 = __importDefault(require("./BaseEntity"));
const Item_1 = __importDefault(require("./Item"));
let Office = class Office extends BaseEntity_1.default {
    constructor(name) {
        super();
        this.items = new core_1.Collection(this);
        this.name = name;
    }
};
__decorate([
    (0, core_1.Property)(),
    __metadata("design:type", String)
], Office.prototype, "name", void 0);
__decorate([
    (0, core_1.OneToMany)(() => Item_1.default, item => item.office, { cascade: [core_1.Cascade.ALL] }),
    __metadata("design:type", Object)
], Office.prototype, "items", void 0);
Office = __decorate([
    (0, core_1.Entity)(),
    __metadata("design:paramtypes", [String])
], Office);
exports.default = Office;
