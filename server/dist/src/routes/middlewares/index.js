"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const RequestContext_js_1 = __importDefault(require("./RequestContext.js"));
const helmet_js_1 = __importDefault(require("./helmet.js"));
exports.default = {
    pre: [
        (0, cors_1.default)(),
        express_1.default.urlencoded({ extended: true }),
        express_1.default.json(),
        (0, cookie_parser_1.default)(),
        ...helmet_js_1.default,
        RequestContext_js_1.default,
    ],
};
