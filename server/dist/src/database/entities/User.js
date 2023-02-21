"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AuditLog_1 = __importDefault(require("./AuditLog"));
const core_1 = require("@mikro-orm/core");
const BaseEntity_1 = __importDefault(require("./BaseEntity"));
const Item_1 = __importDefault(require("./Item"));
const bcrypt = __importStar(require("bcryptjs"));
let User = class User extends BaseEntity_1.default {
    constructor(firstName, lastName, email, password) {
        super();
        this.items = new core_1.Collection(this);
        this.logs = new core_1.Collection(this);
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        if (password)
            this.password = bcrypt.hashSync(password);
    }
    checkIfUnencryptedPasswordIsValid(unencryptedPassword) {
        return bcrypt.compareSync(unencryptedPassword, this.password);
    }
    get fullName() {
        return [this.firstName, this.lastName].filter(Boolean).join(' ');
    }
};
__decorate([
    (0, core_1.Property)(),
    __metadata("design:type", String)
], User.prototype, "firstName", void 0);
__decorate([
    (0, core_1.Property)(),
    __metadata("design:type", String)
], User.prototype, "lastName", void 0);
__decorate([
    (0, core_1.Property)(),
    (0, core_1.Unique)(),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, core_1.Property)({ nullable: true, hidden: true }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, core_1.OneToMany)(() => Item_1.default, item => item.user, { cascade: [core_1.Cascade.ALL] }),
    __metadata("design:type", Object)
], User.prototype, "items", void 0);
__decorate([
    (0, core_1.OneToMany)(() => AuditLog_1.default, log => log.user, { cascade: [core_1.Cascade.ALL] }),
    __metadata("design:type", Object)
], User.prototype, "logs", void 0);
__decorate([
    (0, core_1.Property)({ persist: false }),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [])
], User.prototype, "fullName", null);
User = __decorate([
    (0, core_1.Entity)(),
    __metadata("design:paramtypes", [String, String, String, String])
], User);
exports.default = User;
