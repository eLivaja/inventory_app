"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const middlewares_1 = __importDefault(require("./middlewares"));
const router_1 = __importDefault(require("./router"));
exports.default = {
    init(app) {
        app.use(middlewares_1.default.pre);
        app.use('/api', router_1.default);
    },
};
