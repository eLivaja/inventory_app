"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../config/database"));
const entities_1 = __importDefault(require("./entities"));
const database = (0, database_1.default)(process.env);
exports.default = Object.assign(Object.assign({}, database), { entities: entities_1.default });
